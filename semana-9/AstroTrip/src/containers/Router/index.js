import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/index";
import HomePage from "../HomePage/index";
import ApplicationForm from "../ApplicationForm/index";
import ListTripsPage from "../ListTripsPage/index";
import TripDetailsPage from "../TripDetailsPage/index";

export const routes = {
  home: "/",
  login: "/login",
  applicationForm: "/application-form",
  tripsList: "/trips/list",
  tripsCreation: "/trips/create",
  tripsDetails: "/trips/details",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.applicationForm} component={ApplicationForm} />
        <Route exact path={routes.tripsList} component={ListTripsPage} />
        <Route exact path={routes.tripsCreation} component={HomePage} />
        <Route exact path={routes.tripsDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
