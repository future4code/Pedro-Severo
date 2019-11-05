import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { tripsReducer } from "./trips"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips: tripsReducer
  });
