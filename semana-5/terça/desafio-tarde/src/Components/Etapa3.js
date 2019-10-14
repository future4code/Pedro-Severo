import React from 'react';
import styled from 'styled-components';
import { BotaoFinalizar } from './BotaoFinalizar';


const Etapa3Container = styled.section `
    display: flex; 
    flex-direction: column;
    height: 30vh;
    width: 40vw;
    align-items: center;
    justify-content: space-around;
`

const Select = styled.select `
`
const Curso = styled.option `
`

export function Etapa3 (props) {
    return (
        <Etapa3Container>
            <h2>Estapa 3 - Informações Gerais de Ensino</h2>
            <input 
                type="text" 
                placeholder="Por que você não terminou a graduação?" 
            />
            <Select>
                <Curso></Curso>
                <Curso value="CursoTecnico">Curso Técnico</Curso>
                <Curso value="CursoIngles">Curso de Inglês</Curso>
            </Select>
            <BotaoFinalizar onClickFinalizar={props.onClickFinalizar}></BotaoFinalizar>
        </Etapa3Container>
    )
}