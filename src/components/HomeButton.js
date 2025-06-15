import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow-up icon from react-icons library

const HomeButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed md:bottom-10 md:right-10 right-5 bottom-6 transition-opacity duration-300 z-50  ${
        isVisible
          ? "opacity-100 pointer-events-auto cursor-pointer"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white bg-slate-700 p-2 rounded-md text-xl md:w-10 md:h-10 h-7 w-7" />
    </div>
  );
};

export default HomeButton;
