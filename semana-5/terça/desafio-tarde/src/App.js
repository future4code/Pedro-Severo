import React from 'react';
import styled from 'styled-components';
import { Etapa1 } from './Components/Etapa1';
import { Etapa2 } from './Components/Etapa2';
import { Etapa3 } from './Components/Etapa3';
import { Final } from './Components/Final';


const Body = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      telaInicial: true,
      proximaTela: '',
    }
  }

  aparecerProximaEtapa = () => {
    this.setState ({telaInicial: !this.state.telaInicial})
  }

  onChangeEnsino = (event) => {
    this.setState({proximaTela: event.target.value})
  }

  aparecerTerceiraTela = () => {
    const terceiraTela = 'final'
    this.setState({proximaTela: terceiraTela})
  }

  aparecerSegundaTela = () => {
    switch (this.state.proximaTela) {
      case '':
        alert ("Escolha uma formação acadêmica.")
      case 'etapa2' :
        return <Etapa2 onClickFinalizar={this.aparecerTerceiraTela}></Etapa2>;
      case 'etapa3' :
        return <Etapa3 onClickFinalizar={this.aparecerTerceiraTela}></Etapa3>;
      case 'final' :
       return <Final></Final>
    }
  }

  render () {
    const telaAtual = this.state.telaInicial ? (
      <Etapa1 onChangeEnsino={this.onChangeEnsino} onClickAparecerProximaEtapa={this.aparecerProximaEtapa}>
      </Etapa1>) : (
        this.aparecerSegundaTela()
      )

    return (
      <Body>
        {telaAtual}
      </Body>
    );
  }
}

export default App;
