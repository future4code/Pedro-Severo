import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router/index";
import { doLogin } from "../../actions/adm";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickLogin = () => {
    const { email, password } = this.state 
    this.props.doLogin(email, password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={this.onClickLogin}>Login</Button>
      </LoginWrapper>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    doLogin: (email, password) => dispatch(doLogin(email, password))
  };
};



export default connect (
  null,
  mapDispatchToProps
)(LoginPage)