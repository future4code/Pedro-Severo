// TODO: Adicionar url da phto no serviço de cadastro de usuário

import React, { useState } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { SignUpWrapper } from './styled';
import * as firebase from 'firebase';
import SignUpForm from '../../components/SignUpForm';

const SignUpPage = props => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState({ msg: '', status: false });
    const [heightInputPasswordConfirmation, setHeightInputPasswordConfirmation] = useState('56px');

    const handleFieldChangeUserName = event => {
        setUserName(event.target.value)
    };

    const handleFieldChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleFieldChangeBirth = event => {
        setBirth(event.target.value);
    };

    const handleFieldChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleFieldChangePasswordConfirmation = event => {
        setPasswordConfirmation(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowPasswordConfirmation = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === passwordConfirmation) {
            const newUser = {
                userName,
                email,
                birth,
                password
            };
            
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then(() => {
                const user = firebase.auth().currentUser;
                
                firebase.firestore().collection("users").doc(user.uid).set({
                    userName, 
                    email,
                    birth, 
                    password
                }).then(() => {
                    user.updateProfile({
                        displayName: userName,  
                        photoURL: "link da foto"
                    }).then(() => {
                        props.goToHomePage();  
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    console.log(err);
                });
            })
            .catch(function(error) {
                console.log(error);
            });       
        } else {
            setPasswordErrorMessage({msg:"Os campos de senha e de confirmação de senha não estão iguais.", status: true});
            setHeightInputPasswordConfirmation("66px")
        };
    };

    return ( 
        <SignUpWrapper>
            <SignUpForm
                handleFieldChangeUserName={handleFieldChangeUserName}
                handleFieldChangeEmail={handleFieldChangeEmail}
                handleFieldChangeBirth={handleFieldChangeBirth}
                handleFieldChangePassword={handleFieldChangePassword}
                handleFieldChangePasswordConfirmation={handleFieldChangePasswordConfirmation}
                handleClickShowPassword={handleClickShowPassword}
                handleClickShowPasswordConfirmation={handleClickShowPasswordConfirmation}
                handleSubmit={handleSubmit}
                userName={userName}
                email={email}
                birth={birth}
                showPassword={showPassword}
                password={password}
                height={heightInputPasswordConfirmation}
                errorMessage={passwordErrorMessage.status}
                passwordErrorMessage={passwordErrorMessage.msg}
                showPasswordConfirmation={showPasswordConfirmation}
                passwordConfirmation={passwordConfirmation}
            />
        </SignUpWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      goToHomePage: () => {dispatch(push(routes.homePage))}
    };
};

export default connect(null, mapDispatchToProps)(SignUpPage);