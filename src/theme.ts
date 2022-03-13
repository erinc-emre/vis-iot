import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F0F0F2',
    },
    secondary: {
      main: '#04D9C4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e0e0e0',
    },
  },
});

export default theme;
