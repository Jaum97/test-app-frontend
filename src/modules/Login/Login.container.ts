import { curry, omit, path, pipe } from "ramda";
import { createElement, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TokenActions } from "src/store/ducks/token";
import { UserActions } from "src/store/ducks/user";
import { displayError } from "src/utils/cogoToast";

import routesEnum from "../routes/enum";
import { attemptLogin } from "./Login.service";
import { IViewProps } from "./Login.types";
import View from "./Login.view";

function LoginContainer(): JSX.Element {
  // const [access, setAccess] = useState('')
  // const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const updateLogin = pipe(curry(path)(["target", "value"]), setLogin);
  const updatePassword = pipe(curry(path)(["target", "value"]), setPassword);

  const tryLogin = () => {
    (async () => {
      const user = await attemptLogin(login, password);

      if (!user) return;

      if (!user?.tokens) {
        return void displayError("incorrect user or password");
      }

      const { _id: id } = user;

      dispatch(TokenActions.setTokens(user?.tokens));
      dispatch(UserActions.setUser(omit(["tokens"], { ...user, id })));

      history.push(routesEnum.DASHBOARD);
    })();
  };

  const signup = () => void history.push(routesEnum.SIGNUP);

  const viewProps: IViewProps = {
    updateLogin,
    login,
    updatePassword,
    password,
    tryLogin,
    signup,
  };
  return createElement(View, viewProps);
}

export default LoginContainer;
