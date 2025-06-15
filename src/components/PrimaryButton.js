import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PrimaryButton = ({ text, onClick }) => {
  const { t } = useTranslation();

  return (
    <motion.button
      onClick={onClick}
      className="px-6 py-3 rounded-md relative radial-gradient"
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5, // Reduced delay for faster repetition
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        duration: 1, // Adjusted duration for faster transition
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        {t(text)}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default PrimaryButton;
