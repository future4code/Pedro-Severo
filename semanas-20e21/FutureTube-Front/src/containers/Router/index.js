import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";

export const routes = {
    signUp: "/signup",
    login: "/"
};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route path={routes.signUp} component={SignUpPage} />
                <Route path={routes.login} component={LoginPage} />
            </Switch>
        </ConnectedRouter>
    );
};

export default Router