import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { completeTask } from '../actions/index';

const TaskListContainer = styled.div `
    display: flex;
    align-items: center;
`

const TaskCompleted = styled.p `
    text-decoration: line-through;
`

export class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render () {

        return ( this.props.tasksList.map (task => (
            task.completed ? 
            (
            <TaskListContainer>
                <div>
                    <TaskCompleted>{task.text}</TaskCompleted>
                </div>
                <button>Delete</button>
            </TaskListContainer>) : (
                <TaskListContainer>
                    <div>
                        <p>{task.text}</p>
                    </div>
                    <button>Delete</button>
                </TaskListContainer>
                )
        )))
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         completedTask: (id, complete) => dispatch(completeTask(id))
//     }
// }

const mapStateToProps = state => ({
    tasksList: state.tasks
})



export default connect (mapStateToProps) (TaskList)