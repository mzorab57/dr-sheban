import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading"; // Assuming you have a Loading component
import OurServices from "../sections/OurServices";
import OurWorksSection from "../sections/OurWorksSection";
import AboutUs from "../sections/AboutUs";
import Location from "../sections/Location";
import Contact from "../sections/Contact";
import HomeButton from "../components/HomeButton";
import ScrollSpy from "../components/ScrollSpy";
import OurWorks from "../pages/OurWorks";
import Services from "../pages/Services";
import About from "../pages/About";
import NotFound from "../pages/404";

const HeroSection = React.lazy(() => import("../sections/HeroSection"));

const sections = [
  { id: "/", name: "Home" },
  { id: "Services", name: "Our Services" },
  { id: "Works", name: "Our Works" },
  { id: "About", name: "About Us" },
  { id: "Location", name: "Location" },
  { id: "Contact", name: "Contact Us" },
];

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="h-full">
            <Suspense fallback={<Loading />}>
              <HeroSection />
            </Suspense>
            <OurServices />
            <OurWorksSection />
            <AboutUs />
            <Location />
            <Contact />
            <HomeButton />
            <ScrollSpy sections={sections} />
          </div>
        }
      />
      <Route path="/Works/:id" element={<OurWorks />} />
      <Route path="/Services/:id" element={<Services />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
