import React from "react";
import Nav from "../Nav/navBar";
import navLinks from "../Nav/constants";
import Header from "../Header";

const WelcomePage = () => {
  return (
    <main>
      <Header title={"welcome.title"} />
      <Nav links={navLinks} />
    </main>
  );
};

export default WelcomePage;
