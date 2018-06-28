import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import ErrorMessage from "./components/errorMessage/ErrorMessage";

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard/:username" component={Dashboard} />
      <Route
        path="/"
        render={() => {
          return <ErrorMessage text={"404: page not found"} />;
        }}
      />
    </Switch>
  );
}
