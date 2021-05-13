import React from "react";
import { Switch, Route } from "react-router-dom";

import { LOGIN, REGISTER, WELCOME } from "../../routes";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import WelcomePage from "../WelcomePage";

export default function Routers() {
  return (
    <Switch>
      <Route path={LOGIN} component={LoginPage} />
      <Route path={REGISTER} component={RegisterPage} />
      <Route path={WELCOME} component={WelcomePage} />
    </Switch>
  );
}
