import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createTask } from "../actions/tasks";

const FormContainer = styled.form `
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Inputs = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            day: "monday",
        }
    }

    onSubmitForm = (event) => {
        const { text, day } = this.state
        this.props.createTask(text, day)
        event.preventDefault();
    }

    onHandleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { text, day } = this.state
        return <FormContainer
            onSubmit={this.onSubmitForm}
        >
            <h3>Novo compromisso</h3>
            <Inputs>
                <input 
                    type="text" 
                    placeholder="Compromisso"
                    name="text"
                    value={text}
                    onChange={this.onHandleFieldChange}
                />
                <select 
                    name="day" 
                    value={day}
                    onChange={this.onHandleFieldChange}
                >
                    <option value="monday">Segunda-feira</option>
                    <option value="tuesday">Terça-feira</option>
                    <option value="wednesday">Quarta-feira</option>
                    <option value="thursday">Quinta-feira</option>
                    <option value="friday">Sexta-feira</option>
                    <option value="saturday">Sábado</option>
                    <option value="sunday">Domingo</option>
                </select>
            </Inputs>
            <button type="submit">Criar nova tafera</button>
        </FormContainer>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (text, day) => {dispatch(createTask(text, day)) }
    };
};

export default connect (
    null, 
    mapDispatchToProps)
    (Form);