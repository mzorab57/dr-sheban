import React from "react";
import { HoverEffect } from "../components/HoverEffect";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      title: t("phone"),
      description: "07504494818, 07844494818",
      icon: <FaPhoneVolume className="text-white" />,
      animation: { "data-aos": "fade-right", "data-aos-duration": "1000" },
    },
    {
      title: t("email"),
      description: "sheban500@gmail.com",
      icon: <MdEmail className="text-white" />,
      animation: { "data-aos": "fade-left", "data-aos-duration": "1000" },
      link: "mailto:sheban500@gmail.com",
    },
    {
      title: t("address"),
      description: t("address_subtitle"),
      icon: <FaMapLocationDot className="text-white " />,
      animation: { "data-aos": "fade-right", "data-aos-duration": "1000" },
      link: "https://www.google.com/maps/dir//Dr+Sheban+farhad+near+aya+supermarket+Erbil,+Erbil+Governorate+44001/@36.2017803,44.0326096,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40072351fcefae9d:0xeb1be8815bad3f5f!2m2!1d44.0326096!2d36.2017803?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: t("open_hours"),
      description: t("open_hours_subtitle"),
      icon: <MdAccessTime className="text-white" />,
      animation: { "data-aos": "fade-left", "data-aos-duration": "1000" },
    },
  ];

  return (
    <div
      id="Contact"
      className="h-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <div className="container mx-auto">
        <div className="flex justify-center text-white">
          <SectionHeader title="contact_us" subTitle="contact_us_subtitle" />
        </div>
      </div>

      <div className="container mx-auto ">
        <HoverEffect items={contactInfo} />
      </div>
    </div>
  );
};

export default Contact;
