import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main>
      <h1>Todo application</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default WelcomePage;
