import { variables, mixins } from '../../../styles/js';
import { commonThemes } from '../../../styles/js/mixins';

// Styles for App/index.jsx component
export const styles = (theme) => {
  return {
    root: {},
    noProfileError: {
      textAlign: `center`,
      ...mixins({ theme }).center,
      ...mixins({ theme }).absoluteCenter,
    },
  };
};

export const getColorPalette = () => {
  // macOS Finder-inspired colors
  const lightPrimaryColor = '#ffffff';
  const lightSecondaryColor = '#007AFF'; // macOS system blue
  const finderSidebarColor = '#f7f7f7';
  const finderHeaderColor = '#f0f0f0';

  const darkPrimaryColor = '#1e1e1e'; // macOS dark mode background
  const darkSecondaryColor = '#0A84FF'; // macOS dark mode blue

  const snackbarError = `#ff3b30`; // macOS system red

  return {
    get light() {
      return {
        primary: {
          main: lightPrimaryColor,
          contrastText: '#1d1d1f', // macOS text color
        },
        secondary: {
          main: lightSecondaryColor,
          contrastText: '#fff',
        },
        background: {
          default: '#f5f5f7', // macOS light background
          paper: lightPrimaryColor,
        },
        snackbar: {
          error: snackbarError,
        },
        btnTextColor: '#1d1d1f',
        fileColor: '#1d1d1f',
        tableHeaderFooterBgColor: finderHeaderColor,
        lightText1Color: `rgba(29, 29, 31, 0.68)`, // macOS secondary text
        fileExplorerThinLineDividerColor: `rgba(0, 0, 0, 0.08)`, // lighter dividers
        fileDrop: `rgba(0, 122, 255, 0.1)`,
        disabledBgColor: `#f2f2f7`,
        nativeSystemColor: finderSidebarColor,
        contrastPrimaryMainColor: '#1d1d1f',
      };
    },
    get dark() {
      return {
        primary: {
          main: darkPrimaryColor,
          contrastText: '#fff',
        },
        secondary: {
          main: darkSecondaryColor,
          contrastText: '#fff',
        },
        background: {
          default: darkPrimaryColor,
          paper: darkPrimaryColor,
        },
        text: {
          primary: '#fff',
          secondary: 'rgba(255, 255, 255, 0.65)',
          disabled: 'rgba(255, 255, 255, 0.4)',
        },
        snackbar: {
          error: snackbarError,
        },
        action: {
          active: 'rgba(255, 255, 255, 0.65)',
          hover: 'rgba(255, 255, 255, 0.2)',
          selected: 'rgba(255, 255, 255, 0.16)',
          disabled: 'rgba(255, 255, 255, 0.3)',
          disabledBackground: 'rgba(255, 255, 255, 0.12)',
        },
        divider: `rgba(255, 255, 255, 0.12)`,
        btnTextColor: '#fff',
        fileColor: '#d5d5d5',
        tableHeaderFooterBgColor: `#313131`,
        lightText1Color: `rgba(255, 255, 255, 0.50)`,
        fileExplorerThinLineDividerColor: `rgba(255, 255, 255, .12)`,
        fileDrop: `rgba(0, 122, 245, 0.08)`,
        disabledBgColor: `rgba(255, 255, 255, 0.15)`,
        nativeSystemColor: `#323232`,
        contrastPrimaryMainColor: lightPrimaryColor,
      };
    },
  };
};

export const getCurrentThemePalette = (appThemeMode) => {
  return getColorPalette()[appThemeMode];
};

export const materialUiTheme = ({ ...args }) => {
  const { appThemeMode } = args;

  const palette = getCurrentThemePalette(appThemeMode);

  return {
    palette: {
      ...palette,
    },
    typography: {
      useNextVariants: true,
      fontSize: variables().sizes.regularFontSize,
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },

    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            '--app-bg-color': palette.background.paper,
            '--app-secondary-main-color': palette.secondary.main,
            '--app-native-system-color': palette.nativeSystemColor,
            ...commonThemes.noselect,
          },
        },
      },
    },
  };
};
