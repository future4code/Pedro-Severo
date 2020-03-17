import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { completeTask } from "../actions"


const TaskWrapper = styled.div `
    display: flex;
`

const TaskContainer = (props) => {

    const completeTask = (id) => {
        props.completeTask(id)
    }

    return <TaskWrapper>
        <div>{props.task.text}</div>
        <button>Excluir</button>
        <button onClick={completeTask(props.task.id)}>Completar</button>
    </TaskWrapper>
}

const mapDispatchToProps = dispatch => {
    return {
        completeTask: (id) => dispatch(completeTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TaskContainer)