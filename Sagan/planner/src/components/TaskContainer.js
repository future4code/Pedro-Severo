import React from "react"
import styled from "styled-components"

const TaskWrapper = styled.div `
    display: flex;
`

const TaskContainer = (props) => {
    return <TaskWrapper>
        <div>{props.task.text}</div>
    </TaskWrapper>
}

export default TaskContainer