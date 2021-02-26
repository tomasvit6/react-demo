import React from 'react';

import { CircularProgress, Grid } from '@material-ui/core';

export interface Props {}

export const CenteredLoader: React.FC<Props> = () => {
  return (
    <Grid container item xs={12} alignItems="center" justify="center">
      <CircularProgress />
    </Grid>
  );
};
