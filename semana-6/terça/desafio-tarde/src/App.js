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
      valorNome: '',
      valorEmail: '',
    }
  }

  // Continuar daqui

  aparecerSegundaTela = () => {
    this.setState ({primeiraTela: !this.state.primeiraTela})
  }

  onChangeValorNome = (event) => {
    this.setState({valorNome: event.target.value})
  }

  onChangeValorEmail = (event) => {
    this.setState({valorEmail: event.target.value})
  }

  addNewUser = () => {
    const usuario = {
      name: this.state.valorNome,
      email: this.state.valorEmail,
    }

    const request = axios.post (
      'https://us-central1-future4-users.cloudfunctions.net/api/users/createUser',
      usuario,
      {
        headers: {
          'api-token': '8dd1b538c4caee7ad4c6021c21eb1957'
        }
      }
    );

    request
      .then(response => {
        window.alert("Boa, xovem!")
        console.log(response);
      })
      .catch(error => {
        window.alert("Não foi possível cadastrar esse usuário")
        console.log(error.message);
      });
  };




  render () {
    const tela = this.state.primeiraTela ? (
      <Cadastro 
        onClickTrocarTela={this.aparecerSegundaTela} 
        onChangeValorNome={this.onChangeValorNome}
        onChangeValorEmail={this.onChangeValorEmail}
        valorNome={this.state.valorNome}
        valorEmail={this.state.valorEmail}
        addNewUser={this.addNewUser}>
      </Cadastro>
      ) : (
        <DataList 
          onClickTrocarTela={this.aparecerSegundaTela}>
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
