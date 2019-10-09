import React from 'react';
import styled from 'styled-components';


const Body = styled.div `
`

const Select = styled.select `
`

const Escolaridade = styled.option `
`

const H2 = styled.h2 `
`

const Input = styled.input `
`



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      etapa1Concluida: false,
      escolha: 0,
    }
  }

  aparecerEtapa2 = () => {
    return (
      <Body>
        <H2>Estapa 2 - Informações do Ensino Superior</H2>
        <Input type="text" placeholder="Nome"></Input>
        <Input type="text" placeholder="Nome"></Input>
      </Body>
    )
  }
  
  aparecerEtapa3 = () => {
    return (
      <Body>
        <H2>Estapa 3 - Informações do Ensino Superior</H2>
        <Input type="text" placeholder="Nome"></Input>
        <Input type="text" placeholder="Nome"></Input>
      </Body>
    )
  }  

  escolherEscolaridade = (event) => {
    let novaEscolha = Number(event.target.value) 
    this.setState({ escolha: novaEscolha });

    if (novaEscolha === 1) {
      return (this.aparecerEtapa2())
    } else if (novaEscolha === 2) {
      return (this.aparecerEtapa3())
    } else {}
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
          <Escolaridade></Escolaridade>
          <Escolaridade value={1}>Ensino Médio Incompleto</Escolaridade>
          <Escolaridade value={1}>Ensino Médio Completo</Escolaridade>
          <Escolaridade value={2}>Ensino Superior Completo</Escolaridade>
          <Escolaridade value={2}>Ensino Superior Incompleto</Escolaridade>
        </Select>
        <button onClick={this.state.onClickButton}></button>
      </Body>
    );
  }
}

export default App;
