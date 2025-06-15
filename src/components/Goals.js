import React from "react";

const Goals = ({ items }) => {
  return (
    <div className="w-full lg:flex justify-around items-start">
      {items &&
        items.map((item, idx) => (
          <div
            key={idx}
            className="lg:flex items-center p-4"
            {...item.animation}
          >
            <img
              src={item.url}
              alt={item.alt}
              className="rounded-md  object-cover mb-4"
            />
            <div className="text-white lg:px-5">
              <h3 className=" text-white text-2xl tracking-wide">
                {item.title}
              </h3>
              <p className="text-xl text-gray-400 py-5 tracking-wide">
                {item.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Goals;
