import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div `
    display: flex;
    flex-direction:column;
    align-items: center;
`

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ""
        }
    }



    render () {
        return (
            <FormContainer>
                <h3>Tasks</h3>
                <input 
                    type="text"
                />
                <button>Criar Task</button>   
            </FormContainer>
        )
    }
}