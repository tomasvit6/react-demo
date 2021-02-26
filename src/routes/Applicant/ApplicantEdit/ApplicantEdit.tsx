import React from 'react';
import { useAsync } from 'react-async-hook';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { CenteredLoader } from '../../../components/Loaders/CenteredLoader/CenteredLoader';
import { api } from '../../../core/api';
import { Applicant } from '../../../core/api/applicants/applicants.types';
import { pageNotFoundRoutePaths } from '../../PageNotFound/PageNotFoundRoutes';
import { ApplicantForm } from '../shared/ApplicantForm/ApplicantForm';

interface Props {}

interface RouteParams {
  id: string;
}

export const ApplicantEdit: React.FunctionComponent<Props> = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const { loading, result } = useAsync(getApplicant, [id, history]);

  if (loading) {
    return <CenteredLoader />;
  }

  return (
    <Card>
      <CardContent>
        <Grid direction="column" container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5" component="h1">
              {t('applicantEdit.title')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <ApplicantForm applicant={result} editMode={true}></ApplicantForm>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  async function getApplicant(): Promise<Applicant> {
    try {
      const res = await api.applicants.find(id);
      return res;
    } catch (err) {
      history.push(pageNotFoundRoutePaths.pageNotFoundView);
      return {} as Applicant;
    }
  }
};
