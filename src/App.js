import React from "react";
import theme from "./theme/theme";
import { ThemeProvider as MuithemeProvider } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import Acceso from "./componente/seguridad/Acceso";

function App() {

return (
<React.Fragment>
      <MuithemeProvider theme={theme}>
        <Grid container>
            
             <Acceso/>
            
        </Grid>
      </MuithemeProvider>
    </React.Fragment>
  );
}

export default App;
