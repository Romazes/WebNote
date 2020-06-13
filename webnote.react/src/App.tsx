import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NotFound from "./components/ErrorPages/NotFound/NotFound";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Notes from "./components/Notes";
import { Container } from "@material-ui/core";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Notes} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
