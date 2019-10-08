import React from 'react';
import styled from 'styled-components';


const Body = styled.div `
`

const Select = styled.select `
`

const Escolaridade = styled.option `
`

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  
  escolherEscolaridade = () => {
    let escolha = Escolaridade.value

    const segundoFormulario = escolha ? "sem" : "com"

    console.log(segundoFormulario)
  }

  render () {
    return (

      // Criar uma página inicial que retorna um componente com três inputs e um botão
      
      // A depender da resposta, um ou outro componente será chamado. 
      // Por isso, criar condicional com dois retornos de funções que chamam esses outros dois componentes.
      
      // No final, os dois componentes chamando devem retornar para outro componente que finaliza o formulário. 
      
      <Body>
        <h2>Estapa 1 - Dados Gerais</h2>
        <input 
          type="text" 
          placeholder="Nome" 
        />
        <input 
          type="text" 
          placeholder="Idade" 
        />
        <input 
          type="text" 
          placeholder="E-mail" 
        />
        <Select onChange={this.escolherEscolaridade}>
          <Escolaridade value={0}>Ensino Médio Incompleto</Escolaridade>
          <Escolaridade value={0}>Ensino Médio Completo</Escolaridade>
          <Escolaridade value={1}>Ensino Superior Completo</Escolaridade>
          <Escolaridade value={1}>Ensino Superior Incompleto</Escolaridade>
        </Select>

        <hr>
          {this.escolherEscolaridade}
        </hr>
      </Body>
    );
  }
}

export default App;
