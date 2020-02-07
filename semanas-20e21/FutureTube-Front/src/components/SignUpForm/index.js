import React from 'react';
import MainButtonComponent from '../../components/MainButton';
import Logo from "../../components/Logo";
import { 
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

const SignUpForm = props => {
    
    const handleFieldChangeUserName = event => {
        props.handleFieldChangeUserName(event);
    };

    const handleFieldChangeEmail = event => {
        props.handleFieldChangeEmail(event);
    };

    const handleFieldChangeBirth = event => {
        props.handleFieldChangeBirth(event);
    };

    const handleFieldChangePassword = event => {
        props.handleFieldChangePassword(event);
    };

    const handleFieldChangePasswordConfirmation = event => {
        props.handleFieldChangePasswordConfirmation(event);
    };

    const handleClickShowPassword = () => {
        props.handleClickShowPassword();
    };

    const handleClickShowPasswordConfirmation = () => {
        props.handleClickShowPasswordConfirmation();
    };

    const handleSubmit = async (event) => {
        props.handleSubmit(event);
    };
    
    return (
        <ContainerSignUpPage onSubmit={handleSubmit}>
            <Logo />
            <TextRegister>Cadastrar</TextRegister>
            <InputName
                required
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
                value={props.userName}
            />
            <InputEmail
                required
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
                value={props.email}
            />
            <InputBirth
                required
                label="Birthday"
                margin="normal"
                variant="outlined"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleFieldChangeBirth}
                value={props.birth}
            />
            <InputPassword
                required
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
                                {props.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                inputProps={{
                    minlength: "6"
                }}
                onChange={handleFieldChangePassword}
                name="passwordSignUp"
                type={props.showPassword ? 'text' : 'password'}
                value={props.password}
                title="A senha deve ter no mínimo 6 caracteres"
            />
            <InputPasswordConfirmation
                required
                label="Confirmar"
                placeholder="Confirme a senha anterior"
                margin="normal"
                variant="outlined"
                height={props.height}
                error={props.errorMessage}
                helperText={props.passwordErrorMessage}
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
                                {props.showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                onChange={handleFieldChangePasswordConfirmation}
                name="passwordConfirmation"
                type={props.showPasswordConfirmation ? 'text' : 'password'}
                value={props.passwordConfirmation}
            />
            <MainButtonComponent title="Criar" type="submit" />
        </ContainerSignUpPage>
    );
};

export default SignUpForm;