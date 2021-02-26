import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

interface Props extends FallbackProps {}

export const PageFallback: React.FunctionComponent<Props> = (props) => {
  const { error } = props;
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <Grid direction="column" container spacing={2}>
          <Grid item xs={12}>
            <Typography color="error" variant="h5" component="h1">
              {t('common.unexpectedError')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="error" variant="body2" component="p">
              {error.message}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
