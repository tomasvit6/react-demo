import React from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTypedController } from '@hookform/strictly-typed';
import { Button, Grid } from '@material-ui/core';

import { TextInput } from '../../../../components/Form/TextInput/TextInput';
import { api } from '../../../../core/api';
import { Applicant } from '../../../../core/api/applicants/applicants.types';
import { TypedRenderProps } from '../../../../core/types/form.types';
import { applicantRoutePaths } from '../../ApplicantRoutes';
import { schema } from './ApplicantForm.schema';
import { ApplicantFormValues } from './ApplicantForm.types';

interface Props {
  editMode: boolean;
  applicant?: Applicant;
}

export const ApplicantForm: React.FunctionComponent<Props> = (props) => {
  const { editMode, applicant } = props;
  const initApplicant = new Applicant(applicant);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const history = useHistory();
  const asyncOnSubmit = useAsyncCallback(onSubmit);
  const formMethods = useForm({
    resolver: yupResolver(schema),
    defaultValues: initApplicant,
  });
  const TypedController = useTypedController<ApplicantFormValues>({ control: formMethods.control });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(asyncOnSubmit.execute)}>
        <Grid direction="column" container spacing={2}>
          <Grid item xs={12}>
            <TypedController
              name="name"
              render={({ name }: TypedRenderProps) => <TextInput label={t('applicantForm.label.name')} name={name} />}
            />
          </Grid>
          <Grid item xs={12}>
            <TypedController
              name="job"
              render={({ name }: TypedRenderProps) => <TextInput label={t('applicantForm.label.job')} name={name} />}
            />
          </Grid>
          <Grid item xs={12}>
            <TypedController
              name="email"
              render={({ name }: TypedRenderProps) => <TextInput label={t('applicantForm.label.email')} name={name} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" type="submit" variant="contained">
              {getButtonText()}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );

  async function onSubmit(data: ApplicantFormValues): Promise<void> {
    try {
      if (editMode) {
        await api.applicants.update(initApplicant.id, data);
        enqueueSnackbar(t('notifications.updateSuccess'), { variant: 'success' });
      } else {
        await api.applicants.add(data);
        enqueueSnackbar(t('notifications.createSuccess'), { variant: 'success' });
      }

      history.push(applicantRoutePaths.applicantView);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  }

  function getButtonText(): string {
    const submitText = editMode ? t('common.update') : t('common.create');
    const buttonText = asyncOnSubmit.loading ? t('common.loading') : submitText;

    return buttonText;
  }
};
