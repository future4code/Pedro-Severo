import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  padding-left: 5px;
  display: flex;
  align-items: center;
  height: 40px;
`

const UserPicture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`

export function PostHeader(props) {
  return <HeaderContainer>
    <UserPicture src={props.fotoUsuario}/>
    <p>{props.nomeUsuario}</p>
  </HeaderContainer>
}