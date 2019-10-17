import React from 'react';
import styled from 'styled-components';
import { Cadastro } from './Components/cadastro';
import { Extrato } from './Components/extrato';
import { Button } from './Components/botaoDeNavegacao'

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
      listaDespesas: [],
      apareceTelaExtrato: false
    }
  }

  adicionarDespesa = (copiaListaDeDespesas) => {
    this.setState({listaDespesas: copiaListaDeDespesas})
  }

  trocarTelaInicial = () => {
    this.setState ({apareceTelaExtrato: !this.state.apareceTelaExtrato})
  }
  
  render () {
    console.log(this.state.listaDespesas)
    const telaAtual = this.state.apareceTelaExtrato ? (<Extrato/>) : (<Cadastro adicionarNovaDespesa={this.adicionarDespesa}/>)
    const nomeDoBotao = this.state.apareceTelaExtrato ? "Voltar" : "Ver Extrato"
    
    return (
      <Body>
        {telaAtual}
        <Button onClick={this.trocarTelaInicial} nome={nomeDoBotao}></Button>
      </Body>
    );
  }
}

export default App;
