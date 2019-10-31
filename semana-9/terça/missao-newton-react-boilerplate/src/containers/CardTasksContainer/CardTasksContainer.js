import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '../../components/Button';
import Divider from '@material-ui/core/Divider';
import TaskContainer from '../TaskContainer/TaskContainer';
import { addTask } from '../../actions/index';

const styles = {
	card: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
}

const StyledCard = styled(Card) `
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const StyledCardContent = styled(CardContent) `
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const StyledDivider = styled(Divider) `
    margin: 0 0 20px;
`

const Input = styled.input `
`

const ButtonsContainer = styled.div `
    margin-top: 30px;
`

export class CardTasksContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			textValue: '',
		}
	}

    onChangeTextValue = (event) => {
    	this.setState ({textValue: event.target.value})
    }

    onClickEnviar = () => {
		this.props.addTask(this.state.textValue)
    }

    render () {
    	return (
    		<StyledCard>
    			<CardActionArea>
    				<CardMedia
    					image=""
    					title=""
    				/>
    				<StyledCardContent>
    					<Typography gutterBottom variant="h4" component="h2">
                            Tasks
    					</Typography>
    					<Typography component="p">
                            Coloque aqui as suas atividades diárias
    					</Typography>
    				</StyledCardContent>
    			</CardActionArea>
    			<StyledDivider />
    			<Input
    				onChange={this.onChangeTextValue}
    				value={this.textValue}
    				type="text"
    				placeholder="Task"
    			/>
    			<Button onClick={this.onClickEnviar}>Criar tarefa</Button>
    			<TaskContainer />
                <h1>{this.props.taskValue}</h1>
    			<ButtonsContainer>
    				<Button>Marcar todas como completas</Button>
    				<Button>Todas</Button>
    				<Button>Pendentes</Button>
    				<Button>Completas</Button>
    			</ButtonsContainer>
    		</StyledCard>            
    	)
    } 
}


function mapStateToProps(state) {
	return {
		taskValue: state.tasks,
	}
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (text) => dispatch(addTask(text))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardTasksContainer)