import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Languages, navItems } from "../constants/data";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Logo from "../assets/images/Logo White.png";
import DropDown from "../components/DropDown";

const NavLinks = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });
  const location = useLocation();
  const path = location.pathname;
  const { t } = useTranslation();
  const scrollToSection = (sectionId) => {
    if (sectionId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    // Close the menu after scrolling
  };
  return (
    <>
      <div className=" right-0 left-0 top-0 z-50 container mx-auto">
        <nav className="p-5">
          <div className="flex justify-between items-center w-full">
            <div className="mx-10">
              <img src={Logo} className="w-7 h-7 lg:w-20 lg:h-20" alt="Logo" />
            </div>
            <div className="flex justify-between items-center gap-3">
              {navItems.map((nav, idx) =>
                path !== "/" ? (
                  <NavLink
                    key={idx}
                    to={"/"}
                    className="text-white  rounded-xl  px-7 py-2 transition-colors duration-300 hover:text-primary ease-in-out"
                  >
                    {t(nav.name)}
                  </NavLink>
                ) : (
                  <NavLink
                    key={idx}
                    className="text-white  rounded-xl  px-7 py-2 transition-colors duration-300 hover:text-primary ease-in-out"
                    onClick={() => scrollToSection(nav.sectionName)}
                  >
                    {t(nav.name)}
                  </NavLink>
                )
              )}
            </div>
            <div className="mx-10">
              <DropDown />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

const Navbar = () => {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const textVars = {
    initial: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: navItems.length * 0.09 + 0.3, // Ensure this animates after the links
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={` px-7 fixed right-0 left-0 top-0 z-50 transition-all ease-in-out duration-200 ${
          isScrolled ? "bg-black/20 bg-opacity-60 backdrop-blur " : ""
        }`}
      >
        <div className="hidden w-full lg:flex items-center justify-between">
          <NavLinks />
        </div>
        {/*Mobile menu*/}
        <div className=" flex w-full  justify-between items-center lg:hidden text-white ">
          <h1 className="text-white">
            <img src={Logo} className="w-14 h-14 " />
          </h1>
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black bg-opacity-30 backdrop-blur-md p-10 z-50"
          >
            <div className="flex h-full flex-col">
              <button
                className={`absolute  text-white top-12 ${
                  language === "en" ? " right-8" : "left-8"
                }`}
                onClick={toggleNavbar}
              >
                <X />
              </button>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navItems.map((link, index) => (
                  <div className="overflow-hidden" key={index}>
                    <MobileNavLink
                      key={index}
                      title={link.name}
                      href={"/"}
                      sectionId={link.sectionName}
                      setIsOpen={setIsOpen}
                    />
                  </div>
                ))}
              </motion.div>
              <motion.div
                className="flex bottom-8 text-center"
                variants={textVars}
                initial="initial"
                animate="open"
                exit="exit"
              >
                <ul className="flex justify-center items-center w-full mb-16">
                  {Languages.map((language) => (
                    <li
                      key={language.id}
                      onClick={() => handleChangeLanguage(language.lang)}
                      className="p-2"
                    >
                      <img
                        src={language.logo}
                        alt={language.name}
                        className="rounded-full w-8 h-8 mr-3 flex"
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href, sectionId, setIsOpen }) => {
  const location = useLocation();
  const path = location.pathname;
  const { t } = useTranslation();
  const scrollToSection = (sectionId) => {
    if (sectionId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);

      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-white"
    >
      {path !== "/" ? (
        <NavLink to={href}>{t(title)}</NavLink>
      ) : (
        <NavLink onClick={() => scrollToSection(sectionId)}>{t(title)}</NavLink>
      )}
    </motion.div>
  );
};
