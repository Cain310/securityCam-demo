import React from "react";
import ReactDOM from "react-dom";
import "./css/app.css";
import App from "./components/app";
import Home from "./components/home";
import { Router, Route } from "react-router-dom";
import { history } from "./history";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Router history={history}>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard/" component={App} />
  </Router>,
  document.getElementById("root")
);
