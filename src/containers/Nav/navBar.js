import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default ({ links }) => {
  const [t, i18n] = useTranslation("translation");
  return (
    <nav>
      <ul className="nav border m-4">
        {links.map((link) => {
          return (
            <li key={link.id} className="nav-item">
              <Link className="nav-link" to={link.link}>
                {t(link.text)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
