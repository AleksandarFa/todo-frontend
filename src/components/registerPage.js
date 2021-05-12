import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./forms/registerForm";

const RegisterPage = () => {
  return (
    <main>
      <h1>Sign Up page</h1>
      <ul>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
        <li>
          <Link to="/">Welcome Page</Link>
        </li>
      </ul>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
