import React from "react";
import { Switch, Route } from "react-router-dom";

import { LOGIN, REGISTER, WELCOME, DASHBOARD } from "../../routes";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import WelcomePage from "../WelcomePage";
import Dashboard from "../Dashboard";

export default function Routers() {
  return (
    <Switch>
      <Route path={LOGIN} component={LoginPage} />
      <Route path={REGISTER} component={RegisterPage} />
      <Route path={DASHBOARD} component={Dashboard} />
      <Route path={WELCOME} component={WelcomePage} />
    </Switch>
  );
}
