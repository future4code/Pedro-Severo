import React from 'react';
import styled from 'styled-components';


const Etapa1Container = styled.section `
    display: flex; 
    flex-direction: column;
    height: 60vh;
    width: 30vw;
    align-items: center;
    justify-items: center;
    justify-content: space-around;
`

const Select = styled.select `
`

const Escolaridade = styled.option `
`


export function Etapa1(props) {
    return (
        <Etapa1Container>
            <h2>Estapa 1 - Dados Gerais</h2>
            <input 
                type="text" 
                placeholder="Nome" 
            />
            <input 
                type="text" 
                placeholder="Idade" 
            />
            <input 
                type="text" 
                placeholder="E-mail" 
            />
            <Select onChange={props.onChangeEnsino}>
                <Escolaridade></Escolaridade>
                <Escolaridade value="etapa3">Ensino Médio Incompleto</Escolaridade>
                <Escolaridade value="etapa3">Ensino Médio Completo</Escolaridade>
                <Escolaridade value="etapa2">Ensino Superior Incompleto</Escolaridade>
                <Escolaridade value="etapa2">Ensino Superior Completo</Escolaridade>
            </Select>
            <button onClick={props.onClickAparecerProximaEtapa}>Enviar</button>
        </Etapa1Container>
    );
}