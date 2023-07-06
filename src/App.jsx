import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import { MainLayout } from "./routes";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </>
  );
};

export default App;
