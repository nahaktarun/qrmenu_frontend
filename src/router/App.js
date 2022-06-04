import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Places from "../pages/Places";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/places">
            <Places />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
