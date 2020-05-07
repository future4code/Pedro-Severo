import React from 'react';
import styled from "styled-components";

import { createMuiTheme, MuiThemeProvider, Button } from "@material-ui/core"
import Botao from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Badge from '@material-ui/core/Badge';

import MotoIcon from '@material-ui/icons/Motorcycle';
import SaveIcon from '@material-ui/icons/Save'
import AddIcon from '@material-ui/icons/Add'
import AlarmAdd from "@material-ui/icons/AlarmAdd"
import DiscIcon from "@material-ui/icons/DiscFull"
import FireIcon from "@material-ui/icons/Fireplace"
import EmailIcon from "@material-ui/icons/Email"


const meuTema = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000"
    },
    secondary: {
      main: "#0000ff"
    }
  }
})

const ButtonStyled = styled(Button)`
  :hover {
    background: orange
  }
`

const FabButtonStyled = styled(Button)`
  :hover {
    background: pink
  }
`

function App() {
  return (
    <MuiThemeProvider theme={meuTema} >
      <Botao size="large" variant="outlined" >Large</Botao>
      <Botao size="small" >Small</Botao>
      <Botao variant="fab" >
        <AddIcon />
      </Botao>
      <hr />
      <MotoIcon />
      <SaveIcon />
      <AlarmAdd />
      <DiscIcon />
      <FireIcon />
      <hr />
      <Switch color="primary" />
      <Switch color="secondary" />
      <Badge color="primary" badgeContent={60} >
        <EmailIcon />
      </Badge>
      <hr />
      <ButtonStyled size="small" color="secondary" variant="contained" >Botão</ButtonStyled>
      <FabButtonStyled variant="fab" color="secondary" >
        100
      </FabButtonStyled>
    </MuiThemeProvider>
  );
}

export default App