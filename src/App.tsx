import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./modules/routes";
import { ResetDefaultStyles } from "./modules/styles/defaults";
import { persistor, store } from "./store";
import {
  faPencilAlt,
  faSave,
  faShareAlt,
  faSort,
  faSortDown,
  faSortUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faSort,
  faSortUp,
  faSortDown,
  faPencilAlt,
  faTrash,
  faShareAlt,
  faSave
);

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <ResetDefaultStyles />
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

export default App;
