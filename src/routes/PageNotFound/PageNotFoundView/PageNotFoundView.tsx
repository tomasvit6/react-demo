import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button, Grid, Typography } from '@material-ui/core';

import { applicantRoutePaths } from '../../Applicant/ApplicantRoutes';

interface Props {}

export const PageNotFoundView: React.FunctionComponent<Props> = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Grid direction="column" container spacing={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h5" component="h1">
          {t('pageNotFound.title')}
        </Typography>
      </Grid>
      <Grid item xs={12} onClick={goToHome}>
        <Button color="primary" variant="contained">
          {t('common.goBack')}
        </Button>
      </Grid>
    </Grid>
  );

  function goToHome() {
    history.push(applicantRoutePaths.applicantView);
  }
};
