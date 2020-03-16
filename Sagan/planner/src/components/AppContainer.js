import React from "react"
import styled from "styled-components"
import { connect } from 'react-redux'
import CreateTaskInput from "./CreateTaskInput"
import TaskContainer from "./TaskContainer"

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AppContainer = (props) => {

    const taskList = props.tasks.map(task => {
        return <div>
            <TaskContainer 
                task={task}
            />
            <button>Excluir</button>
            <button>Completar</button>
        </div>
    });
    
    return <AppWrapper>
        <CreateTaskInput />
        <div>
            {taskList}
        </div>
    </AppWrapper>
};


const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, null)(AppContainer)