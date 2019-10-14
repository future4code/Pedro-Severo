import React from 'react';
import styled from 'styled-components';

const Finalizar = styled.button `
`

export function BotaoFinalizar(props) {
    return (
        <Finalizar onClick={props.onClickFinalizar}>
            Finalizar
        </Finalizar>
    )
}