import React from "react";
import ReactDOM from "react-dom";
import { Router, HashRouter } from "react-router-dom";
import {createBrowserHistory} from "history";

import "./styles/styles.scss";

import App from "./App";

function Index() {
  let history = createBrowserHistory();
  return (
    <HashRouter history={history}>
      <App />
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
