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
            applicationForm: {},
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ applicationForm: {...this.state.applicationForm, [name]: value } })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state);
      };

    render () {
        return (
            <div>
                <Form>
                    <label>Primeiro nome:</label>
                    <Input 
                        required 
                        id="name" 
                        name="name" 
                        type="text" 
                        pattern="^[a-zA-Z]{3,}" 
                        value={this.state.applicationForm["name"] || ""}
                        onChange={this.handleInputChange} 
                    />
                    <label>Idade:</label>
                    <Input 
                        required 
                        id="age" 
                        name="age" 
                        min="18" 
                        type="number" 
                        value={this.state.applicationForm["age"] || ""}
                        onChange={this.handleInputChange}
                    />
                    <label>Por que você deve ser aprovado? (Mínimo: 30 caracteres)</label>
                    <Input 
                        required 
                        id="applicationText" 
                        name="applicationText" 
                        type="text" 
                        pattern="[a-zA-Z\s]{30,}"
                        value={this.state.applicationForm["applicationText"] || ""}
                        onChange={this.handleInputChange}
                    />
                    <label>Profissão (Mínimo: 10 caracteres)</label>
                    <Input 
                        required 
                        id="profession" 
                        name="profession" 
                        type="text" 
                        pattern="[a-zA-Z\s]{10,}" 
                        value={this.state.applicationForm["profession"] || ""}
                        onChange={this.handleInputChange}
                    />
                    <label>País de origem</label>
                    <SelectCountry 
                        // não estou conseguindo colocar requisito de necessiade de mudança no select,
                        // o que permite que o submit seja feito com os dois campos de select em branco
                        name="country"
                        handleInputChange={this.handleInputChange}
                        // value={this.state.applicationForm["country"] || ""}
                    />
                    <label>Viagem desejada</label>
                    <SelectTrip 
                        name="tripId"
                        handleInputChange={this.handleInputChange} 
                        // value={this.state.applicationForm["tripId"] || ""}
                    />
                    <button type="submit" onClick={this.handleOnSubmit}>Enviar</button>
                </Form>
            </div>
        );
    };
};

export default ApplicationForm