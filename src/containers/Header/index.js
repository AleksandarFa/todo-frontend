import React from "react";
import { useTranslation } from "react-i18next";
import LanguageBar from "../LanguageBar";

const Header = ({ title }) => {
  const [t, i18n] = useTranslation("translation");
  return (
    <header className="ml-4 mr-4 d-flex">
      <h1>{t(title)}</h1>
      <LanguageBar />
    </header>
  );
};

export default Header;
