import React, { useEffect, useRef, useState } from "react";
import BeforeAfter from "../components/BeforeAfter";
import Image from "../assets/images/background.JPG";
import { Link, useLocation } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import SpringModal from "../components/Modal";
import PrimaryButton from "../components/PrimaryButton";
import Appointment from "../components/Appointment";
import { appointmentInfo } from "../constants/data";
import { useTranslation } from "react-i18next";

const OurWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  const location = useLocation();
  const imageData = location.state || {
    title: "Default Title",
    subTitle: "Default Subtitle",
    before: "/path/to/defaultBeforeImage.jpg",
    after: "/path/to/defaultAfterImage.jpg",
    videoId:"-WFobqKlcfY?si=zOsKrT7QnSZBiL6J"
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const iframeSrc =
    `https://www.youtube.com/embed/${imageData.videoId}`;
  const videoId = iframeSrc.split("/embed/")[1].split("?")[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handleVideoClick = (video) => {
    setIsOpen(true);
    setSelectedVideo(video);
  };

  const appointmentRef = useRef(null);

  const scrollToVideo = () => {
    if (appointmentRef.current) {
      appointmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="w-full">
        <div className="bg-black relative w-full">
          <img
            src={Image}
            alt="background"
            className="w-full object-cover lg:h-[700px] 2xl:h-[800px] opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="md:w-1/2  text-center text-white py-6 md:text-2xl  tracking-wider">{t("our_works_subtitle")}</h1>
            <PrimaryButton text={t("get_appointment")} onClick={scrollToVideo} />
          </div>
          <div className="absolute right-0 left-0 bottom-0 lg:text-xl">
            <div className="text-white flex items-center lg:container mx-auto py-5">
              <Link
                to={"/"}
                className="cursor-pointer hover:text-primary px-2 transition-colors duration-200 ease-in-out"
              >
                {t("home")}
              </Link>
              &gt; {t("our_works")} &gt; {t(imageData.title)}
            </div>
          </div>
        </div>
        <div className="lg:container mx-4 lg:mx-auto my-10">
          <h1 className="text-white text-4xl tracking-wide">
            {t(imageData.title)}
          </h1>
          <p className="text-xl text-gray-400 py-5 tracking-wide">
            {t(imageData.subTitle)}
          </p>
        </div>
      </div>
      <BeforeAfter before={imageData.before} after={imageData.after} />

      {/* Video */}
      <div className="container mx-auto mt-10">
        <div className="text-white mx-4">
          <h1 className="text-white text-4xl tracking-wide">
            {t(imageData.title)}
          </h1>
          <p className="text-xl text-gray-400 py-5 tracking-wide">
            {t(imageData.subTitle)}
          </p>
          <div
            className="mx-2 relative h-[300px] lg:h-[500px] bg-black cursor-pointer rounded-lg"
            onClick={handleVideoClick}
          >
            <img
              className="w-full h-full object-cover opacity-70 rounded-lg"
              src={thumbnailUrl}
              alt="Video Thumbnail"
            />
            <div className="absolute inset-0 flex justify-center items-center rounded-lg">
              <FaPlayCircle size="100px" className="text-white opacity-75" />
            </div>
          </div>
        </div>
      </div>
      <div ref={appointmentRef}>
        <Appointment
          title={t("schedule_your_appointment")}
          description={t("schedule_your_appointment_Subtitle")}
          items={appointmentInfo}
        />
      </div>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        video={`${videoId}`}
      />
    </div>
  );
};

export default OurWorks;
