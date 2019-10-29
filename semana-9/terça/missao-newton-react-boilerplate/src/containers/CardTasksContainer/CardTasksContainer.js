import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '../../components/Button'
import Divider from '@material-ui/core/Divider';
import TaskContainer from '../TaskContainer/TaskContainer';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

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

export const CardTasksContainer = props => {
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
                    type="text"
                    placeholder="Task"
                />
                <TaskContainer />
                <ButtonsContainer>
                    <Button>Marcar todas como completas</Button>
                    <Button>Todas</Button>
                    <Button>Pendentes</Button>
                    <Button>Completas</Button>
                </ButtonsContainer>
            </StyledCard>            
    )
} 

CardTasksContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CardTasksContainer);