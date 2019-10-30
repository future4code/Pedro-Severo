import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'

const StyledList = styled(List)`
    max-width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;
`

export const TaskContainer = props => {
	return (
		<StyledList>
			<ListItem>
                Teste
			</ListItem>
			<Avatar>
				<DeleteIcon />
			</Avatar>
		</StyledList>
	)
}


export default TaskContainer