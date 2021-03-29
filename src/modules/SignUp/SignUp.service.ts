import { axiosInstance } from "src/axios";
import { Maybe } from "src/interfaces/common";
import { displayError } from "src/utils/cogoToast";

import { User } from "../User/User.model";

export const insertUserDB = async (user: {
  name: string;
  email: string;
  password: string;
}): Promise<Maybe<User>> => {
  try {
    const res = await axiosInstance.post("/users", user);

    return res?.data;
  } catch (error) {
    const { message = "Error" } = error?.response?.data || {};

    displayError(message);
  }
};
