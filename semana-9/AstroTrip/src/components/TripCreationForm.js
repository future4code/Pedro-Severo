import React, { Component } from "react";
import styled from 'styled-components';
import SelectPlanet from './Selects/SelectPlanet';

const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input `
    margin: 5px 0;
    width: 300px;
`

export class TripCreationForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <div>
                <Form>
                    <label>Nome da Viagem (mínimo: 5 caracteres):</label>
                    <Input required name="tripName" type="text" pattern=".{0}|.{5,30}" required />
                    <label>Planeta:</label>
                    <SelectPlanet />
                    <label>Data:</label>
                    <Input required name="date" type="date"/>
                    <label>Descrição da viagem (mínimo: 30 caracteres):</label>
                    <Input required name="descriptionTrip" type="text" pattern=".{0}|.{30,100}" />
                    <label>Duração da viagem em dias(mínimo: 50 dias):</label>
                    <Input required name="durationInDays" type="number" min="50" />
                    <button type="submit">Enviar</button>
                </Form>
            </div>
        );
    };
};

export default TripCreationForm