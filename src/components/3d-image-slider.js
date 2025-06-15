import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DirectionAwareHover } from "./direction-aware-hover";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = (props) => {
  const { images } = props; // Assuming you pass the isRTL prop based on the language
  const [isRTL, setIsRTL] = useState(false);
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  useEffect(() => {
    if (language !== "en") {
      setIsRTL(true);
    } else {
      setIsRTL(false);
    }
  }, [language]);
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

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
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    rtl: isRTL, // This will set the slider direction based on the isRTL prop
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((img, idx) => {
          const handleNavigation = (work) => {
            navigate(`/Works/${work}`, {
              state: {
                before: img.beforeImage,
                after: img.afterImage,
                title: t(img.title),
                subTitle: t(img.subTitle),
                videoId: img.videoId,
              },
            });
          };
          return (
            <div
              key={idx}
              className={`transition-transform duration-300 ease-in-out ${
                idx === imageIndex
                  ? "scale-110 opacity-100"
                  : "scale-90 opacity-50"
              }`}
            >
              <div
                className="cursor-pointer mx-9 md:mx-0"
                onClick={() => handleNavigation(img.title)}
              >
                <DirectionAwareHover imageUrl={img.afterImage}>
                  <p className="font-bold text-xl">{t(img.title)}</p>
                  <p className="font-normal text-sm">{t(img.subTitle)}</p>
                </DirectionAwareHover>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
