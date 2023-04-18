import { createTheme } from '@mui/material/styles';
import { blue, orange, grey } from '@mui/material/colors';

export const solarizedLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: orange,
    background: {
      default: '#fdf6e3',
      paper: '#eee8d5',
    },
    text: {
      primary: '#657b83',
      secondary: '#2aa198',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: 'white',
            backgroundColor: blue[500],
            '&:hover': {
              backgroundColor: blue[700],
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: blue[500],
            borderColor: blue[500],
            '&:hover': {
              backgroundColor: blue[50],
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: blue[500],
            '&:hover': {
              backgroundColor: blue[50],
            },
          },
        },
      ],
    },
  },
});

export const solarizedDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
    secondary: orange,
    background: {
      default: '#002b36',
      paper: '#073642',
    },
    text: {
      primary: '#839496',
      secondary: '#6c71c4',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: 'white',
            backgroundColor: blue[500],
            '&:hover': {
              backgroundColor: blue[700],
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: blue[500],
            borderColor: blue[500],
            '&:hover': {
              backgroundColor: grey[900],
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: blue[500],
            '&:hover': {
              backgroundColor: grey[900],
            },
          },
        },
      ],
    },
  },
});

