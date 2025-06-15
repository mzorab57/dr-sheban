import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
const SliderItems = ({ items }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="text-white cursor-pointer hover:text-[#68edff] mx-2"
        onClick={onClick}
      >
        <FaArrowRight className="transition-colors duration-300 text-2xl" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="text-white cursor-pointer hover:text-[#68edff] mx-2"
        onClick={onClick}
      >
        <FaArrowLeft className="transition-colors duration-300 text-2xl" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    arrows: false, // Hide default arrows
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full py-8 container mx-auto relative text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-center text-2xl lg:text-4xl  my-6">{t("why_choose_us")}</h2>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div className="p-6 rounded-lg shadow-lg text-start border h-60">
              <div className="mb-4 text-blue-500">{item.icon && item.icon}</div>
              <h3 className="text-xl font-medium mb-2">{t(item.title)}</h3>
              <p className="text-gray-400 md:text-sm text-xs">{t(item.description)}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-full flex justify-center mt-6">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
};

export default SliderItems;
