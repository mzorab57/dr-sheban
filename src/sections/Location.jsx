import React from "react";
import SectionHeader from "../components/SectionHeader";

const Location = () => {

  return (
    <div
      id="Location"
      className="w-full h-full  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
    >
      <div className="container mx-auto">
        <div className="flex justify-center text-white">
          <SectionHeader
            title={"location"}
            subTitle="location_subtitle"
          />
        </div>
        <div
          className="lg:w-full mx-2 border rounded-xl"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sKota%20New%20York%2C%20New%20York%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1639286790548!5m2!1sid!2sid"
            height="350"
            width="100%"
            loading="lazy"
            className="rounded-xl"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.551817048977!2d44.032609599999994!3d36.201780299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40072351fcefae9d%3A0xeb1be8815bad3f5f!2sDr%20Sheban%20farhad!5e0!3m2!1sen!2siq!4v1723818468434!5m2!1sen!2siq"
            height="350"
            width="100%"
            allowfullscreen=""
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
