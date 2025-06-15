import React from "react";
import { useTranslation } from "react-i18next";

const Types = ({ types }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full container mx-auto">
      <h1 className="text-3xl text-white py-10 mx-4">{t("types_of_procedures")}</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {types.map((type, idx) => (
          <div key={idx} className=" text-white p-4 flex items-start">
            <div className="flex-shrink-0">
              <img
                src={require("../assets/icons/" + type.icon)}
                alt={type.title}
                className="w-16 h-16 mr-4"
              />
            </div>
            <div>
              <h2 className="text-2xl">{t(type.title)}</h2>
              <p className="text-md text-gray-500">{t(type.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
