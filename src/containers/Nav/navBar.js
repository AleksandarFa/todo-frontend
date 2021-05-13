import React, { useState } from "react";
import { Link } from "react-router-dom";
import fullNav from "./constants";

export default () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(fullNav);

  return (
    <nav>
      <ul className="nav border m-4">
        {links.map((link) => {
          return (
            <li className="nav-item">
              <Link className="nav-link" to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
