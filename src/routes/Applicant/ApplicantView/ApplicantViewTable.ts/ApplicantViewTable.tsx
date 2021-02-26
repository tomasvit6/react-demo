import React from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { useTranslation } from 'react-i18next';
import { generatePath, useHistory } from 'react-router-dom';
import { Column } from 'material-table';
import { useSnackbar } from 'notistack';

import { Table } from '../../../../components/Table/Table';
import { api } from '../../../../core/api';
import { Applicant } from '../../../../core/api/applicants/applicants.types';
import { applicantRoutePaths } from '../../ApplicantRoutes';

interface Props {
  isLoading: boolean;
  getApplicants: () => Promise<Applicant[]>;
  data?: Applicant[];
}

export const ApplicantViewTable: React.FunctionComponent<Props> = (props) => {
  const { data = [], isLoading, getApplicants } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const asyncOnDelete = useAsyncCallback(onDelete);
  const columns: Column<Applicant>[] = React.useMemo(
    () =>
      [
        {
          width: 150,
          title: t('applicantViewTable.table.label.name'),
          field: 'name',
        },
        {
          title: t('applicantViewTable.table.label.job'),
          field: 'job',
        },
        {
          title: t('applicantViewTable.table.label.email'),
          field: 'email',
        },
        {
          title: t('applicantViewTable.table.label.email'),
          field: 'email',
        },
        {
          title: t('applicantViewTable.table.label.createdAt'),
          field: 'createdAt',
        },
        {
          title: t('applicantViewTable.table.label.updatedAt'),
          field: 'updatedAt',
        },
      ] as Column<Applicant>[],
    [t],
  );

  return (
    <Table
      isLoading={isLoading}
      data={data}
      columns={columns}
      actions={[
        {
          action: 'EDIT',
          onClick: onEdit,
        },
        {
          action: 'DELETE',
          onClick: asyncOnDelete.execute,
        },
      ]}
      title={t('applicantViewTable.table.title')}
    ></Table>
  );

  async function onDelete(event: any, rowData: Applicant): Promise<void> {
    try {
      await api.applicants.remove(rowData.id);
      enqueueSnackbar(t('notifications.deleteSuccess'), { variant: 'success' });
      getApplicants();
    } catch (err) {
      enqueueSnackbar(t(err.message), { variant: 'error' });
    }
  }

  function onEdit(event: any, rowData: Applicant): void {
    const path = generatePath(applicantRoutePaths.applicantEdit, { id: rowData.id });
    history.push(path);
  }
};
