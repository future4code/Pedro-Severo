import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import TextField from '@material-ui/core/TextField';
import { HomePageWrapper, StyledTextField, StyledForm, StyledFormControl, StyledButton, Buttons } from "./style";
import { signIn } from "../../Actions/signUp";

class HomePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    };

    onSubmitForm = (event) => {        
        const {email, password} = this.state;
        this.props.signIn(email, password);
        event.preventDefault();
    }


    onHandleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        const { email, password } = this.state
        return (
            <HomePageWrapper>
                <StyledForm onSubmit={this.onSubmitForm}>
                    <StyledFormControl>
                        <h2>Bem vind@ ao Feddit!</h2>
                        <StyledTextField fullWidth required name="email" type="email" label="E-mail" 
                            value={email}                             
                            onChange={this.onHandleFieldChange}
                            variant="outlined"
                        />
                        <StyledTextField fullWidth required name="password" type="password" label="Senha" 
                            value={password} 
                            onChange={this.onHandleFieldChange} 
                            variant="outlined"
                        />
                    </StyledFormControl>
                    <Buttons>
                        <StyledButton variant="contained" type="submit" color="primary">Entrar</StyledButton>
                        <StyledButton variant="contained" color="primary" onClick={this.props.goToRegister}>Cadastrar</StyledButton>
                    </Buttons>
                </StyledForm>
            </HomePageWrapper>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToRegister: () => {dispatch(push(routes.register))},
        goToFeed: () => {dispatch(push(routes.feed))},
        signIn: (email, password) => {dispatch(signIn(email, password))} 
    }
}

export default connect (
    null, 
    mapDispatchToProps
    )(HomePage)