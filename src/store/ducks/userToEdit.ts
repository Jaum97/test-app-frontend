import { Action } from "redux";
import { createActions, createReducer } from "reduxsauce";
import { User } from "src/modules/User/User.model";
import { IUserToEditActions } from "src/modules/User/User.types";

const INITIAL_STATE = new User();

const set = (state: User = INITIAL_STATE, action: { user: User }): User =>
  action.user;

const update = (state: User = INITIAL_STATE, action: { user: User }): User => ({
  ...state,
  ...action.user,
});

const reset = (state: User = INITIAL_STATE, action = null): User =>
  INITIAL_STATE;

const actions = {
  setUserToEdit: ["user"],
  updateUserToEdit: ["user"],
  resetUserToEdit: [],
};

export const { Types, Creators }: IUserToEditActions = createActions(actions);

export const UserToEditActions = Creators;

const handlers = {
  [Types.SET_USER_TO_EDIT]: set,
  [Types.UPDATE_USER_TO_EDIT]: update,
  [Types.RESET_USER_TO_EDIT]: reset,
};

export default createReducer<User, Action<IUserToEditActions>>(
  INITIAL_STATE,
  handlers
);
