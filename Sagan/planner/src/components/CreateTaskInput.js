import React, { useState } from "react"
import styled from "styled-components"
import { connect } from "react-redux";
import { createTask } from '../actions'

const CreateTaskInputWrapper = styled.div `
    
`

const CreateTaskForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CreateTaskInput = (props) => {
    const [taskValue, setTaskValue] = useState('');
    
    const handleFieldChangeTaskValue = event => {
        setTaskValue(event.target.value)
    };
    
    const createTask = event => {
        event.preventDefault()
        props.createTask(taskValue)
        setTaskValue('')
    };

    return <CreateTaskInputWrapper>
        <CreateTaskForm onSubmit={createTask}>
            <h1>
                4Task
            </h1>
            <input 
                onChange={handleFieldChangeTaskValue}
                value={taskValue}    
            >
            </input>
            <button 
                onClick={createTask}
                type="submit"
            >
                Enviar
            </button>
        </CreateTaskForm>
    </CreateTaskInputWrapper>
};

const mapDispatchToProps = dispatch => {
    return {
        createTask: (text) => dispatch(createTask(text))
    }
}

export default connect(null, mapDispatchToProps)(CreateTaskInput)