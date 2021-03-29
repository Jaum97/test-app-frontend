import { shallowEqual } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useTypedSelector } from "src/hooks/useTypedSelector";

import routesEnum from "../../routes/enum";
import Redirector from "../Redirector";

export default function PublicRoute({ children, ...rest }: any): JSX.Element {
  const { tokens } = useTypedSelector(["tokens"], shallowEqual);

  const hasToken = Boolean(tokens.accessToken);

  const redirectProps = (location: any) => ({
    pathname: routesEnum.DASHBOARD,
    state: { from: location },
  });

  return (
    <>
      <Redirector />

      <Route
        {...rest}
        render={({ location }) =>
          hasToken ? <Redirect to={redirectProps(location)} /> : children
        }
      />
    </>
  );
}
