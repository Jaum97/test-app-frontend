import { Action } from "redux";
import { createActions, createReducer } from "reduxsauce";
import { User } from "src/modules/User/User.model";
import {
  IStoreUser,
  IUserActionCreators,
  IUserActions,
} from "src/modules/User/User.types";

export const { Types, Creators }: IUserActions = createActions({
  setUser: ["user"],
  resetUser: [],
});

export const UserActions = Creators;

const INITIAL_STATE: IStoreUser = new User();

const set = (state = INITIAL_STATE, action: any) => action.user;

const reset = (state = INITIAL_STATE, action: any) => INITIAL_STATE;

export default createReducer<IStoreUser, Action<IUserActionCreators>>(
  INITIAL_STATE,
  {
    [Types.SET_USER]: set,
    [Types.RESET_USER]: reset,
  }
);
