import React from 'react';
import styled from 'styled-components';
import { Cadastro } from './Components/cadastro';
import { Extrato } from './Components/extrato';
import { Botao } from './Components/botaoDeNavegacao'

const Body = styled.div `
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      apareceTelaExtrato: false
    }
  }

  trocarTelaInicial = () => {
    this.setState ({apareceTelaExtrato: !this.state.apareceTelaExtrato})
  }
  
  render () {
    const telaAtual = this.state.apareceTelaExtrato ? (<Extrato />) : (<Cadastro />)
    const nomeDoBotao = this.state.apareceTelaExtrato ? "Ver Extrato" : "Voltar"
    
    return (
      <Body>
        {telaAtual}
        <Botao onClick={this.trocarTelaInicial} nome={nomeDoBotao.nome}></Botao>
      </Body>
    );
  }
}

export default App;
