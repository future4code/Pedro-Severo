import React from 'react';
import styled from 'styled-components';

const TaskListContainer = styled.div `
    display: flex;
    align-items: center;
`

export class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render () {
        return (
            <TaskListContainer>
                <p>Teste</p>
                <button>Delete</button>
            </TaskListContainer>
        )
    }
}