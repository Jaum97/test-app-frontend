import { pipe, always, unless, complement, isNil } from "ramda";
import { useCallback, useEffect } from "react";
import { shallowEqual } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { IProps } from "./Private.types";

import routesEnum from "../../routes/enum";
import Redirector from "../Redirector";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { logout } from "src/modules/Logout/Logout.service";

function PrivateRoute(props: IProps): JSX.Element {
  const { children, ...rest } = props;
  const { tokens } = useTypedSelector(["tokens"], shallowEqual);

  const logoutIfInvalid = unless(complement(isNil), logout);

  const checkToken = pipe(always(tokens.accessToken), logoutIfInvalid);

  const checkTokenMemo = useCallback(checkToken, [tokens, checkToken]);

  useEffect(checkTokenMemo, [tokens, checkTokenMemo]);

  return (
    <>
      <Redirector />
      <Route
        {...rest}
        render={({ location }) =>
          tokens.accessToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: routesEnum.LOGIN,
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
}

export default PrivateRoute;
