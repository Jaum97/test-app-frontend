import { update } from "ramda";
import { Action } from "redux";
import { createActions, createReducer } from "reduxsauce";
import { User } from "src/modules/User/User.model";
import {
  IUsersActionCreators,
  IUsersActions,
} from "src/modules/User/User.types";

export const { Types, Creators }: IUsersActions = createActions({
  setUsers: ["users"],
  addUser: ["user"],
  updateOneUser: ["user"],
  removeOneUser: ["user"],
  resetUsers: [],
});

export const UsersActions = Creators;

const INITIAL_STATE: User[] = [];

const set = (state = INITIAL_STATE, action: any) => action.users;

const add = (state = INITIAL_STATE, action: { user: User }) => [
  ...state,
  action.user,
];

const updateOne = (state = INITIAL_STATE, action: { user: User }) => {
  const { id, _id } = action.user;
  const index = state.findIndex((u) => u._id === _id || u.id === id);

  return update(index, action.user, state);
};

const removeOne = (state = INITIAL_STATE, action: { user: User }) => {
  const { id, _id } = action.user;

  return state.filter((u) => u._id !== _id && u.id !== id);
};

const reset = (state = INITIAL_STATE, action: any) => INITIAL_STATE;

export default createReducer<User[], Action<IUsersActionCreators>>(
  INITIAL_STATE,
  {
    [Types.SET_USERS]: set,
    [Types.ADD_USER]: add,
    [Types.UPDATE_ONE_USER]: updateOne,
    [Types.REMOVE_ONE_USER]: removeOne,
    [Types.RESET_USERS]: reset,
  }
);
