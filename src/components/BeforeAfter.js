import { React, useRef, useState } from "react";

const BeforeAfter = ({ before, after }) => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (e) => {
    slide(e.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  };

  return (
    <div className="px-4 ">
      <div
        ref={imageContainer}
        className="container w-full mx-auto  relative select-none rounded-xl "
      >
        <img
          src={after}
          alt="Before"
          className="pointer-events-none h-[300px] lg:h-[500px] w-full object-cover rounded-xl"
        />
        <img
          src={before}
          alt="After"
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          className="absolute inset-0 pointer-events-none h-[300px] lg:h-[500px] w-full object-cover rounded-xl"
        />
        <div
          style={{ left: `${imageRevealFraq * 100}%` }}
          className="absolute inset-y-0"
        >
          <div className="relative h-full">
            <div className="absolute inset-y-0 bg-white w-0.5 -ml-px">
              <div
                style={{ touchAction: "none" }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex justify-center items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 text-gray-500 rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Text for Before */}
        <div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
        >
          <span className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md absolute left-4 bottom-4">
            Before
          </span>
        </div>
        {/* Text for After */}
        <div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          style={{
            clipPath: `polygon(${
              imageRevealFraq * 100
            }% 0, 100% 0, 100% 100%, ${imageRevealFraq * 100}% 100%)`,
          }}
        >
          <span className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md absolute right-4 bottom-4">
            After
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
