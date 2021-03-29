import { Action } from "redux";
import { createActions, createReducer } from "reduxsauce";
import {
  IBrowserHistoryActionCreators,
  IBrowserHistoryActions,
  IStoreBrowserHistory,
} from "src/modules/History/History.types";

export const { Types, Creators }: IBrowserHistoryActions = createActions({
  emitReplaceHistoryRoute: ["route"],
  reset: [],
});

export const BrowserHistoryActions = Creators;

const INITIAL_STATE: IStoreBrowserHistory = "";

const replace = (state = INITIAL_STATE, action: any) => action.route;
const reset = (state = INITIAL_STATE, action: any) => INITIAL_STATE;

export default createReducer<
  IStoreBrowserHistory,
  Action<IBrowserHistoryActionCreators>
>(INITIAL_STATE, {
  [Types.EMIT_REPLACE_HISTORY_ROUTE]: replace,
  [Types.RESET]: reset,
});
