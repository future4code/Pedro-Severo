import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button `
    display: flex;
    flex-direction: column;
`

export function Button (props){
    return (
        <ButtonContainer onClick={props.onClick}>
            {props.nome}
        </ButtonContainer>
    )
}