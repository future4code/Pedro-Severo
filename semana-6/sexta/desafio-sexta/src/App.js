import React from 'react';
import styled from 'styled-components';
import { Forms } from './Components/Forms';
import { Playlists } from './Components/Playlists';


const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTela: true,
    }
  }

  trocarTela = () => {
    this.setState ({formTela: !this.state.formTela})
  }

  render () {
    const buttonText = this.state.formTela ? "Ver Playlists" : "Voltar"
    const telaDoUsuario = this.state.formTela ? (
      <Forms 
        onClickTrocarTela={this.trocarTela}
        buttonText={buttonText}>
      </Forms>
      ) : (
        <Playlists 
          onClickTrocarTela={this.trocarTela}
          buttonText={buttonText}>
        </Playlists>
      )

    return (
      <Body>
        {telaDoUsuario}
      </Body>
    );
  }
}

export default App;
