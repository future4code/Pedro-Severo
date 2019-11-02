import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';

const FormContainer = styled.div `
    display: flex;
    flex-direction:column;
    align-items: center;
`

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ""
        }
    }

    onChangeTextTaskValue = (event) => {
        this.setState({textValue: event.target.value})
    }

    onClickCreateTask = () => {
        this.props.addTask(this.state.textValue,)
    }

    render () {
        return (
            <FormContainer>
                <h3>Tasks</h3>
                <input 
                    type="text"
                    value={this.textValue}
                    onChange={this.onChangeTextTaskValue}
                />
                <button onClick={this.onClickCreateTask}>Criar Task</button>   
            </FormContainer>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (text) => dispatch(addTask(text))
    }
}

export default connect(null, mapDispatchToProps)(Form)