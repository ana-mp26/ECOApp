import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import ContainerComp from './components/ContainerComp';


function App() {

  return (
    <ThemeProvider theme = {theme}>
      <ContainerComp />

    </ThemeProvider>
  );
}


  

export default App;