import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./loginForm";
import Nav from "../Nav/navBar";
import { makeSelectRegistered } from "../../store/auth/selectors";
import navLinks from "../Nav/constants";

const LoginPage = () => {
  const registration = useSelector(makeSelectRegistered());
  return (
    <main>
      <h1>Sign In page</h1>
      <Nav links={navLinks} />
      {registration ? (
        <div className="alert alert-success" role="alert">
          Successful registration. Please login.
        </div>
      ) : null}
      <LoginForm />
    </main>
  );
};

export default LoginPage;
