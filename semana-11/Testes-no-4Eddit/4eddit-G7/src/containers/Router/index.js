import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Feed from "../Feed/Feed";
import Register from "../Register/Register";
import Post from "../Post/Post";

export const routes = {
  root: "/",
  feed: "/feed",
  register: "/register",
  post:"/post"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.feed} component={Feed} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.post} component={Post} />
        <Route path={routes.root} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
