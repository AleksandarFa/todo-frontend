import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./loginForm";
import { makeSelectRegistered } from "../../store/auth/selectors";
import { useTranslation } from "react-i18next";
import Nav from "../Nav/navBar";
import links from "../Nav/constants";
import Header from "../Header";

const LoginPage = () => {
  const registration = useSelector(makeSelectRegistered());
  const [t, i18n] = useTranslation();
  return (
    <main>
      <Header title={"login.title"} />
      <Nav links={links} />
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
