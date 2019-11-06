import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTrips, getTripDetail } from "../../actions/trips";
import SelectCountry from '../../components/Selects/SelectCountry';
import SelectTrip from '../../components/Selects/SelectTrip'; 

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


export class ApplicationForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name:"",
            age:"",
            applicationText: "",
            profession: "",
            country: "",
            tripWanted: "",
        }
    }

    render () {
        return (
            <div>
                <Form>
                    <label>Primeiro nome:</label>
                    <Input required name="name" type="text" pattern="^[a-zA-Z]{3,}" required />
                    <label>Idade:</label>
                    <Input required name="idade" min="18" type="number" required/>
                    <label>Por que você deve ser aprovado? (Mínimo: 30 caracteres)</label>
                    <Input required name="applicationText" type="text" pattern=".{0}|.{30,100}"/>
                    <label>Profissão (Mínimo: 10 caracteres)</label>
                    <Input required name="profession" type="text" pattern=".{0}|.{10,30}" />
                    <label>País de origem</label>
                    <SelectCountry />
                    <label>Viagem desejada</label>
                    <SelectTrip />
                    <button type="submit">Enviar</button>
                </Form>
            </div>
        );
    };
};

export default ApplicationForm