import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Cadastro } from './Components/Cadastro';
import { DataList } from './Components/ListaDeDados';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      primeiraTela: true,
    }
  }

  // Criar aqui a função de cadastrar novo usuário

  aparecerSegundaTela = () => {
    this.setState ({primeiraTela: !this.state.primeiraTela})
  }


  render () {
    const tela = this.state.primeiraTela ? (
      <Cadastro onClickTrocarTela={this.aparecerSegundaTela}>
      </Cadastro>
      ) : (
        <DataList onClickTrocarTela={this.aparecerSegundaTela}>
        </DataList>
        )

    return (
      <AppContainer> 
        {tela}
      </AppContainer>
    );
  }
}

export default App;
