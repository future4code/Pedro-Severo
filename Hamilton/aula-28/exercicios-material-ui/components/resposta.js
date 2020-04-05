import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Badge from '@material-ui/core/Badge';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Motorcycle from '@material-ui/icons/Motorcycle'
import Save from '@material-ui/icons/Save'
import AlarmAdd from '@material-ui/icons/AlarmAdd'
import DiscFull from '@material-ui/icons/DiscFull'
import Fireplace from '@material-ui/icons/Fireplace'
import Mail from '@material-ui/icons/Mail'

const meuTema = createMuiTheme({
  palette: {
    primary: {
        main: 'rgb(107,165,233)'
    },
    secondary: {
        main: 'rgb(233,107,165)'
    }
  },
})

const MeuBotao = styled(Button)`
  :hover {
    background: orange;
  }
`
const MeuFAB = styled(Button)`
  :hover {
    background: pink;
  }
`

function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
      <Button size="medium">Large</Button>
      <Button size="small">Small</Button>
      <Button variant="fab">+</Button>
      <hr/>
      <Motorcycle/>
      <Save/>
      <AlarmAdd/>
      <DiscFull/>
      <Fireplace/>
      <hr/>
      <Switch color="secondary"/>
      <Switch color="primary" />
      <Badge badgeContent={60} color="primary">
        <Mail />
      </Badge>
      <hr/>
      <MeuBotao color="primary" variant="contained">Botão</MeuBotao>
      <MeuFAB color="secondary" variant="fab">100</MeuFAB>
    </MuiThemeProvider>
  );
}


