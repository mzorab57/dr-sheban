import React, { useState } from "react";
import { Languages } from "../constants/data";
import { useTranslation } from "react-i18next";

const DropDown = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLanguageSelect = (language) => {
    handleChangeLanguage(language.lang);
    selectLanguage(language);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex items-center font-medium px-6 py-2 text-white gap-4 rounded-xl transition-colors duration-300 hover:bg-gray-200  hover:text-black"
      >
        <img
          src={selectedLanguage.logo}
          alt={selectedLanguage.name}
          className="rounded-full w-6 h-6"
        />
        {t(selectedLanguage.name)}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            {Languages.map((language) => (
              <li
                key={language.id}
                onClick={() => handleLanguageSelect(language)}
                className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedLanguage.name === language.name ? "bg-gray-200" : ""
                }`}
              >
                <img
                  src={language.logo}
                  alt={language.name}
                  className="rounded-full w-6 h-6 mx-3"
                />
                {t(language.name)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
