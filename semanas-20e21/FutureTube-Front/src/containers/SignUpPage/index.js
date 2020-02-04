import React from "react";
import MainButtonComponent from '../../components/MainButton';
import Logo from "../../components/Logo";
import { 
    SignUpWrapper,
    ContainerSignUpPage, 
    TextRegister, 
    InputName, 
    InputEmail, 
    InputPassword, 
    InputPasswordConfirm 
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            showPassword: false,
            showPasswordConfirm: false,
            error: {
                msg:"", 
                status:false
            },
            heightInputPasswordConfirm: "56px"
        };
    };

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
    };

    validatePassword = event => {
        event.preventDefault()

        const password = this.state.password
        const passwordConfirm = this.state.passwordConfirm

        if (password === passwordConfirm ) {
            this.handleSubmit()
        }
        else {
            this.setState({error:{msg:"Os campos de senha e de confirmação não estão iguais.", status: true}});
            this.setState({heightInputPasswordConfirm: "66px"})
        };
    };

    handleSubmit = () => {

    };

    render () {
        return ( 
            <SignUpWrapper>
                <ContainerSignUpPage onSubmit={this.validatePassword}>
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
                        onChange={this.handleFieldChange}
                        name="name"
                        type="text"
                        // value={name}
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
                        onChange={this.handleFieldChange}
                        name="email"
                        type="email"
                        // value={email}
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
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        inputProps={{
                            minlength: "6"
                        }}
                        onChange={this.handleFieldChange}
                        name="passwordSignUp"
                        type={this.state.showPassword ? 'text' : 'password'}
                        // value={password}
                        title="A senha deve ter no mínimo 6 caracteres"
                    />
                    <InputPasswordConfirm
                        required
                        id="outlined-required-confirm"
                        label="Confirmar"
                        placeholder="Confirme a senha anterior"
                        margin="normal"
                        variant="outlined"
                        height={this.state.heightInputPasswordConfirm}
                        error={this.state.error.status}
                        helperText={this.state.error.msg}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPasswordConfirm}
                                    >
                                        {this.state.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.handleFieldChange}
                        name="passwordConfirm"
                        type={this.state.showPasswordConfirm ? 'text' : 'password'}
                        // value={passwordConfirm}
                    />
                    <MainButtonComponent title="Criar" type="submit" />
                </ContainerSignUpPage>
            </SignUpWrapper>
        );
    };
};

export default SignUpPage