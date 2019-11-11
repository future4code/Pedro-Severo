import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`

const StyledCardActions = styled(CardActions) `
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;

`

export const HomePage = (props) => {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        // tentei colocar uma imagem aqui, mas não rolou :(
                        image="./2474066.jpg"
                        title="Contemplative Reptile"
                    />
                    <StyledCardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            AstroTrip
                        </Typography>
                        <Typography component="p">
                            O seu sonho de criança vai se tornar realidade. Venha com a gente e conheça toda a via lactea.
                        </Typography>
                    </StyledCardContent>
                </CardActionArea>
                <StyledCardActions>
                    <Button size="small" color="primary" onClick={props.goToLoginPage}>
                        Ir para login
                    </Button>
                    <Button size="small" color="primary" onClick={props.goToTriperForm}>
                        Ir para formulário de cadastro
                    </Button>
                </StyledCardActions>
            </Card>
        </div>
    )
};

function mapDispatchToProps (dispatch) {
    return {
        goToLoginPage: () => dispatch(push(routes.loginPage)),
        goToTriperForm: () => dispatch(push(routes.triperForm)),
        goToTripsCreation: () => dispatch(push(routes.tripsCreation)),
        goToTripsDetails: () => dispatch(push(routes.tripsDetails)),
    };
};
  

export default connect(
    null, 
    mapDispatchToProps
)(HomePage)