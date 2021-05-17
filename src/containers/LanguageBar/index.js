import React from "react";
import { useTranslation } from "react-i18next";

const LanguageBar = () => {
  const [t, i18n] = useTranslation("translation");
  return (
    <div className="ml-auto">
      <button
        className="btn btn-primary"
        onClick={() => i18n.changeLanguage("en")}
      >
        en
      </button>
      <button
        className="btn btn-success"
        onClick={() => i18n.changeLanguage("srb")}
      >
        srb
      </button>
    </div>
  );
};

export default LanguageBar;
