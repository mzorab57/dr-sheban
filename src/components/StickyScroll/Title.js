import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useCardStore } from "./Store";

const Title = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setInViewCard = useCardStore((state) => state.setInViewCard);
  const inViewCard = useCardStore((state) => state.inViewCard);

  useEffect(() => {
    if (isInView) {
      setInViewCard(id);
    }
    if (!isInView && inViewCard === id) {
      setInViewCard(null);
    }
  }, [isInView, id, setInViewCard , inViewCard]);
  return (
    <div>
      <p
        ref={ref}
        className={`text-5xl py-16 transition-colors ${
          isInView ? "text-white" : "text-gray-700"
        }`}
      >
        {children}
      </p>
    </div>
  );
};

export default Title;
