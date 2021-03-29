import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import { Page } from "../Page";
import { PrivateRoute } from "./Private";
import { PublicRoute } from "./Public";
import { LoginRoute, RoutesData } from "./routesData";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute {...LoginRoute} />

        {RoutesData.map(
          ({ children, isPrivate, displayHeaderAndFooter, ...rest }) => {
            const ProperRoute = isPrivate ? PrivateRoute : PublicRoute;

            return (
              <ProperRoute {...rest}>
                {displayHeaderAndFooter ? <Page>{children}</Page> : children}
              </ProperRoute>
            );
          }
        )}

        {/* No Route Found Redirects to Login */}
        <Redirect from={"*"} to={"/login"} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
