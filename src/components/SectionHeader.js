import React from "react";
import parse from "html-react-parser";
import Icon from "../assets/images/floss.png";
import { useTranslation } from "react-i18next";
const SectionHeader = ({ title, subTitle }) => {
  const { t } = useTranslation();
  return (
    <div
      className="container py-16 lg:py-36"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="st-section-heading st-style1">
        {title ? (
          <h2 className="text-white text-3xl md:text-4xl  2xl:text-6xl">
            {t(title)}
          </h2>
        ) : (
          ""
        )}
        {title ? (
          <div className="st-seperator">
            <div
              className="st-seperator-left wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            />
            <div className="st-seperator-center">
              <img src={Icon} alt="icon" />
            </div>
            <div
              className="st-seperator-right wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            />
          </div>
        ) : (
          ""
        )}
        {subTitle ? (
          <div className="text-xl md:text-2xl 2xl:text-2xl text-gray-400 mx-4">
            {t(subTitle)}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="st-height-b40 st-height-lg-b40" />
    </div>
  );
};

export default SectionHeader;
