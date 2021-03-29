export interface ITokenActionCreators {
  setTokens: (tokens: IStoreToken) => void;
  resetTokens: () => void;
}

export interface ITokenActions {
  Types: any;
  Creators: ITokenActionCreators;
}

export interface IStoreToken {
  accessToken: string;
  refreshToken: string;
}
