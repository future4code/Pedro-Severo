import React, { useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import MainButtonComponent from '../../components/MainButton';
import Logo from "../../components/Logo";
import { 
    LoginWrapper,
    ContainerLoginPage, 
    TextEnter,
    InputEmail,
    InputPassword,
    SignUpText,
    GoToSignUpButton,
    ErrorMessage 
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import * as firebase from 'firebase';

const LoginPage = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            props.goToHomePage();  
        })
        .catch(function(error) {
            console.log(error);
        });
    };
   
    const handleFieldChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleFieldChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    return (
        <LoginWrapper>
            <ContainerLoginPage onSubmit={handleSubmit}>
                <Logo />
                <TextEnter>Entrar</TextEnter>
                <InputEmail
                    required
                    label="E-mail"
                    placeholder="email@email.com"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={handleFieldChangeEmail}
                    name="email"
                    type="email"
                    value={email}
                />
                <InputPassword
                    required
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={handleFieldChangePassword}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    id="password"
                />
                <ErrorMessage>mensagem de erro, usar o redux</ErrorMessage>
                <MainButtonComponent title="Entrar" type="submit" />
                <SignUpText>
                    Não possui cadastro?{' '}
                    <GoToSignUpButton onClick={props.goToSignUp}>
                        Clique aqui.
                    </GoToSignUpButton>
                </SignUpText>
            </ContainerLoginPage>
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