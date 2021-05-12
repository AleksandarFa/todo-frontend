import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./forms/loginForm";

const LoginPage = () => {
  return (
    <main>
      <h1>Sign In page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link to="/">Welcome Page</Link>
          </li>
        </ul>
      </nav>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
