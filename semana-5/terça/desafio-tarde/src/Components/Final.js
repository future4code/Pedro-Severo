import React from 'react';
import styled from 'styled-components';

const FinalContainer = styled.section `
    display: flex; 
    flex-direction: column;
    height: 30vh;
    width: 40vw;
    align-items: center;
    justify-content: space-around;
`


export function Final() {
    return (
        <FinalContainer>
            <h2>O Formulário acabou.</h2>
            <p>Muito obrigado por participar! Entraremos em contato.</p>
        </FinalContainer>
    )
}