import { createTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: lightGreen[900],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: lightGreen[600],
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;