import React from "react";
import "./App.css";
import NotFound from "./components/ErrorPages/NotFound/NotFound";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Notes from "./components/Notes";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ToastProvider } from "react-toast-notifications";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Notes} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ToastProvider>
    </Provider>
  );
}

export default App;
