import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import postsReducer from "./post";
import idReducer from "./id";
import postDetailReducer from "./postDetail";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    // Outros reducers aqui
    posts: postsReducer,
    id: idReducer,
    post: postDetailReducer
  });
