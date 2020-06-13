import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Notes from "./components/Notes";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <Notes />
      </Container>
    </Provider>
  );
}

export default App;
