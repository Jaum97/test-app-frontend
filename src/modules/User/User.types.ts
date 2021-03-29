import { User } from "./User.model";

export type IStoreUser = Omit<User, "tokens">;

export interface IUserActionCreators {
  setUser: (user: IStoreUser) => void;
  resetUser: () => void;
}

export interface IUserActions {
  Types: any;
  Creators: IUserActionCreators;
}

export interface IUsersActionCreators {
  setUsers: (users: User[]) => void;
  updateOneUser: (user: Partial<User>) => void;
  addUser: (user: Partial<User>) => void;
  removeOneUser: (user: User) => void;
  resetUsers: () => void;
}

export interface IUsersActions {
  Types: any;
  Creators: IUsersActionCreators;
}

export interface IUserToEditActionCreators {
  setUserToEdit: (user: User) => void;
  updateUserToEdit: (user: Partial<User>) => void;
  resetUserToEdit: () => void;
}

export interface IUserToEditActions {
  Types: any;
  Creators: IUserToEditActionCreators;
}
