import React from 'react';
import styled from 'styled-components';

const FormExtrato = styled.section `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Filtro = styled.div `
    display: flex;
    flex-direction: column;
`

const ListaDespesas = styled.ul`

`

export class Extrato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDeDespesas = props.listaDeDespesas,
        }
    }
    return (
        <FormExtrato>
            <Filtro>
                <h1>Relação de Despesas</h1>
                <p>Tipo de despesa</p>
                <select>
                    <option value=""></option>
                    <option value="Casa">Casa</option>
                    <option value="Rolê">Rolê</option>
                    <option value="Viagem">Viagem</option>
                    <option value="Outros">Outros</option>
                </select>
                <p>Valor Mínimo</p>
                <input type="number" />
                <p>Valor Máximo</p>
                <input type="number" />
            </Filtro>
            <hr />
            <ListaDespesas>

            </ListaDespesas>
        </FormExtrato>
    )
}
    