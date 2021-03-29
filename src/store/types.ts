import { Maybe } from "src/interfaces/common";
import { IStoreBrowserHistory } from "src/modules/History/History.types";
import { IStoreToken } from "src/modules/Token/Token.types";
import { User } from "src/modules/User/User.model";
import { IStoreUser } from "src/modules/User/User.types";

export interface IStore {
  tokens: IStoreToken;
  browserHistory: IStoreBrowserHistory;
  user: IStoreUser;
  users: User[];
  userToEdit: User;
}

export type SelectorEqualityFn<K extends keyof IStore> = Maybe<
  (left: Pick<IStore, K>, right: Pick<IStore, K>) => boolean
>;
