import React, { useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { LoginWrapper } from './styled';
import * as firebase from 'firebase';
import LoginForm from '../../components/LoginForm';

const LoginPage = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
   
    const handleFieldChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleFieldChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleSubmit = event => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            props.goToHomePage();  
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    return (
        <LoginWrapper>
            <LoginForm 
                handleFieldChangeEmail={handleFieldChangeEmail}
                handleFieldChangePassword={handleFieldChangePassword}
                handleClickShowPassword={handleClickShowPassword}
                handleSubmit={handleSubmit}
                email={email}
                showPassword={showPassword}
                password={password}
                goToSignUp={props.goToSignUp}
            />
        </LoginWrapper>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
      goToSignUp: () => {dispatch(push(routes.signUp))},
      goToHomePage: () => {dispatch(push(routes.homePage))}
    };
};

export default connect(null, mapDispatchToProps)(LoginPage);