import { curry, path, pipe } from "ramda";
import { ChangeEvent, createElement, useState } from "react";
import { useHistory } from "react-router";
import { displayError } from "src/utils/cogoToast";
import { VALID_EMAIL } from "src/utils/email";

import routesEnum from "../routes/enum";
import { insertUserDB } from "./SignUp.service";
import { IViewProps } from "./SignUp.types";
import View from "./SignUp.view";

function SignUpContainer(): JSX.Element {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputsWithError, setInputsWithError] = useState<string[]>([]);

  const updateUsername = pipe(curry(path)(["target", "value"]), setUsername);
  const updateEmail = pipe(curry(path)(["target", "value"]), setEmail);
  const updatePassword = pipe(curry(path)(["target", "value"]), setPassword);

  const validateInputs = () => {
    const emailInvalid = !VALID_EMAIL.test(email);
    const nameInvalid = !username;
    const passwordInvalid = !password;

    const invalidInputs = [
      emailInvalid && "email",
      nameInvalid && "username",
      passwordInvalid && "password",
    ].filter(Boolean) as string[];

    setInputsWithError(invalidInputs);

    return Boolean(!invalidInputs.length);
  };

  const createNewUser = () => {
    if (!validateInputs()) {
      const errMess = "Failed to save user, please check highlighted inputs";

      void displayError(errMess);

      return;
    }

    (async () => {
      const toInsert = {
        name: username,
        email,
        password,
      };

      const res = await insertUserDB(toInsert);

      console.log({ res });

      history.push(routesEnum.LOGIN);
    })();
  };

  const viewProps: IViewProps = {
    username,
    email,
    password,
    updateUsername: updateUsername as (
      e: ChangeEvent<HTMLInputElement>
    ) => void,
    updateEmail: updateEmail as (e: ChangeEvent<HTMLInputElement>) => void,
    updatePassword: updatePassword as (
      e: ChangeEvent<HTMLInputElement>
    ) => void,
    createNewUser,
    inputsWithError,
  };

  return createElement(View, viewProps);
}

export default SignUpContainer;
