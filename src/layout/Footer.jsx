import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div dir="ltr"
      className={`w-full ${
        path === "/"
          ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
          : "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
      } `}
    >
      <div className="w-full mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center md:justify-between pt-16 pb-4 px-4">
        <span className=" text-white text-center text-xl">
          ©{new Date().getFullYear()}{" "}
          <a target="_blank" href="/" className="hover:underline">
            Keylimit™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="md:flex md:flex-row flex-col items-center  mt-3 text-sm font-medium text-white sm:mt-0">
          <div className="flex">
            <li
              key={"instagram"}
              className="flex justify-center items-center cursor-pointer"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/dr.sheban_farhad?igsh=NjJtZGhyeGoyYWg2`}
                className={`hover:bg-pink-400 mr-2 transition-all duration-200 ease-in-out rounded-lg flex justify-center items-center h-10 w-10`}
              >
                <FaInstagram className="text-2xl" />
              </a>
            </li>

            <li
              key={"facebook"}
              className="flex justify-center items-center cursor-pointer"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.facebook.com/dr.sheban?mibextid=ZbWKwL`}
                className={`hover:bg-blue-600 mr-2 transition-all duration-200 ease-in-out rounded-lg flex justify-center items-center h-10 w-10`}
              >
                <FaFacebookF className="text-2xl" />
              </a>
            </li>

            <li
              key={"youtube"}
              className="flex justify-center items-center cursor-pointer"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://youtube.com/@dr.shebanfarhad?si=XUPIw6otCtNB9Bm1`}
                className={`hover:bg-red-500 mr-2 transition-all duration-200 ease-in-out rounded-lg flex justify-center items-center h-10 w-10`}
              >
                <FaYoutube className="text-2xl" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
