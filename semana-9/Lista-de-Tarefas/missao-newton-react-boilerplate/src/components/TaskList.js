import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';

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
                <p>{this.props.taskList}</p>
                <button>Delete</button>
            </TaskListContainer>
        )
    }
}

function mapStateToProps(state) {
    // return {
    //     addTask: text => taskList: state.tasks 
    // }
}



export default connect (mapStateToProps) (TaskList)