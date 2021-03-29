import { combineReducers, Reducer, ReducersMapObject } from "redux";

import { IStore } from "../types";
import browserHistory from "./browserHistory";
import tokens from "./token";
import user from "./user";
import users from "./users";
import userToEdit from "./userToEdit";

const reducers: ReducersMapObject<IStore> = {
  tokens,
  browserHistory,
  user,
  userToEdit,
  users,
};

export const Reducers: Reducer = combineReducers(reducers);
