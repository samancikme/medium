import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducers } from "./reducer";

export const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);
