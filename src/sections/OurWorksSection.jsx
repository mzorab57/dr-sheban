import React from "react";
import SectionHeader from "../components/SectionHeader";
import ImageSlider from "../components/3d-image-slider";
import { works } from "../constants/data";
import { useTranslation } from "react-i18next";
const OurWorksSection = () => {
  const { t } = useTranslation();
  return (
    <div
      id="Works"
      className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <div className="flex flex-col items-center justify-center ">
        <div>
          <SectionHeader
            title={t("our_works")}
            subTitle={t("our_works_subtitle")}
          />
        </div>
        <div
       
          className="w-full lg:container lg:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <ImageSlider images={works} />
        </div>
      </div>
    </div>
  );
};

export default OurWorksSection;
