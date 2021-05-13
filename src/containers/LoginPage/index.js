import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./loginForm";
import Nav from "../Nav/navBar";

const LoginPage = () => {
  const registration = useSelector((state) => {
    return state.authReducer.registerSuccess;
  });
  return (
    <main>
      <h1>Sign In page</h1>
      <Nav />
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
