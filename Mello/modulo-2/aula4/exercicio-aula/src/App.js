import React from 'react';
import styled from "styled-components"

const Botao = styled.button`
  background: ${props => props.corDoFundo};
  width: ${props => {
    if (props.tamanho === "grande") {
      return "100px"
    } else if (props.tamanho === "pequeno") {
      return "50px"
    }
  }};
  height: ${props => {
    if (props.tamanho === "grande") {
      return "30px"
    } else if (props.tamanho === "pequeno") {
      return "15px"
    }
  }};
`

function App() {

  return (
    <div>
      <Botao corDoFundo={"#00FF00"} tamanho={"grande"} >Salvar</Botao>
      <Botao corDoFundo={"#FF0000"} tamanho={"pequeno"} >Deletar</Botao>
    </div>
  );
}

export default App;
