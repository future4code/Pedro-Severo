import React from 'react';
import styled from "styled-components";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Botao from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Badge from '@material-ui/core/Badge';

import MotoIcon from '@material-ui/icons/Motorcycle';
import SaveIcon from '@material-ui/icons/Save';
import AlarmIcon from '@material-ui/icons/AddAlarm';
import DiscIcon from '@material-ui/icons/DiscFull';
import FireIcon from '@material-ui/icons/Fireplace';
import MailIcon from '@material-ui/icons/Mail';

const tema = createMuiTheme({
  palette: {
    primary: {
      main: "#00FF00",
    },
    secondary: {
      main: "#00FFFF",
    }
  }
})

const state = {
  numeber: 50
}

const BotaoLaranja = styled(Botao)`
  color: red;
  :hover {
    background-color: orange !important;
    color: red !important
  }
`

const BotaoRosa = styled(Botao)`
  :hover {
    background: pink !important;
  }
`


function App() {
  return (
    <MuiThemeProvider theme={tema}>
      <BotaoLaranja color="primary" variant="contained" size="large" >
        Large
      </BotaoLaranja>
      <Botao color="secondary" variant="text" size="small" >
        Small
      </Botao>
      <BotaoRosa color="primary" variant="fab"  >
        +
      </BotaoRosa>
      <hr />
      <MotoIcon />
      <SaveIcon />
      <AlarmIcon />
      <DiscIcon />
      <FireIcon />
      <hr />
      <Switch color="primary" />
      <Switch color="secondary" />
      <Badge color="primary" badgeContent={state.numeber}>
        <MailIcon />
      </Badge>
      <hr />
      <BotaoLaranja>teste</BotaoLaranja>
    </MuiThemeProvider>
  );
}

export default App