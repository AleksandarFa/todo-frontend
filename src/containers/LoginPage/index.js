import React from "react";

import LoginForm from "./loginForm";
import Nav from "../Nav/navBar";

const LoginPage = () => {
  return (
    <main>
      <h1>Sign In page</h1>
      <Nav />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
