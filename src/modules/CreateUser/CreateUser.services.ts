import { axiosInstance } from "src/axios";
import { Maybe } from "src/interfaces/common";
import { displayError } from "src/utils/cogoToast";

import { User } from "../User/User.model";

export const saveUserInDB = async (
  user: User,
  edit = false
): Promise<Maybe<User>> => {
  try {
    const method = edit ? axiosInstance.patch : axiosInstance.post;

    const uri = `/users${edit ? `/${user._id}` : ""}`;

    const res = await method(uri, user);

    return res?.data;
  } catch (error) {
    const { message = "Error" } = error?.response?.data || {};

    displayError(message);
  }
};
