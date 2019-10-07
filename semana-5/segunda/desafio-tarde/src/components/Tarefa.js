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

    criarNovaTarefa = (event) => {
        event.preventDefault()
        const novaEdicao = {
            tarefaEditada: this.state.valorTarefaEditada,
        }

        const copiaNovaTarefa = [...this.state.novaTarefa, novaEdicao]

        this.setState ({
            novaTarefa: copiaNovaTarefa,
            valorTarefaEditada: '',
        })
    }

    onChangeNovaTarefa = (event) => {
        this.setState({valorTarefaEditada: event.target.value})
      }
    

    abrirCaixaDeEdicao = () => {
        const caixaDeEdicaoFechada = this.state.edicao;
        const caixaDeEdicaoAberta = {
            edicao: !caixaDeEdicaoFechada
        };
        this.setState(caixaDeEdicaoAberta);
    }


    render () {
        let tarefaAposEdicao = this.state.novaTarefa.map((item, index) => {
            return <p key={index} tarefaEditada={item.tarefaEditada}>{this.tarefaEditada}</p>
        })


        let caixaDeEdicao;

        if (this.state.edicao) {
            caixaDeEdicao = (<div>
                             <input type="text" value='' onChange={this.onChangeNovaTarefa} />
                             <button onClick={this.criarNovaTarefa}>Finalizar Edição</button>
                             </div>)
        }

        return (
            <BoxTarefa>
                <input type="checkbox" />
                <p>{this.props.tarefa}</p>
                <button onClick={this.abrirCaixaDeEdicao}>Editar</button>
                {caixaDeEdicao}
                {tarefaAposEdicao}
            </BoxTarefa>
        )
    }
}

Tarefa.propTypes = {
    tarefa: PropsTypes.string.isRequired,
}

export default Tarefa;