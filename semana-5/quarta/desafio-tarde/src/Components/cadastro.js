import React from 'react';
import styled from 'styled-components';

const FormCadastro = styled.section `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export class Cadastro extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            listaDeDespesas: [{
                valor: 0,
                tipo: '',
                descricao: '',
            }],
            valorEmBranco: 0,
            tipoEmBranco: '',
            descricaoEmBranco: '',     
        }
    }

    adicionarNovaDespesa = (event) => {
        event.preventDefault ();
        console.log (this.state.listaDeDespesas)
        const novaDespesa = {
            valor: this.state.valorEmBranco,
            tipo: this.state.tipoEmBranco,
            descricao: this.state.descricaoEmBranco,
        }

        const copiaListaDeDespesas = [...this.state.listaDeDespesas, novaDespesa]

        this.setState ({
            listaDeDespesas: copiaListaDeDespesas,
            valorEmBranco: 0,
            descricaoEmBranco: ''
        })
    }

    onChangeValor = (event) => {
        this.setState({valorEmBranco: event.target.value})
    }

    onChangeTipo = (event) => {
        this.setState({tipoEmBranco: event.target.value})
    }

    onChangeDescricao = (event) => {
        this.setState({descricaoEmBranco: event.target.value})
    }
    


    render () {
    
        return (
            <FormCadastro>
                <h1>Cadastro de despesas</h1>
                <p>Valor</p>
                <input 
                    type="number"
                    placeholder="Valor"
                    value={this.state.valorEmBranco}
                    onChange={this.onChangeValor} 
                />
                <p>Tipo</p>
                <select value={this.state.tipoEmBranco} onChange={this.onChangeTipo}>
                    <option value="Casa">Casa</option>
                    <option value="Rolê">Rolê</option>
                    <option value="Viagem">Viagem</option>
                    <option value="Outros">Outros</option>
                </select>
                <p>Descrição</p>
                <input 
                    type="text"
                    placeholder="Descrição"
                    value={this.state.descricaoEmBranco}
                    onChange={this.onChangeDescricao} 
                />
                <button onClick={this.adicionarNovaDespesa}>Salvar Despesa</button>
            </FormCadastro>
        );
    }
}