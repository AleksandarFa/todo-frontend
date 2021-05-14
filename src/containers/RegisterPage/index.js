import React from "react";
import Nav from "../Nav/navBar";
import navLinks from "../Nav/constants";
import RegisterForm from "./registerForm";

const RegisterPage = () => {
  return (
    <main>
      <h1>Sign Up page</h1>
      <Nav links={navLinks} />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
