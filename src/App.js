import React from 'react'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootStack from "./navigation";
import persistedStore from "./store";

const { store, persistor } = persistedStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootStack />
    </PersistGate>
  </Provider>
);

export default App;
