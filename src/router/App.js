import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Places from "../pages/Places";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/places">
            <Places />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
