import React from 'react';
import styled from 'styled-components';
import { BotaoFinalizar } from './BotaoFinalizar';

const Etapa2Container = styled.section `
    display: flex; 
    flex-direction: column;
    height: 30vh;
    width: 40vw;
    align-items: center;
    justify-content: space-around;
`


export function Etapa2(props) {
    return (
        <Etapa2Container>
            <h2>Estapa 2 - Informações do Ensino Superior</h2>
            <input 
                type="text" 
                placeholder="Qual curso?" 
            />
            <input 
                type="text" 
                placeholder="Qual unidade de ensino?" 
            />
            <BotaoFinalizar onClickFinalizar={props.onClickFinalizar}></BotaoFinalizar>
        </Etapa2Container>
    )
}