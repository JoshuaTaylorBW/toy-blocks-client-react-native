import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const composeEnhancers = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle
  : compose;

const persistConfig = {
  key: "tbc",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default initialState => {
  const middlewares = [reduxImmutableStateInvariant(), thunk];
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
