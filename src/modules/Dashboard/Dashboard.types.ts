import { User } from "../User/User.model";

export interface IProps {}

export interface IViewProps {
  users: User[];
  editUser: (id: string) => () => void;
  removeUser: (id: string) => () => void;
  addNewUser: () => void;
}
