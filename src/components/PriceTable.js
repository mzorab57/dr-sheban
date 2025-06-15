import React from "react";
import { useTranslation } from "react-i18next";

const PriceTable = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="p-5 rounded-lg container mx-auto">
      <h2 className="text-center text-white text-2xl lg:text-4xl  mb-4">
        {t(title)}
      </h2>
      <table className="w-full  text-gray-500">
        <tbody className="">
          <tr className="border-b">
            <td className="py-4 px-4">
              {t("oral_consultation")}
            </td>
            <td className="py-4 px-4">{t("free")}</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-4">
              {t("exam_cleaning")}
            </td>
            <td className="py-4 px-4">$140</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-4">
            {t("white_filling")}
            </td>
            <td className="py-4 px-4">$175</td>
          </tr>
          <tr>
            <td className="py-4 px-4">
            {t("laser_teeth")}
            </td>
            <td className="py-4 px-4">$340</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
