import { store } from "src/store";
import { TokenActions } from "src/store/ducks/token";

import { IStoreToken } from "../Token/Token.types";

export const logout = (): void => {
  const TOKEN_INITIAL_STATE: IStoreToken = {
    accessToken: "",
    refreshToken: "",
  };

  store.dispatch(TokenActions.setTokens(TOKEN_INITIAL_STATE));
  // store.dispatch(HistoryActions.EmitReplaceHistoryRoute(routesEnum.LOGIN))
};
