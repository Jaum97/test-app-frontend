import { Action } from "redux";
import { createActions, createReducer } from "reduxsauce";
import {
  IStoreToken,
  ITokenActionCreators,
  ITokenActions,
} from "src/modules/Token/Token.types";

export const { Types, Creators }: ITokenActions = createActions({
  setTokens: ["tokens"],
  resetTokens: [],
});

export const TokenActions = Creators;

const INITIAL_STATE: IStoreToken = {
  accessToken: "",
  refreshToken: "",
};

const set = (state = INITIAL_STATE, action: any) => action.tokens;

const reset = (state = INITIAL_STATE, action: any) => INITIAL_STATE;

export default createReducer<IStoreToken, Action<ITokenActionCreators>>(
  INITIAL_STATE,
  {
    [Types.SET_TOKENS]: set,
    [Types.RESET_TOKENS]: reset,
  }
);
