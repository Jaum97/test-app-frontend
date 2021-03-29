import { User } from "src/modules/User/User.model";

export interface ISortBy {
  header: "name" | "email";
  order: "asc" | "desc";
}

export interface IProps {
  users: User[];
  editUser: (id: string) => () => void;
  removeUser: (id: string) => () => void;
}
