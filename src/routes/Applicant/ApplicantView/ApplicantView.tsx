import React from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button, Grid } from '@material-ui/core';

import { api } from '../../../core/api';
import { applicantRoutePaths } from '../ApplicantRoutes';
import { ApplicantViewTable } from './ApplicantViewTable.ts/ApplicantViewTable';
import { useInitialApplicantFetch } from './ApplicantView.hooks';

interface Props {}

export const ApplicantView: React.FunctionComponent<Props> = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const asyncGetApplicants = useAsyncCallback(api.applicants.list);

  useInitialApplicantFetch(asyncGetApplicants.execute);

  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} justify="flex-end">
        <Button color="primary" type="submit" variant="contained" onClick={goToAddApplicant}>
          {t('applicantView.addApplicant')}
        </Button>
      </Grid>
      <Grid container item xs={12}>
        <ApplicantViewTable
          isLoading={asyncGetApplicants.loading}
          data={asyncGetApplicants.result}
          getApplicants={asyncGetApplicants.execute}
        />
      </Grid>
    </Grid>
  );

  function goToAddApplicant(): void {
    history.push(applicantRoutePaths.applicantAdd);
  }
};
