import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const BotaoDeNavegacao = styled.button `
    display: flex;
    flex-direction: column;
`

export function Botao (props){
    return (
        <BotaoDeNavegacao onClick={props.onClick}>
            {props.nome}
        </BotaoDeNavegacao>
    )
}


Botao.propTypes = {
    nome: PropTypes.string.isRequired,
}

