import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  border: 1px solid gray;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export class FormNovoPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valorFotoUsuario: "",
      valorNomeUsuario: "",
      valorURLImagem: ""
    };
  }

  atualizaFotoUsuario = event => {
    this.setState({ valorFotoUsuario: event.target.value });
  };

  atualizaNomeUsuario = event => {
    this.setState({ valorNomeUsuario: event.target.value });
  };

  atualizaURLImagem = event => {
    this.setState({ valorURLImagem: event.target.value });
  };

  onClicarEnviar = () => {
    const novoPost = {
      id: Date.now(),
      urlImagem: this.state.valorURLImagem,
      urlFotoUsuario: this.state.valorFotoUsuario,
      nomeUsuario: this.state.valorNomeUsuario,
      curtidoPorMim: false,
      numeroCurtidas: 0,
      comentarios: []
    };
    this.props.criarPost(novoPost);
  };

  render() {
    return (
      <FormContainer>
        <h3>Crie um novo post</h3>
        <input
          type="text"
          placeholder="Foto do usuário"
          value={this.state.valorFotoUsuario}
          onChange={this.atualizaFotoUsuario}
        />
        <input
          type="text"
          placeholder="Nome do usuário"
          value={this.state.valorNomeUsuario}
          onChange={this.atualizaNomeUsuario}
        />
        <input
          type="text"
          placeholder="URL da imagem"
          value={this.state.valorURLImagem}
          onChange={this.atualizaURLImagem}
        />
        <button onClick={this.onClicarEnviar}>Enviar</button>
      </FormContainer>
    );
  }
}
