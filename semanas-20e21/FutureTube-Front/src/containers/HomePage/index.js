import React from "react";
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';


const HomePage = (props) => {
    
    const handleClickLogout = () => {
        firebase.auth().signOut();
        props.goToLoginPage();    
    };

    return (
        <div>
            <button onClick={handleClickLogout}>Logout</button>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
      goToLoginPage: () => {dispatch(push(routes.login))}
    };
};

export default connect(null, mapDispatchToProps)(HomePage);