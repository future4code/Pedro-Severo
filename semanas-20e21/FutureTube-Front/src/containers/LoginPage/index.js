import React, { useState } from 'react';
import { connect } from 'react-redux';
import routes from '../Router';
import { push } from 'connected-react-router';
import MainButtonComponent from '../../components/MainButton';
import Logo from "../../components/Logo";
import { 
    LoginWrapper,
    ContainerLoginPage, 
    LogoWrapper,
    LogoIcon, 
    LogoText,
    TextEnter,
    InputUserName,
    InputEmail,
    InputPassword,
    TextRegisterUser,
    GoToSignUp,
    ErrorMessage 
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';


const LoginPage = props => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onClickLogin = event => {
        event.preventDefault();
    };

    const handleFieldChangeUserName = event => {
        setUserName(event.target.value)
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
            <ContainerLoginPage>
                <Logo />
                <TextEnter>Entrar</TextEnter>
                <InputUserName
                    required
                    label="Nome"
                    placeholder="Como você quer ser chamado?"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={handleFieldChangeUserName}
                    name="userName"
                    type="userName"
                    value={userName}
                />
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
                <TextRegisterUser>
                    Não possui cadastro?{' '}
                    <GoToSignUp onClick={props.goToSignUp}>
                        Clique aqui.
                    </GoToSignUp>
                </TextRegisterUser>
            </ContainerLoginPage>
        </LoginWrapper>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
      goToSignUp: () => dispatch(push(routes.signUp)) 
    };
};

export default connect(null, mapDispatchToProps)(LoginPage);