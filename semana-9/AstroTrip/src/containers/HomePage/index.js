import React from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { getTrips, getTripDetail } from "../../actions/trips";


export const HomePage = (props) => {
    return (
        <div>
            <p>Home Page</p>
            <button onClick={props.goToTriperForms}>Formulário de inscrição</button>
            <button onClick={props.goToTripsList}>Lista de todas as viagens</button>
            <button onClick={props.goToTripsCreation}>Criar Viagem</button>
            <button onClick={props.goToTripsDetails}>Detalhe das viagens</button>
        </div>
    )
};

function mapDispatchToProps (dispatch) {
    return {
        goToTriperForms: () => dispatch(push(routes.triperForm)),
        goToTripsList: () => dispatch(push(routes.tripsList)),
        goToTripsCreation: () => dispatch(push(routes.tripsCreation)),
        goToTripsDetails: () => dispatch(push(routes.tripsDetails)),
    };
};
  

export default connect(
    null, 
    mapDispatchToProps
)(HomePage)