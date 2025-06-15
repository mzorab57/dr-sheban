import React from "react";
import SectionHeader from "../components/SectionHeader";
import DrSheban from "../assets/images/sheban2.JPG";
import SliderItems from "../components/SliderItems";
import { WhyChooseUsData } from "../constants/data";
import SecondaryButton from "../components/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();



  const navigate = useNavigate();
  const HandleNavigation = () => {
    navigate("/About");
  };
  return (
    <div
      id="About"
      className="h-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <div className="container mx-auto">
        <div className="flex justify-center text-white">
          <SectionHeader title={"about"} subTitle="about_title" />
        </div>
        <div className="mx-4">
          <div className="lg:grid grid-cols-2">
            <div
              className="col-span-1 block lg:hidden bg-black"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={DrSheban}
                alt=""
                className="object-cover rounded-xl h-[500px] lg:h-[700px] w-full opacity-65"
              />
            </div>
            <div
              className="col-span-1 flex flex-col justify-center mx-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1 className="text-white text-4xl tracking-wide py-5">
                Dr.Sheban
              </h1>
              <p className="text-xl text-gray-400  tracking-wide lg:leading-10 pb-4">
                {t("about_subtitle")}
              </p>
              <SecondaryButton text={"read_more"} onClick={HandleNavigation} />
            </div>
            <div
              className="col-span-1 hidden lg:block bg-black"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={DrSheban}
                alt=""
                className="object-cover rounded-xl h-[500px] lg:h-[700px] w-full opacity-60"
              />
            </div>
          </div>
          <div>
            <SliderItems items={WhyChooseUsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
