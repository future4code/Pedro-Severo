import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/index";
import HomePage from "../HomePage/index";
import ApplicationForm from "../ApplicationForm/index";
import ListTripsPage from "../ListTripsPage/index";
import TripDetailsPage from "../TripDetailsPage/index"

export const routes = {
  root: "/",
  home: "/home",
  triperForm: "/application-form",
  tripsList: "trips/list",
  tripsCreation: "trips/create",
  tripsDetails: "trips/details",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.home} component={HomePage} />
        <Route path={routes.triperForm} component={ApplicationForm} />
        <Route path={routes.tripsCreation} component={HomePage} />
        <Route path={routes.tripsList} component={ListTripsPage} />
        <Route path={routes.tripsDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
