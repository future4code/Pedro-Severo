import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Motorcylcle from "@material-ui/icons/Motorcycle";
import IconeSalvar from "@material-ui/icons/Save";
import AlarmAdd from "@material-ui/icons/AlarmAdd";
import CD from "@material-ui/icons/DiscFull";
import FirePlace from "@material-ui/icons/Fireplace";

const meuTema = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    }
  }
})


const MeuBotao = styled(Button)`
  :hover {
    background: orange
  }
`

const MeuBotaoRedondo = styled(Button) `
  :hover {
    background: pink
  }
`


function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
      <hr />
      <Motorcylcle />
      <IconeSalvar />
      <AlarmAdd />
      <CD />
      <FirePlace />
      <hr />
      <Switch color="primary" />
      <Switch />
      <hr />
      <MeuBotao variant="contained" color="primary" >
        Teste
      </MeuBotao>
      <MeuBotaoRedondo variant="fab" color="secondary" >
        100
      </MeuBotaoRedondo>
    </MuiThemeProvider>
  );
};

export default App;
