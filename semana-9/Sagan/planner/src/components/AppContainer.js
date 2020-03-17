import React, { useState } from "react"
import styled from "styled-components"
import { connect } from 'react-redux'
import { createTask } from '../actions'

const AppWrapper = styled.div`

`

const AppContainer = (props) => {
    const [taskValue, setTaskValue] = useState('');


    const handleFieldChangeTaskValue = event => {
        setTaskValue(event.target.value)
    };
    
    const createTask = () => {
        props.createTask(taskValue)
    }

    const taskList = props.tasks.map(task => {
        return <p>{task.text}</p>
    })
    
    return <AppWrapper>
        <h1>
            4Task
        </h1>
            <input onChange={handleFieldChangeTaskValue}>
            </input>
            <button onClick={createTask}>
                Enviar
            </button>
        <div>
            {taskList}
        </div>
    </AppWrapper>
};

const mapDispatchToProps = dispatch => {
    return {
        createTask: (text) => dispatch(createTask(text))
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)