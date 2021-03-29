import { ChangeEvent } from "react";

import { User } from "../User/User.model";

export interface IInputStyledProps {
  invalid?: boolean;
}

export interface IViewProps {
  inputsWithError: string[];
  isEdit: boolean;
  user: User;
  saveUser: () => void;
  updateUser: (
    key: string
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
