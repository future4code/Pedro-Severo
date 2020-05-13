import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createTrip } from '../actions/trips';
import SelectPlanet from './Selects/SelectPlanet';

const labelsForm = [
    {
        required: true,
        name: "tripName",
        label: "Nome da viagem",
        type: "text",
        pattern: "[a-zA-Z\s]{5,}",
        title: "Nome da viagem (mínimo 5 caracteres)"
    },
    {
        required: true,
        name: "date",
        label: "Data",
        type: "date",
        title: "Data futura"
    },
    {
        required: true,
        name: "descriptionTrip",
        label: "Descrição da viagem (mínimo 30 caracteres)",
        type: "text",
        title: "Descrição da viagem"
    },
    {
        required: true,
        name: "durationInDays",
        label: "Duração da viagem em dias",
        type: "number",
        min: 50,
        title: "Duração da viagem em dias (mínimo de 50 dias)"
    }
]

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
        console.log("oi ")
        event.preventDefault();
        console.log(this.state);
        // this.props.createTrip(this.state.newTrip)
    };


    render () {
        return (
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <SelectPlanet 
                        name="planet"
                        handleInputChange={this.handleInputChange}
                    />
                    {labelsForm.map(field => {
                        return (
                            <div key={field.name}>
                                <label>{field.label}</label>
                                <Input 
                                    required={field.required}
                                    value={this.state.newTrip[field.name] || ""}
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    label={field.label}
                                    min={field.min}
                                    parttern={field.pattern}
                                    title={field.title}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        )
                    })}
                    <button type="submit">Enviar</button>
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