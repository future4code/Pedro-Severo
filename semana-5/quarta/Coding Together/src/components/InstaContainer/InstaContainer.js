import React from "react";
import { FormNovoPost } from "../FormNovoPost/FormNovoPost";
import { Post } from "../Post/Post";
import styled from "styled-components";

const MainContainer = styled.div``;

export class InstaContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listaDePosts: props.listaDePosts
    }
  }

  adicionarPost = (novoPost) => {
    const copiaListaDePosts = [novoPost, ...this.state.listaDePosts]

    this.setState({listaDePosts: copiaListaDePosts})
  }

  curtirPost = (idPost) => {
    // Selecionando elementos e criando cópias dos mesmos
    const copiaListaPosts = [...this.state.listaDePosts]

    const posicaoPostParaCurtir = copiaListaPosts.findIndex((post) => {
      return idPost === post.id
    })

    const postParaCurtir = copiaListaPosts[posicaoPostParaCurtir]

    const copiaPostParaCurtir = {...postParaCurtir}

    // Alterando dados
    const curtidoPorMimAtual = copiaPostParaCurtir.curtidoPorMim
    copiaPostParaCurtir.curtidoPorMim = !curtidoPorMimAtual

    if(curtidoPorMimAtual) {
      copiaPostParaCurtir.numeroCurtidas -= 1;
    } else {
      copiaPostParaCurtir.numeroCurtidas += 1;
    }

    // Atualizando valores do estado
    copiaListaPosts[posicaoPostParaCurtir] = copiaPostParaCurtir;

    this.setState({listaDePosts: copiaListaPosts})
  }
  
  render() {
    const listaPosts = this.state.listaDePosts.map(cadaPost => {
      return <Post post={cadaPost} curtirPost={this.curtirPost} />;
    });

    return (
      <MainContainer>
        <FormNovoPost criarPost={this.adicionarPost}/>
        {listaPosts}
      </MainContainer>
    );
  }
}
