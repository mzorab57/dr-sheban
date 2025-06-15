import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import Marquee from "react-fast-marquee";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/2.jpg";
import Img3 from "../assets/images/3.jpeg";
import Img4 from "../assets/images/4.jpeg";
import Img5 from "../assets/images/5.jpeg";
import Img6 from "../assets/images/6.jpeg";
import Img7 from "../assets/images/7.jpeg";
import Img8 from "../assets/images/8.jpeg";
import Img9 from "../assets/images/9.jpeg";
import Img10 from "../assets/images/10.jpeg";
import Img11 from "../assets/images/11.jpeg";
import Img12 from "../assets/images/12.jpeg";
import Img13 from "../assets/images/13.jpeg";
import Img14 from "../assets/images/14.jpeg";
import Img15 from "../assets/images/15.jpeg";
import Img16 from "../assets/images/16.jpeg";
import Img17 from "../assets/images/17.jpg";
import Img18 from "../assets/images/18.jpg";
import Img19 from "../assets/images/19.jpg";
import Img20 from "../assets/images/20.jpg";
import Img21 from "../assets/images/21.jpg";
import Img22 from "../assets/images/22.jpg";



const HeroSection = () => {
  const AwardsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Awards = [
    { id: 1, image: Img3 },
    // { id: 2, image: Img2 },
    { id: 3, image: Img1 },
    // { id: 4, image: Img4 },
    // { id: 5, image: Img5 },
    // { id: 6, image: Img6 },
    // { id: 7, image: Img7 },
    // { id: 8, image: Img8 },
    { id: 9, image: Img9 },
    { id: 10, image: Img10 },
    // { id: 11, image: Img11 },
    // { id: 12, image: Img12 },
    { id: 13, image: Img13 },
    { id: 14, image: Img14 },
    { id: 15, image: Img15 },
    { id: 16, image: Img16 },
   // { id: 17, image: Img17 },
    //{ id: 18, image: Img18 },
    // { id: 19, image: Img19 },
    // { id: 20, image: Img20 },
    // { id: 21, image: Img21 },
    // { id: 22, image: Img22 },
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div
      id="/"
      className="w-full h-[100vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black overflow-hidden"
      style={{ fontFamily: "Fugaz" }}
    >
      <div className="relative flex justify-center items-center h-full">
        <div className="w-full absolute inset-0 flex justify-center items-center">
          <div className="lg:flex justify-center w-full lg:w-[50%] items-center h-[70%] hidden">
            <Spline scene="https://prod.spline.design/BwFh5Hvz7iWSSsmy/scene.splinecode" />
          </div>
          <div className="flex justify-center items-center lg:hidden">
            <Spline scene="https://prod.spline.design/gpFPx5FvpIYJOFba/scene.splinecode" />
          </div>
        </div>
        <div
          dir="ltr"
          className="absolute right-0 left-0 bottom-5 2xl:bottom-12"
        >
          <div ref={AwardsRef}>
            <Marquee
              direction="left"
              autoFill={true}
              pauseOnClick={true}
              speed={40}
            >
              {Awards.map((item, idx) => (
                <div className="  bg-black/40 p-3">
                  <div className="border-4 lg:border-y-8 border-x-0 border-dashed py-3">
                    <div
                      key={item.id}
                      className="text-white text-xl mx-2 p-2 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt={`Award ${item.id}`}
                        className="h-28 md:h-40 lg:w-full rounded-lg cursor-pointer opacity-70"
                        onClick={() => handleImageClick(idx)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          index={currentIndex}
          slides={Awards.map((award) => ({ src: award.image }))}
          open={isOpen}
          close={() => setIsOpen(false)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        />
      )}
    </div>
  );
};

export default HeroSection;
