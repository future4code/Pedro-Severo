import React from 'react';
import styled from 'styled-components';
import PropsTypes from 'prop-types';

const BoxTarefa = styled.div `
    display: flex;
    align-items: center;
`


export class Tarefa extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            novaTarefa: [{
                tarefaEditada: '',
            }],
            valorTarefaEditada: '',
            edicao: false,
        }
    }

    abrirCaixaDeEdicao = () => {
        const caixaDeEdicaoFechada = this.state.edicao;
        const caixaDeEdicaoAberta = {
            edicao: !caixaDeEdicaoFechada
        };
        this.setState(caixaDeEdicaoAberta);
    }


    render () {
        let caixaDeEdicao;

        if (this.state.edicao) {
            caixaDeEdicao = (<input type="text" value='' />
                                )
        }

        return (
            <BoxTarefa>
                <input type="checkbox" />
                <p>{this.props.tarefa}</p>
                <button onClick={this.abrirCaixaDeEdicao}>Editar</button>
            </BoxTarefa>
        )
    }
}

Tarefa.propTypes = {
    tarefa: PropsTypes.string.isRequired,
}

export default Tarefa;