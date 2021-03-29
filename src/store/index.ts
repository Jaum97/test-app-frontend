import { createStore, Reducer } from "redux";
import { Persistor, persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { Reducers } from "./ducks";

const persistConfig = {
  key: "Users Management Tool",
  storage,
  whitelist: ["user", "users", "tokens"],
};

const persistedReducer: Reducer = persistReducer(persistConfig, Reducers);

//TODO: Type properly: Store<IStore> ( breaks dispatch )
export const store: any = createStore(persistedReducer);
export const persistor: Persistor = persistStore(store);
