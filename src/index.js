import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import flowsReducer from "./apps/flows/reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunkMiddleware from 'redux-thunk';

import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const allReducers = combineReducers({
  ...flowsReducer,
});

const composeFunctions = [
  applyMiddleware(thunkMiddleware)
];

const store = createStore(allReducers, compose(...composeFunctions));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
