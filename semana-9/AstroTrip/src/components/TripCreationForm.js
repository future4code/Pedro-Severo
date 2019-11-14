import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createTrip } from '../actions/trips';
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
            newTrip: {}
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ newTrip: {...this.state.newTrip, [name]: value } })
    };

    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.createTrip(this.state.newTrip)
    };


    render () {
        return (
            <div>
                <Form>
                    <label>Nome da Viagem (mínimo: 5 caracteres):</label>
                    <Input 
                        required 
                        name="tripName" 
                        type="text" 
                        pattern="[a-zA-Z\s]{5,}"
                        value={this.state.newTrip["tripName"] || ""}
                        onChange={this.handleInputChange} 
                    />
                    <label>Planeta:</label>
                    <SelectPlanet 
                        // não estou conseguindo colocar requisito de necessiade de mudança no select,
                        // o que permite que o submit seja feito com os dois campos de select em branco
                        name="planet"
                        handleInputChange={this.handleInputChange}
                    />
                    {/* Não estou conseguindo criar o requisito de data mínima sendo o dia de hoje */}
                    <label>Data:</label>
                    <Input 
                        required 
                        name="date" 
                        type="date"
                        value={this.state.newTrip["date"] || ""}
                        onChange={this.handleInputChange}
                    />
                    <label>Descrição da viagem (mínimo: 30 caracteres):</label>
                    <Input 
                        required 
                        name="descriptionTrip" 
                        type="text" 
                        pattern="[a-zA-Z\s]{30,}" 
                        value={this.state.newTrip["descriptionTrip"] || ""}
                        onChange={this.handleInputChange}
                    />
                    <label>Duração da viagem em dias(mínimo: 50 dias):</label>
                    <Input 
                        required 
                        name="durationInDays" 
                        type="number" 
                        min="50" 
                        value={this.state.newTrip["durationInDays"] || ""}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit" onClick={this.handleOnSubmit}>Enviar</button>
                </Form>
            </div>
        );
    };
};

function mapDispatchToProps (dispatch) {
    return {
        createTrip: (newTrip) => dispatch(createTrip(newTrip))                                
    };
};

export default connect (
    null, 
    mapDispatchToProps
)(TripCreationForm)