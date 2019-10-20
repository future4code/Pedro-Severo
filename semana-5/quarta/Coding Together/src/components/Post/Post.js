import React from "react";
import { PostHeader } from "./PostHeader";
import { PostFooter } from "./PostFooter";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid gray;
  margin: 5px;
`;

const PostImage = styled.img`
  width: 100%;
`;

export function Post(props) {
  const post = props.post;

  const novaFuncao = () => {
    props.curtirPost(post.id)
  }
  
  return (
    <PostContainer>
      <PostHeader
        fotoUsuario={post.urlFotoUsuario}
        nomeUsuario={post.nomeUsuario}
      />
      <PostImage src={post.urlImagem} />
      <PostFooter
        numeroCurtidas={post.numeroCurtidas}
        curtidoPorMim={post.curtidoPorMim}
        numeroComentarios={post.comentarios.length}
        curtirPost={novaFuncao}
      />
    </PostContainer>
  );
}
