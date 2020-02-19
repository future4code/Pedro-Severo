import React, { Component } from "react";
import * as firebase from 'firebase';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import HomePage from "../HomePage";
import NewVideoPage from "../NewVideoPage";

export const routes = {
    login: "/",
    signUp: "/signup",
    homePage: "/home",
    newVideo: "/newVideo"
};

class Router extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("usuário está logado: ", user)
            } else {
                console.log("usuário saiu", user)
            }
        });
    };

    render () {
        return (
            <ConnectedRouter history={this.props.history}>
                <Switch>
                    <Route exact path={routes.signUp} component={SignUpPage} />
                    <Route exact path={routes.homePage} component={HomePage} />
                    <Route exact path={routes.newVideo} component={NewVideoPage} />
                    <Route exact path={routes.login} component={LoginPage} />
                </Switch>
            </ConnectedRouter>
        );
    };
};

export default Router