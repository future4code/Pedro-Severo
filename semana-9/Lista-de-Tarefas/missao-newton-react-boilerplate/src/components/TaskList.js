import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { completeTask, deleteTask } from '../actions/index';

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

    onDelete = (id) => {
        this.props.completeTask(id)
    }

    onComplete = (id) => {
        this.props.completeTask(id)
    }

    render () {
        const handleComplete = (id) => {
            this.onComplete(id)
        };

        const handleDelete = (id) => {
            this.onDelete(id)
        };

        return ( this.props.tasksList.map (task => (
            task.completed ? 
            (
            <TaskListContainer>
                <div>
                    <TaskCompleted>{task.text}</TaskCompleted>
                </div>
                <button onClick={
                    () => {handleDelete(task.id)}
                }>Delete</button>
            </TaskListContainer>) : (
            <TaskListContainer>
                <div onClick={
                    () => {handleComplete(task.id)}
                }>
                    <p>{task.text}</p>
                </div>
                <button onClick={
                    () => {handleDelete(task.id)}
                }>Delete</button>
            </TaskListContainer>
            )
        )))
    }
}

const mapDispatchToProps = dispatch => ({
    completeTask: id => dispatch(completeTask(id)),
    deteleTask: id => dispatch(deleteTask(id)),
})

const mapStateToProps = state => ({
    tasksList: state.tasks
})



export default connect (mapStateToProps, mapDispatchToProps) (TaskList)