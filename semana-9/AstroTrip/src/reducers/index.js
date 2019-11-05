import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { tripsReducer } from "./trips"
import { idReducer } from "./ids"
import { tripDetailReducer } from "./tripDetail"

// preciso validar se essa é a melhor forma de montar o estado

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tripList: tripsReducer,
    id: idReducer,
    trip: tripDetailReducer,
  });
