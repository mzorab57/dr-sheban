import React from "react";
import { useTranslation } from "react-i18next";

const SecondaryButton = ({ onClick, text }) => {
  const { t } = useTranslation();
  return (
    <div>
      <button className="text-xl  text-primary" onClick={onClick}>
        {t(text)}
      </button>
    </div>
  );
};

export default SecondaryButton;
