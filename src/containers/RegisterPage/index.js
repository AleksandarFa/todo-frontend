import React from "react";
import { useTranslation } from "react-i18next";
import Nav from "../Nav/navBar";
import navLinks from "../Nav/constants";
import RegisterForm from "./registerForm";
import Header from "../Header";

const RegisterPage = () => {
  const [t, i18n] = useTranslation("translation");
  return (
    <main>
      <Header title={"register.title"} />
      <Nav links={navLinks} />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
