import React from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    comentarios: [], // responsável por guardar os comentários que são feitos
    curtido: false, // usado para a lógica de mudança de cor do coração e o aumento/diminuição do número de curtidas
    numeroCurtidas: 0, // número de curtidas do post. Varia entre 0 e 1. 
    comentando: false, // usado para a lógica de abrir ou fechar a caixa de comentário
    numeroComentarios: 0 // número de comentários do post.
  }

  onClickCurtida = () => {
    
    // verifica se, no estado, cutido é true ou false
    if (this.state.curtido) {

      // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {

      // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = (comentario) => {
    const listaDeComentarios = [...this.state.comentarios, comentario]

    this.setState({
      comentarios: listaDeComentarios,
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    const iconeCurtida = this.state.curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

    const footer = this.state.comentando ? (
      <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    ) : (
      this.state.comentarios.map(comentario => {
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })
    )

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

      </PostFooter>
      {footer}
    </PostContainer>
  }
}

export default Post