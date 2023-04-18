import { createTheme } from '@mui/material/styles';

const dylanTheme = createTheme({
  palette: {
    primary: {
      main: '#F72585',
    },
    secondary: {
      main: '#B5179E',
    },
    error: {
      main: '#7209B7',
    },
    warning: {
      main: '#560BAD',
    },
    info: {
      main: '#480CA8',
    },
    success: {
      main: '#3A0CA3',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        containedPrimary: {
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#F04E98',
          },
        },
        outlinedPrimary: {
          color: '#F72585',
          '&:hover': {
            color: '#F04E98',
            backgroundColor: '#FFFFFF',
            borderColor: '#F04E98',
          },
        },
        containedSecondary: {
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#A4147B',
          },
        },
        outlinedSecondary: {
          color: '#B5179E',
          '&:hover': {
            color: '#A4147B',
            backgroundColor: '#FFFFFF',
            borderColor: '#A4147B',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        inputRoot: {
          borderRadius: '8px',
        },
        paper: {
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default dylanTheme;

