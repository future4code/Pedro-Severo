import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { applyToTrip } from "../../actions/candidates";
import SelectCountry from '../../components/Selects/SelectCountry';
import SelectTrip from '../../components/Selects/SelectTrip'; 
import TextField from "@material-ui/core/TextField";


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
                <Form>
                    <StyledTextField
                        required 
                        value={this.state.applicationForm["name"] || ""}
                        onChange={this.handleInputChange} 
                        id="name"
                        name="name"
                        type="text" 
                        pattern="^[a-zA-Z]{3,}" 
                        label="Nome"
                    />
                    <StyledTextField 
                        required 
                        value={this.state.applicationForm["age"] || ""}
                        onChange={this.handleInputChange}
                        id="age" 
                        name="age" 
                        min="18" 
                        type="number" 
                        label="Idade"
                    />
                    <StyledTextField 
                       required 
                       value={this.state.applicationForm["applicationText"] || ""}
                       onChange={this.handleInputChange}
                       id="applicationText" 
                       name="applicationText" 
                       type="text" 
                       pattern="[a-zA-Z\s]{30,}"
                       label="Por que você deve ir? (Mínimo 30 caracteres)"
                    />
                    <StyledTextField  
                        required 
                        value={this.state.applicationForm["profession"] || ""}
                        onChange={this.handleInputChange}
                        id="profession" 
                        name="profession" 
                        type="text" 
                        pattern="[a-zA-Z\s]{10,}" 
                        label="Profissão: (Mínimo 10 caracteres)"
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

function mapDispatchToProps (dispatch) {
    return {
        applyToTrip: (applicationForm) => dispatch(applyToTrip(applicationForm))                                
    };
};

export default connect (
    null, 
    mapDispatchToProps
)(ApplicationForm)