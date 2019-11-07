import React from "react";
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from "../Router/index";


export const HomePage = (props) => {
    return (
        <div>
            {/* a Home page precisa ser a primeira página, que leva para o formulário de inscrição ou para o painel do ADM */}
            <p>Home Page</p>
            <button onClick={props.goToLoginPage}>Ir para login</button>
            <button onClick={props.goToTriperForm}>Ir para formulário de cadastro</button>
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