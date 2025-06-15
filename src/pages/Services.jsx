import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Background from "../assets/images/background.JPG";
import { useTranslation } from "react-i18next";
import Types from "../components/Types";
import BeforeAfter from "../components/BeforeAfter";
import After from "../assets/images/work_af_1.JPG";
import Before from "../assets/images/work_bf_1.JPG";
import PriceTable from "../components/PriceTable";
import PrimaryButton from "../components/PrimaryButton";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { i18n,t } = useTranslation();
  const language = i18n.language;
  const location = useLocation();
  const service = location.state;

  const PriceRef = useRef(null);

  const scrollToVideo = () => {
    if (PriceRef.current) {
      PriceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      {/* Header */}
      <div className="w-full bg-black relative">
        <img
          src={Background}
          alt=""
          className="w-full object-cover lg:h-[700px] 2xl:h-[800px] opacity-30"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-center ">
          <h1 className="md:w-1/2 text-center text-white py-6 px-2 md:text-2xl text-sm tracking-wider">{t("our_services_subtitle")}</h1>
          <PrimaryButton text={"Dr.Sheban"} onClick={scrollToVideo} />
        </div>
        <div
          className={`absolute right-0 left-0 bottom-2 lg:bottom-5 lg:text-xl text-sm lg:container lg:mx-auto mx-4`}
        >
          <div className="text-white flex items-center ">
            <Link
              to={"/"}    
              className="cursor-pointer hover:text-blue-500 px-2 transition-colors duration-200 ease-in-out"
            >
              {t("home")}
            </Link>
            &gt; {t("services")} &gt; {t(service.title)}
          </div>
        </div>
      </div>
      <div className="mx-4 lg:container lg:mx-auto">
        <div className="my-10 text-start">
          <h1 className="text-white text-4xl tracking-wide">{t(service.title)}</h1>
          <p className="text-xl text-gray-400 py-5 tracking-wide">
            {t(service.description)}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        {/* <BeforeAfter before={Before} after={After} /> */}
        <Types types={service.types} />
        {/* <div ref={PriceRef}>
          <PriceTable title={"pricing_Plans"} />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
