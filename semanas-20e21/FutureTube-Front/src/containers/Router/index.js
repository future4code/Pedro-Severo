import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";

export const routes = {
    login: "/",
    signUp: "/signup",
};

const Router = props => {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.signUp} component={SignUpPage} />
                <Route exact path={routes.login} component={LoginPage} />
            </Switch>
        </ConnectedRouter>
    );
};

export default Router