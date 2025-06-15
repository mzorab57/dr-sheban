import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-6xl text-white">{t("page_not_found")}</h1>
        <a href="/" className="text-xl text-primary py-5">
         {t("back_to_home")}
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
