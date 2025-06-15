import React, { useEffect, useRef, useState } from "react";
import Background from "../assets/images/AboutBg.JPG";
import { Link } from "react-router-dom";
import Cavities from "../assets/images/cavities.png";
import Smile from "../assets/images/smile.png";
import Winner from "../assets/images/winner.png";
import Premolar from "../assets/images/premolar.png";
import CountUp from "react-countup";
import Goals from "../components/Goals";
import Mission from "../assets/images/mission.jpg";
import Vission from "../assets/images/vision.jpg";
import MarqueItems from "../components/MarqueItems";
import PrimaryButton from "../components/PrimaryButton";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isRTL, setIsRTL] = useState(false);
  const { i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    if (language !== "en") {
      setIsRTL(true);
    } else {
      setIsRTL(false);
    }
  }, [language]);

  const AchivmentData = [
    {
      id: 1,
      number: 15,
      description: t("years_of_experience"),
      icon: Premolar,
    },
    {
      id: 2,
      number: 100,
      description: t("cavities_fixed"),
      icon: Cavities,
    },
    {
      id: 3,
      number: 201,
      description: t("well_smile_faces"),
      icon: Smile,
    },
    {
      id: 4,
      number: 46,
      description: t("awards_held"),
      icon: Winner,
    },
  ];

  const GoalsData = [
    {
      id: 1,
      title: t("our_mission"),
      description:t("our_mission_subtitle"),
      url: Mission,
      animation: { "data-aos": "fade-right", "data-aos-duration": "1000" },
    },
    {
      id: 2,
      title: t("our_vision"),
      description:t("our_vision_subtitle"),
      url: Vission,
      animation: { "data-aos": "fade-left", "data-aos-duration": "1000" },
    },
  ];

  const Awards = [
    { id: 1, title: "Erbil Award" },
    { id: 2, title: "Sulaimaniah Award" },
    { id: 3, title: "Iraq Award" },
    { id: 4, title: "World Award" },
  ];

  const AwardsRef = useRef(null);

  const scrollToVideo = () => {
    if (AwardsRef.current) {
      AwardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="w-full bg-black relative">
        <img
          src={Background}
          alt=""
          className="w-full object-cover lg:h-[700px] 2xl:h-[800px] opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white py-6 text-4xl tracking-wider">Dr. Sheban</h1>
          <PrimaryButton text={t("awards")} onClick={scrollToVideo} />
        </div>
        <div className="absolute right-0 left-0 bottom-2 lg:bottom-5 lg:text-xl lg:container lg:mx-auto mx-4">
          <div className="text-white flex items-center">
            <Link
              to={"/"}
              className="cursor-pointer hover:text-blue-500 px-2 transition-colors duration-200 ease-in-out"
            >
              {t("home")}
            </Link>
            &gt; {t("about")}
          </div>
        </div>
      </div>
      <div className="lg:container lg:mx-auto mx-4">
        <div className="text-start py-10">
          <h1 className="text-white text-4xl tracking-wide">{t("about_title")}</h1>
          <p className="text-xl text-gray-400 py-5 tracking-wide leading-10">
          {t("about_subtitle")}
          </p>
        </div>
        {/* Goals */}
        <Goals items={GoalsData} />
        {/* Achievement */}
        <div className="w-full py-16 flex flex-col justify-center items-center gap-10 text-white text-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
          <h1 className="text-white text-3xl md:text-4xl tracking-wide my-10">{t("our_achievements")}</h1>
          <div className="flex flex-wrap justify-center items-center gap-20">
            {AchivmentData &&
              AchivmentData.map((achievement, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-6xl mb-4">
                    <img
                      src={achievement.icon}
                      alt={achievement.icon}
                      className="w-20 h-20 text-white"
                    />
                  </div>
                  <div className="text-2xl font-bold">
                    <CountUp end={achievement.number} duration={3} />
                  </div>
                  <div>{achievement.description}</div>
                </div>
              ))}
          </div>
        </div>
        {/* Awards */}
        <div ref={AwardsRef} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          <MarqueItems items={Awards} direction={isRTL ? "rtl" : "ltr"} />
        </div>
      </div>
    </div>
  );
};

export default About;
