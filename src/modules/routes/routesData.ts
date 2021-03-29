import { createElement } from "react";

import { CreateUser } from "../CreateUser";
import { Dashboard } from "../Dashboard";
import { Login } from "../Login";
import { SignUp } from "../SignUp";
import routesEnum from "./enum";
import { IRoute } from "./types";

export const LoginRoute = {
  name: "Login",
  path: routesEnum.LOGIN,
  children: createElement(Login),
  exact: true,
  key: routesEnum.LOGIN,
  isPrivate: false,
  displayHeaderAndFooter: false,
};

export const RoutesData: IRoute[] = [
  {
    name: "Signup",
    path: routesEnum.SIGNUP,
    children: createElement(SignUp),
    exact: true,
    key: routesEnum.SIGNUP,
    isPrivate: false,
    displayHeaderAndFooter: false,
  },
  {
    name: "Dashboard",
    path: routesEnum.DASHBOARD,
    children: createElement(Dashboard),
    exact: true,
    key: routesEnum.DASHBOARD,
    isPrivate: true,
    displayHeaderAndFooter: true,
  },
  {
    name: "Create User",
    path: routesEnum.CREATE_USER,
    children: createElement(CreateUser),
    exact: true,
    key: routesEnum.CREATE_USER,
    isPrivate: true,
    displayHeaderAndFooter: true,
  },
];
