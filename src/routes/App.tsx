import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../core/config/i18n';
import { SnackbarProvider } from 'notistack';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { AppBody } from '../components/Layouts/AppBody/AppBody';
import { AppHeader } from '../components/Layouts/AppHeader/AppHeader';
import { customMuiTheme } from '../core/config/theme';

export const App: React.FunctionComponent = () => {
  return (
    <div data-testid="root">
      <Router>
        <ThemeProvider theme={customMuiTheme}>
          <SnackbarProvider maxSnack={4} autoHideDuration={2500}>
            <CssBaseline />
            <AppHeader />
            <AppBody />
          </SnackbarProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
};
