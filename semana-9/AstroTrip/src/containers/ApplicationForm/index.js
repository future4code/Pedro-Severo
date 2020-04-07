import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { applyToTrip } from "../../actions/candidates";
import SelectCountry from '../../components/Selects/SelectCountry';
import SelectTrip from '../../components/Selects/SelectTrip'; 
import TextField from "@material-ui/core/TextField";


const labelsForm = [
    {
        required: true,
        name: "name",
        label: "Nome",
        type: "text",
        pattern: "/^[a-zA-Z]{3,}/",
        title: "Nome Completo" 
    },
    {
        required: true,
        name: "age",
        label: "Idade",
        type: "number",
        title: "Idade (em números)",
        min: 18,
    },
    {
        required: true,
        name: "applicationText",
        label: "Por que você deve ir? (Mínimo 30 caracteres)",
        type: "text",
        pattern: "/[a-zA-Z\s]{30,}/",
        title: "" 
    },
    {
        required: true,
        name: "profession",
        label: "Profissão: (Mínimo 5 caracteres",
        type: "text",
        pattern: "/[a-zA-Z\s]{10,}/" ,
        title: "Profissão: (Mínimo 5 caracteres"
    }
]

const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
`

const StyledTextField = styled(TextField)`
    width: 30vw;
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
        this.props.applyToTrip(this.state.applicationForm);
      };

    render () {
        return (
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    {labelsForm.map(field => {
                        return(
                            <div key={field.name}>
                                <StyledTextField 
                                    required={field.required}
                                    value={this.state.applicationForm[field.name] || ""}
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    label={field.label}
                                    inputProps={{
                                        min: field.min,
                                        pattern: field.pattern,
                                        title: field.title
                                    }}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        )
                    })}
                    <label>País de origem</label>
                    <SelectCountry 
                        name="country"
                        handleInputChange={this.handleInputChange}
                    />
                    <label>Viagem desejada</label>
                    <SelectTrip 
                        name="tripId"
                        handleInputChange={this.handleInputChange} 
                    />
                    <button type="submit">Enviar</button>
                </Form>
            </div>
        );
    };
};

function mapDispatchToProps (dispatch) {
    return {
        applyToTrip: (applicationForm) => dispatch(applyToTrip(applicationForm))                                
    };
};

export default connect (
    null, 
    mapDispatchToProps
)(ApplicationForm)