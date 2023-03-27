import { createTheme } from '@material-ui/core/styles';

const theme = createTheme ({
palette : {
    primary: {
      light : "#6fbf73",
      main : "#4caf50",
      dark : "#357a38",
      contrastText : "#212121"
      },

      secondary: {
        light : "#63a4fff",
        main : "#1976d2",
        dark : "#004ba0",
        contrastText : "#ecfad8"
        }}
});

export default theme;