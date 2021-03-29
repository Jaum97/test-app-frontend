import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { BrowserHistoryActions } from "src/store/ducks/browserHistory";

const { reset } = BrowserHistoryActions;

function Redirector() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { browserHistory } = useTypedSelector(["browserHistory"]);
  const [lastState, setLastState] = useState("");

  function handleRedirect() {
    if (!lastState || !browserHistory) {
      const hasHistory = Boolean(browserHistory.length);

      const shouldReset = lastState !== browserHistory && hasHistory;

      if (shouldReset) {
        history.replace(browserHistory);
        setLastState(browserHistory);
        dispatch(reset());
      }
    }
  }

  useMemo(handleRedirect, [handleRedirect]);

  return null;
}

export default Redirector;
