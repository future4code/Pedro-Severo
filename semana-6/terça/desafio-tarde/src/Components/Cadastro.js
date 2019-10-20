import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ChangeButton } from './ChangeButton';

const CadastroContainer = styled.section `
    width: 20vw;
    height: 50vh;
    border: solid;
    border-width: 1px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    justify-content: space-around;
`

const Input = styled.input `
`

export class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render () {
        return (
            <CadastroContainer>
                <h4>Nome:</h4>
                <Input 
                    type="text" 
                    placeholder="Coloque seu nome" 
                    onChange={this.props.onChangeValorNome} 
                    value={this.props.valorNome}>
                </Input>
                <h4>E-mail:</h4>
                <Input 
                    type="text" 
                    placeholder="Coloque seu e-mail" 
                    onChange={this.props.onChangeValorEmail} 
                    value={this.props.valorEmail}>
                </Input>
                <button onClick={this.props.addNewUser}>
                    Salvar
                </button>
                <ChangeButton 
                    onClickTrocarTela={this.props.onClickTrocarTela}>
                </ChangeButton>
            </CadastroContainer>
        );
    }
}
