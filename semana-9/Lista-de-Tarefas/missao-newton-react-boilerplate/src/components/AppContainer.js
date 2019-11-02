import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import TaskList from './TaskList';
import AllCompletedButton from './AllCompletedButton'

const Container = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30vw;
	height: 50vh;
	border: thin;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Container>
			<Form />
			<TaskList />
			<AllCompletedButton />
		</Container>
	}
}