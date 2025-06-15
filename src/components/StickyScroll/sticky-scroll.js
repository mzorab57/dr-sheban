import React from "react";
import Title from "./Title";
const StickyScroll = ({ content }) => {
  return (
    <div className=" w-full">
      <div className="lg:flex w-full items-start gap-20 ">
        <div className="w-full py-[40vh]">
          <ul>
            {content.map((item) => (
              <li key={item.id}>
                <Title id={item.id}>
                  {item.title}
                  <p className="text-xl ">{item.description}</p>
                </Title>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square  w-full rounded-2xl bg-gray-500 ">
            {content.map((item) => (
              <item.card key={item.id} id={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
