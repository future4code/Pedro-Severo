import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormBoredContainer = styled.div`
`

const Input = styled.input`
`

export class FormBored extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            participantsValue: 0,
            activityTypeValue: '',
            whoActivity: '',
        }
    }

    onChangeParticipantsValue = (event) => {
        this.setState({participantsValue: event.target.value})
    }
    
    onChangeActivityTypeValue = (event) => {
        this.setState({activityTypeValue: event.target.value})
    }

    createActivity = () => {
        const activityInfos = {
            participants: this.state.participantsValue,
            activity: this.state.activityTypeValue
        }
        axios
            .get(`http://www.boredapi.com/api/activity?type=${activityInfos.activity}&participants=${activityInfos.participants}`,
            {
                params: {
                    activityInfos
                }
            }).then(response => {
                this.setState({whoActivity: response.data.activity})
                console.log(response);
                console.log(this.state.whoActivity)
            }).catch(error =>{
                console.log(error.message)
            })
    }

    renderActivity = () => {
        return <div>
            <h1>{this.state.whoActivity}</h1>
        </div>
    }


    render () {
        const whoActivity = this.renderActivity()
        return(
            <FormBoredContainer>
                <h4>Quantos participantes:</h4>
                <Input 
                    type="number" 
                    onChange={this.onChangeParticipantsValue} 
                    value={this.participantsValue}>
                </Input>
                <h4>Qual o tipo de atividade vocês querem realizar?</h4>
                <select value={this.activityTypeValue} onChange={this.onChangeActivityTypeValue} >
                    <option value="recreational">Recreacional</option>
                    <option value="social">Social</option>
                    <option value="relaxation">Relaxante</option>
                    <option value="charity">Altruista</option>
                    <option value="cooking">Cozinha</option>
                    <option value="music">Musical</option>
                    <option value="busywork">Passa-tempo</option>
                    <option value="education">Educacional</option>
                </select>
                <button onClick={this.createActivity}>
                    Gerar atividade
                </button>
                {whoActivity}
            </FormBoredContainer>
        )
    }
}