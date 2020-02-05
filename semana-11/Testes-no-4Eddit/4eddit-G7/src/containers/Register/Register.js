import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import TextField from '@material-ui/core/TextField';
import { RegisterWrapper, StyledForm, StyledFormControl, StyledButton, Buttons } from "./style";
import { signUp } from "../../Actions/signUp";


class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",

        };
    };

    onHandleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitForm = (event) => {        
        const {username, email, password} = this.state;
        this.props.signUp(username, email, password);
        event.preventDefault();
    }

    render () {
        const {username, email, password} = this.state;

        return (
            <RegisterWrapper>
                <StyledForm onSubmit={this.onSubmitForm}>
                    <StyledFormControl>
                        <h2>Cadastro</h2>
                        <TextField fullWidth required name="username" required label="Nome de usuário" 
                            value={username} 
                            onChange={this.onHandleFieldChange} 
                        />
                        <TextField fullWidth required name="email" type="email" required label="E-mail" 
                            value={email} 
                            onChange={this.onHandleFieldChange} 
                        />
                        <TextField fullWidth required name="password" type="password" label="Senha" 
                            value={password} 
                            onChange={this.onHandleFieldChange} 
                        />
                    </StyledFormControl>
                    <Buttons>
                        <StyledButton 
                            variant="contained" 
                            type="submit" 
                            color="primary"
                        >
                            Cadastrar
                        </StyledButton>
                    </Buttons>
                </StyledForm>
            </RegisterWrapper>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (username, email, password) => dispatch(signUp(username, email, password))
    }
}

export default connect (
    null, 
    mapDispatchToProps
    )(Register)