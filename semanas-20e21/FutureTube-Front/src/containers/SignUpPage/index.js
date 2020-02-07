// TODO: Isolar o form de cadastro em um componente separado
// TODO: Adicionar url da phto no serviço de cadastro de usuário


import React, { useState } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import MainButtonComponent from '../../components/MainButton';
import Logo from "../../components/Logo";
import { 
    SignUpWrapper,
    ContainerSignUpPage, 
    TextRegister, 
    InputName, 
    InputEmail,
    InputBirth, 
    InputPassword, 
    InputPasswordConfirmation 
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import * as firebase from 'firebase';

const SignUpPage = props => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState({
        msg: '', 
        status: false
    });
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
            <ContainerSignUpPage onSubmit={handleSubmit}>
                <Logo />
                <TextRegister>Cadastrar</TextRegister>
                <InputName
                    required
                    id="outlined-required-name"
                    label="Nome"
                    placeholder="Nome e Sobrenome"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleFieldChangeUserName}
                    name="name"
                    type="text"
                    value={userName}
                />
                <InputEmail
                    required
                    id="outlined-required-email"
                    label="E-mail"
                    placeholder="email@email.com"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleFieldChangeEmail}
                    name="email"
                    type="email"
                    value={email}
                />
                <InputBirth
                    required
                    id="date"
                    label="Birthday"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={handleFieldChangeBirth}
                    value={birth}
                />
                <InputPassword
                    required
                    id="outlined-required-password-signUp"
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    inputProps={{
                        minlength: "6"
                    }}
                    onChange={handleFieldChangePassword}
                    name="passwordSignUp"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    title="A senha deve ter no mínimo 6 caracteres"
                />
                <InputPasswordConfirmation
                    required
                    id="outlined-required-confirm"
                    label="Confirmar"
                    placeholder="Confirme a senha anterior"
                    margin="normal"
                    variant="outlined"
                    height={heightInputPasswordConfirmation}
                    error={passwordErrorMessage.status}
                    helperText={passwordErrorMessage.msg}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={handleClickShowPasswordConfirmation}
                                >
                                    {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    onChange={handleFieldChangePasswordConfirmation}
                    name="passwordConfirmation"
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    value={passwordConfirmation}
                />
                <MainButtonComponent title="Criar" type="submit" />
            </ContainerSignUpPage>
        </SignUpWrapper>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
      goToHomePage: () => {dispatch(push(routes.homePage))}
    };
};

export default connect(null, mapDispatchToProps)(SignUpPage);