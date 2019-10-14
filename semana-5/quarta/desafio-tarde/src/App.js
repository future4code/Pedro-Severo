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
      listaDeDespesas: props.listaDeDespesas,
      apareceTelaExtrato: false
    }
  }

  adicionarDespesa = (novaDespesa) => {
    const copiaListaDeDespesas = [novaDespesa, ...this.state.listaDeDespesas]

    this.setState({listaDeDespesas: copiaListaDeDespesas})
  }

  trocarTelaInicial = () => {
    this.setState ({apareceTelaExtrato: !this.state.apareceTelaExtrato})
  }
  
  render () {
    const listaDespesas = this.state.listaDeDespesas.map (cadaDespesa => {
      return  <div>
                  <li>{cadaDespesa.valor}</li>
                  <li>{cadaDespesa.tipo}</li>
                  <li>{cadaDespesa.descricao}</li>
              </div>
    })
    const telaAtual = this.state.apareceTelaExtrato ? (<Extrato listaDespesas={listaDespesas}/>) : (<Cadastro criarDespesa={this.adicionarDespesa}/>)
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
