import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { appRoutes } from '../../../routes/AppRoutes';
import { RouterOutlet } from '../../RouterOutlet/RouterOutlet';

interface Props {}

export const AppBody: React.FunctionComponent<Props> = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="xl">
      <RouterOutlet routes={appRoutes} />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0),
  },
}));
