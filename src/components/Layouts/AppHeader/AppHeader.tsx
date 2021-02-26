import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { remove } from 'local-storage';

import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import { LS } from '../../../core/config/constants';
import { applicantRoutePaths } from '../../../routes/Applicant/ApplicantRoutes';

interface Props {}

export const AppHeader: React.FunctionComponent<Props> = () => {
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={goHome} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {t('appHeader.title')}
          </Typography>
          <Button onClick={resetStorage} color="inherit">
            {t('appHeader.reset')}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );

  function goHome(): void {
    history.push(applicantRoutePaths.applicantView);
  }

  function resetStorage(): void {
    remove(LS.LOCAL_APPLICANT_LIST);
    history.go(0);
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
