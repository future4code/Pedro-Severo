import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Badge from "@material-ui/core/Badge";


import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Motorcycle from "@material-ui/icons/Motorcycle";
import SaveIcon from "@material-ui/icons/Save";
import AlarmIcon from "@material-ui/icons/Alarm";
import DiscIcon from "@material-ui/icons/DiscFull";
import Fireplace from "@material-ui/icons/Fireplace";
import MailIcon from "@material-ui/icons/Mail";



const meuTema = createMuiTheme({
  palette: {
    primary: {
      main: "#00ff00"
    },
    secondary: {
      main: "#0000ff"
    }
  }
})

const MeuBotao = styled(Button)`
  :hover {
    background: orange
  }
`


const MeuBotaoRedondo = styled(Button)`
  :hover {
    background: pink
  }
`



function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
      <Button size="small">
        Small
      </Button>
      <Button size="large">
        Large
      </Button>
      <Button variant="fab">
        +
      </Button>
      <hr />
      <Motorcycle />
      <SaveIcon />
      <AlarmIcon />
      <DiscIcon />
      <Fireplace />
      <hr />
      <Switch color="primary"/>
      <Switch color="secondary"/>
      <Badge badgeContent={60} color="secondary">
        <MailIcon />
      </Badge>
      <hr />
      <MeuBotao size="medium" color="primary" variant="contained">
        Botão
      </MeuBotao>
      <MeuBotaoRedondo variant="fab" color="primary">
        100
      </MeuBotaoRedondo>
    </MuiThemeProvider>
  );
}

export default App;
