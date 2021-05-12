import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./components/welcomePage";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";

function App() {
  return (
    <Router>
      <div className="App"></div>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
