import React from 'react';
import styled from 'styled-components';

const AllCompletedButtonContainer = styled.div `
`

export class AllCompletedButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ""
        }
    }



    render () {
        return (
            <AllCompletedButtonContainer>
                <button>Marcar todas como copletas</button>
            </AllCompletedButtonContainer>
        )
    }
}