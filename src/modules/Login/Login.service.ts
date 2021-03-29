import { axiosInstance } from "src/axios";
import { Maybe } from "src/interfaces/common";
import { displayError } from "src/utils/cogoToast";
import { TokensType, User } from "../User/User.model";

export const attemptLogin = async (
  login: string,
  password: string
): Promise<Maybe<User & { tokens: TokensType }>> => {
  try {
    const res = await axiosInstance.post("/auth/login", { login, password });

    return res?.data;
  } catch (error) {
    const { message = "Error" } = error?.response?.data || {};

    displayError(message);
  }
};
