import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import StickyScroll from "../components/StickyScroll";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { MobileContent, content } from "../constants/data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../components/SecondaryButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OurServices = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute text-white cursor-pointer z-10 top-[50%] right-0 hover:text-[#68edff]"
        onClick={onClick}
      >
        <FaArrowRight className="transition-colors duration-300 " />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute text-white cursor-pointer z-10 top-[50%] left-0 hover:text-[#68edff]"
        onClick={onClick}
      >
        <FaArrowLeft className="transition-colors duration-300" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div
      id="Services"
      className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <div className="flex justify-center text-white">
        <SectionHeader
          title={"our_services"}
          subTitle={"our_services_subtitle"}
        />
      </div>
      {/*Sticky scroll */}
      <div className="hidden lg:block  py-20">
        <StickyScroll content={content} />
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden mx-4">
        <Slider {...settings} className="">
          {MobileContent.map((item, idx) => {
            const handleNavigation = (serv) => {
              navigate(`/Services/${serv}`, {
                state: {
                  title: t(item.title),
                  description: t(item.description),
                  types: item.types,
                },
              });
            };
            return (
              <div
                key={idx}
                className={`transition-transform duration-300 ease-in-out ${
                  idx === imageIndex ? " opacity-100" : "scale-90 opacity-50"
                }`}
              >
                <div className="cursor-pointer mx-4 flex flex-col flex-wrap items-center text-center">
                  <img src={item.card} alt={item.card} />
                  <h1 className="text-white text-3xl ">{t(item.title)}</h1>
                  <SecondaryButton
                    onClick={() => handleNavigation(item.title)}
                    text={t("read_more")}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default OurServices;
