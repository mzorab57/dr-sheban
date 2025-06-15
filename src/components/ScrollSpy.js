import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ScrollSpy = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalScrollHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-2 h-full  hidden lg:block">
      <div
        className={`absolute top-2 ${
          language === "en" ? "lg:left-3 2xl:left-32" : "lg:right-left-3 2xl:right-32 "
        } h-full w-1  rounded-full`}
      >
        <div
          className="bg-primary  rounded-full"
          style={{
            height: `${scrollProgress}%`,
            opacity: (scrollProgress / 100) * 0.6 + 0.1,
            transition: "height 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollSpy;
