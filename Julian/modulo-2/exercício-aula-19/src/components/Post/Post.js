import React, { useState } from 'react'
import './Post.css'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

const Post = (props) => {

  const [curtido, curtirPost] = useState(false)
  const [numeroCurtidas, mudarNumeroCurtidas] = useState(0)
  const [comentando, comentarPost] = useState(false)
  const [numeroComentarios, aumentarNumeroComentarios] = useState(0)

  const onClickCurtida = () => {
    console.log('Curtiu!')
  }

  const onClickComentario = () => {
    comentarPost(!comentando)
  }

  const aoEnviarComentario = () => {
    comentarPost(false)
    aumentarNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

  if(curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let componenteComentario

  if(comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
  }

  return <div className={'post-container'}>
    <div className={'post-header'}>
      <img className={'user-photo'} src={props.fotoUsuario} alt={'Imagem do usuario'}/>
      <p>{props.nomeUsuario}</p>
    </div>

    <img className={'post-photo'} src={props.fotoPost} alt={'Imagem do post'}/>

    <div className={'post-footer'}>
      <IconeComContador
        icone={iconeCurtida}
        onClickIcone={onClickCurtida}
        valorContador={numeroCurtidas}
      />

      <IconeComContador
        icone={iconeComentario}
        onClickIcone={onClickComentario}
        valorContador={numeroComentarios}
      />
    </div>
    {componenteComentario}
  </div>
  }


export default Post