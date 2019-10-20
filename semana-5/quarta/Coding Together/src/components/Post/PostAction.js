import React from 'react'
import styled from 'styled-components'

const ActionContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`


export function PostAction(props) {
  return <ActionContainer>
    <img src={props.icone} onClick={props.onClick}/>
    <p>{props.numero}</p>
  </ActionContainer>
}