import React from "react";
import { useCardStore } from "./Store";
import Servive1 from "../../assets/images/Vectors/s1.png";
import Servive2 from "../../assets/images/Vectors/s2.png";
import Servive3 from "../../assets/images/Vectors/s3.png";
import Servive4 from "../../assets/images/Vectors/s4.png";
const Card = ({ children, gradient, id }) => {
  const inViewCard = useCardStore((state) => state.inViewCard);
  return (
    <div
      className={`w-full h-full rounded-2xl absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity ${
        inViewCard === id ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export const ServiceOne = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <img className="w-full h-full object-cover rounded-2xl" src={Servive1} />
    </Card>
  );
};
export const ServiceTwo = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <img className="w-full h-full object-cover rounded-2xl" src={Servive2} />
    </Card>
  );
};
export const ServiceThird = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <img className="w-full h-full object-cover rounded-2xl" src={Servive3} />
    </Card>
  );
};
export const ServiceForth = ({ id }) => {
  return (
    <Card id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <img className="w-full h-full object-cover rounded-2xl" src={Servive4} />
    </Card>
  );
};
