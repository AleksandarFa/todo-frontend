import React from "react";
import Nav from "../Nav/navBar";
import navLinks from "../Nav/constants";

const WelcomePage = () => {
  return (
    <main>
      <h1>Todo application</h1>
      <Nav links={navLinks} />
    </main>
  );
};

export default WelcomePage;
