import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'; // "findDomNode deprecation" fix

import { toCssValue } from '../utils/theme.utils';

const theme = {
  color: {
    primary: {
      lightest: '#3ba8ff',
      light: '#2f9df5',
      main: '#2196F3',
      dark: '#198ce6',
      darkest: '#1087e3',
    },
    secondary: {
      lightest: '#e3eff3',
      light: '#b9c4c7',
      main: '#7F878A',
      dark: '#5e6669',
      darkest: '#373d40',
    },
    success: {
      light: '#8df960',
      main: '#0FC246',
      dark: '#469d01',
    },
    error: {
      lightest: '#fcdad9',
      light: '#ff6953',
      main: '#f44336',
      dark: '#e50601',
    },
    warning: {
      lightest: '#fee4c9',
      light: '#ffc62f',
      main: '#f1a019',
    },
    grey: {
      lightest: '#F4F4F4',
      light: '#CCCCCC',
      default: '#666666',
      dark: '#4D4D4D',
      darkest: '#333333',
    },
    background: {
      body: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#000000',
    },
    font: {
      light: '#FFFFFF',
      dark: '#333333',
    },
  },
  font: {
    family: 'Roboto, "Helvetica Neue"',
    size: {
      small: 10,
      mediumSmall: 12,
      medium: 14,
      mediumBig: 16,
      big: 18,
      caption: 12,
      title: 22,
      heading: 35,
    },
    weight: {
      light: 300,
      medium: 400,
      bold: 500,
      boldest: 700,
    },
  },
  common: {
    borderRadius: {
      low: 2,
      default: 5,
      high: 100,
    },
    shadow: {
      light: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      default: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
      dark: '0 0 0 1px #fff, 0 0 2px 4px #666',
    },
    space: {
      margin: {
        smallest: 5,
        small: 10,
        default: 20,
        large: 30,
        largest: 50,
      },
      padding: {
        smallest: 5,
        small: 8,
        default: 20,
        large: 30,
        largest: 45,
      },
    },
  },
};

export const customMuiTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.color.primary.light,
      main: theme.color.primary.main,
      dark: theme.color.primary.dark,
    },
    secondary: {
      light: theme.color.secondary.light,
      main: theme.color.secondary.main,
      dark: theme.color.secondary.dark,
    },
    error: {
      light: theme.color.error.light,
      main: theme.color.error.main,
      dark: theme.color.error.dark,
    },
    text: {
      primary: theme.color.font.dark,
      secondary: theme.color.font.dark,
    },
    background: {
      default: theme.color.background.body,
    },
  },
  typography: {
    fontFamily: theme.font.family,
    fontWeightLight: theme.font.weight.light,
    fontWeightRegular: theme.font.weight.medium,
    fontWeightMedium: theme.font.weight.bold,
    fontWeightBold: theme.font.weight.boldest,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
      },
    },
    MuiButton: {
      label: {
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      text: {
        color: '#FFFFFF',
        fontSize: theme.font.size.mediumSmall,
        width: 150,
      },
      contained: {
        color: '#FFFFFF',
        width: 150,
        fontSize: theme.font.size.mediumSmall,
        padding: toCssValue([theme.common.space.padding.small, theme.common.space.padding.default]),
        borderRadius: theme.common.borderRadius.high,
      },
      outlined: {
        color: '#FFFFFF',
        fontSize: theme.font.size.mediumSmall,
        padding: toCssValue([theme.common.space.padding.small, theme.common.space.padding.default]),
        borderRadius: theme.common.borderRadius.high,
        width: 150,
      },
    },
  },
});
