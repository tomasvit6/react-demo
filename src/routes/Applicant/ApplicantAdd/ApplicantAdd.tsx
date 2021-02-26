import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { ApplicantForm } from '../shared/ApplicantForm/ApplicantForm';

interface Props {}

export const ApplicantAdd: React.FunctionComponent<Props> = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <Grid direction="column" container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5" component="h1">
              {t('applicantAdd.title')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <ApplicantForm editMode={false}></ApplicantForm>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
