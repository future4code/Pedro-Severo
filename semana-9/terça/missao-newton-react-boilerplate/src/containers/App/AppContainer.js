import React from 'react'
import styled from 'styled-components'
import { CardTasksContainer } from '../CardTasksContainer/CardTasksContainer'

const Body = styled.div `
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Body>
			<CardTasksContainer />
		</Body>
	}
}