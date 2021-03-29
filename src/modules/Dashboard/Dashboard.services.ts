import { axiosInstance } from "src/axios";
import { Maybe } from "src/interfaces/common";
import { displayError } from "src/utils/cogoToast";
import { User } from "../User/User.model";

export const fetchUsers = async (id: string): Promise<Maybe<User[]>> => {
  try {
    const res = await axiosInstance.get(`/users/requestor/${id}`);

    return res?.data;
  } catch (error) {
    const { message = "Error" } = error?.response?.data || {};

    displayError(message);
  }
};

export const deleteUser = async (id: string): Promise<Maybe<User[]>> => {
  try {
    const res = await axiosInstance.delete(`/users/${id}`);

    return res?.data;
  } catch (error) {
    const { message = "Error" } = error?.response?.data || {};

    displayError(message);
  }
};
