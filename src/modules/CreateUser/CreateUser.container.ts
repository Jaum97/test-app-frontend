import { append, eqProps, mergeLeft, mergeRight, pipe, prop } from "ramda";
import { ChangeEvent, createElement, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import user from "src/store/ducks/user";
import { UsersActions } from "src/store/ducks/users";
import { UserToEditActions } from "src/store/ducks/userToEdit";
import { displayError, displaySuccess } from "src/utils/cogoToast";
import { VALID_EMAIL } from "src/utils/email";
import { getRandomId } from "src/utils/string";
import routesEnum from "../routes/enum";
import { User } from "../User/User.model";
import { saveUserInDB } from "./CreateUser.services";

import { IViewProps } from "./CreateUser.types";
import View from "./CreateUser.view";

function CreateTeamContainer(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const { updateUserToEdit, resetUserToEdit } = UserToEditActions;
  const { addUser: addStoreUser, updateOneUser } = UsersActions;

  const { userToEdit, users } = useTypedSelector(["userToEdit", "users"]);

  const INITIAL_USER = userToEdit.id ? userToEdit : new User();

  const [user, setUser] = useState(INITIAL_USER);
  const [inputsWithError, setInputsWithError] = useState<string[]>([]);

  const isEdit = Boolean(userToEdit.name);

  const updateUser = (key: string) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;

    const payload = { [key]: value } as Partial<User>;

    setUser(mergeLeft(payload));
  };

  const validateInputs = () => {
    const emailInvalid = !VALID_EMAIL.test(user.email);
    const nameInvalid = !user.name;
    const passwordInvalid = !isEdit && !user.password;

    const invalidInputs = [
      emailInvalid && "email",
      nameInvalid && "name",
      passwordInvalid && "password",
    ].filter(Boolean) as string[];

    setInputsWithError(invalidInputs);

    console.log({ isEdit, invalidInputs });

    return Boolean(!invalidInputs.length);
  };

  const saveUser = () => {
    if (!validateInputs()) {
      const errMess = "Failed to save user, please check highlighted inputs";

      void displayError(errMess);

      return;
    }

    const emailExists = users.some(eqProps("email", user));

    const errMessage = "There is already a user with this email";

    if (!userToEdit.email && emailExists) void displayError(errMessage);

    const userToSave = { ...user, id: getRandomId("temp-id-") };

    (async () => {
      const DBUser = await saveUserInDB(userToSave, isEdit);

      if (!DBUser) return;

      const fnToDispatch = isEdit ? updateOneUser : addStoreUser;

      console.log({ fnToDispatch });

      const userToDispatch = { ...DBUser, id: DBUser._id };

      dispatch(fnToDispatch(userToDispatch));

      history.push(routesEnum.DASHBOARD);

      displaySuccess(`User ${isEdit ? "updated" : "created"}!`);

      dispatch(resetUserToEdit());
      setUser(new User());
    })();
  };

  const viewProps: IViewProps = {
    inputsWithError,
    isEdit,
    saveUser,
    updateUser,
    user,
  };

  return createElement(View, viewProps);
}

export default CreateTeamContainer;
