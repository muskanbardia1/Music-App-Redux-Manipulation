import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducer";
import reduxthunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { HashRouter } from "react-router-dom";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxthunk))
);
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
