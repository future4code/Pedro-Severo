import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormBoredContainer = styled.div`
`
export class FormBored extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onChangeParticipantesValue = (event) => {
        this.setState({participantesValue: event.target.value})
    }
    
    onChangeActivityTypeValue = (event) => {
        this.setState({activityTypeValue: event.target.value})
    }


    render () {
        return(
            <FormBoredContainer>
                <h4>Quantos participantes:</h4>
                <Input 
                    type="number" 
                    onChange={this.props.onChangeParticipantesValue} 
                    value={this.props.ParticipantesValue}>
                </Input>
                <h4>Qual o tipo de atividade vocês querem realizar?</h4>
                <select value={this.props.activityTypeValue} onChange={this.props.onChangeActivityTypeValue} >
                    <option value="Casa">Casa</option>
                    <option value="Rolê">Rolê</option>
                    <option value="Viagem">Viagem</option>
                    <option value="Outros">Outros</option>
                </select>
                <button onClick={this.props.createActivity}>
                    Gerar atividade
                </button>
            </FormBoredContainer>
        )
    }
}