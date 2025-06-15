import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const MarqueItems = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full" dir="ltr">
      <div className="my-10">
        <h2 className="text-center text-white text-3xl md:text-4xl tracking-wide">
          {t("awards_associations")}
        </h2>
      </div>
      <Marquee direction="left" autoFill={true} pauseOnClick={true} speed={40}>
        {items &&
          items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border text-white text-xl mx-4 rounded-xl"
            >
              {item.title}
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default MarqueItems;
