import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";

import {
  LOGIN,
  REGISTER,
  WELCOME,
  DASHBOARD,
  CREATE_TODO,
  EDIT_TODO,
} from "../../routes";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import WelcomePage from "../WelcomePage";
import Dashboard from "../Dashboard";
import CreateTodo from "../Todo/createTodo";
import EditTodo from "../Todo/editTodo";

export default function Routers() {
  return (
    <Switch>
      <PublicRoute path={LOGIN} component={LoginPage} />
      <PublicRoute path={REGISTER} component={RegisterPage} />
      <PrivateRoute path={DASHBOARD} component={Dashboard} />
      <PrivateRoute path={CREATE_TODO} component={CreateTodo} />
      <PrivateRoute path={EDIT_TODO} component={EditTodo} />
      <PublicRoute path={WELCOME} component={WelcomePage} />
    </Switch>
  );
}
