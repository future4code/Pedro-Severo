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
            valorNome: '',
            valorEmail: '',
        }
    }

    onChangeValorNome = (event) => {
        this.setState({valorNome: event.target.value})
    }

    onChangeValorEmail = (event) => {
        this.setState({valorEmail: event.target.value})
    }

    render () {
        return (
            <CadastroContainer>
                <h4>Nome:</h4>
                <Input type="text" placeholder="Coloque seu nome" onChange={this.onChangeValorNome} value={this.state.valorNome}></Input>
                <h4>E-mail:</h4>
                <Input type="text" placeholder="Coloque seu e-mail" onChange={this.onChangeValorEmail} value={this.state.valorEmail}></Input>
                <button>Salvar</button>
                <ChangeButton onClickTrocarTela={this.props.onClickTrocarTela}></ChangeButton>
            </CadastroContainer>
        );
    }
}
