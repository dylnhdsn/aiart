import { createTheme } from '@mui/material/styles';

const solarizedLightTheme = createTheme({
  palette: {
    primary: {
      main: '#268bd2', // blue
    },
    secondary: {
      main: '#859900', // green
    },
    text: {
      primary: '#657b83', // base03
      secondary: '#93a1a1', // base1
    },
    background: {
      default: '#fdf6e3', // base3
      paper: '#eee8d5', // base2
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#93a1a1', // base1
        },
        deletable: {
          '&:focus': {
            backgroundColor: '#dc322f', // red
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: '#eee8d5', // base2
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#eee8d5', // base2
        },
      },
    },
  },
});

const solarizedDarkTheme = createTheme({
  palette: {
    primary: {
      main: '#268bd2', // blue
    },
    secondary: {
      main: '#859900', // green
    },
    text: {
      primary: '#839496', // base1
      secondary: '#657b83', // base01
    },
    background: {
      default: '#002b36', // base03
      paper: '#073642', // base02
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#586e75', // base01
        },
        deletable: {
          '&:focus': {
            backgroundColor: '#dc322f', // red
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: '#073642', // base02
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#073642', // base02
        },
      },
    },
  },
});

export { solarizedLightTheme, solarizedDarkTheme };

