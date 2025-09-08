import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008c44',
      light: '#4caf50',
      dark: '#2e7d32',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ed1c24',
      light: '#f44336',
      dark: '#c62828',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#000000',
      secondary: '#535353',
      disabled: '#757575'
    },
    background: {
      default: '#ffffff',
      paper: '#f5f6e8'
    },
    grey: {
      50: '#f5f5f6',
      100: '#f5f6e8',
      200: '#e0e0e0',
      300: '#bdbdbd',
      400: '#9e9e9e',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#212121',
      900: '#000000'
    },
    common: {
      black: '#000000',
      white: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Helvetica Neue", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '50px',
      fontWeight: 700,
      textTransform: 'capitalize'
    },
    h2: {
      fontSize: '45px',
      fontWeight: 700,
      lineHeight: '56px'
    },
    h3: {
      fontSize: '30px',
      fontWeight: 700
    },
    h4: {
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: '30px',
      textTransform: 'uppercase'
    },
    h5: {
      fontSize: '23px',
      fontWeight: 700,
      lineHeight: '25px'
    },
    h6: {
      fontSize: '19px',
      fontWeight: 700
    },
    body1: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '30px'
    },
    body2: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '20px'
    },
    caption: {
      fontSize: '14px',
      fontWeight: 400
    },
    subtitle1: {
      fontSize: '20px',
      fontStyle: 'italic',
      fontWeight: 500,
      fontFamily: '"Noto Sans", sans-serif'
    },
    subtitle2: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '23px'
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 4px 8px rgba(0, 0, 0, 0.12)',
    '0px 6px 12px rgba(0, 0, 0, 0.15)',
    '0px 8px 16px rgba(0, 0, 0, 0.15)',
    '0px 12px 24px rgba(0, 0, 0, 0.15)',
    '0px 16px 32px rgba(0, 0, 0, 0.15)',
    '0px 24px 48px rgba(0, 0, 0, 0.15)',
    'inset 0px 4px 4px rgba(12, 12, 13, 0.05)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)',
    '0px 0px 30px rgba(0, 0, 0, 0.15)'
  ]
});

export default theme;