import React from "react";
import AboutWelcomePage from "./aboutPage/AboutWelcomePage";
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import MiniSection from "./aboutPage/MiniSection";
import ModularKit from "./commonComponent/ModularKit";
import AboutBodySection from "./aboutPage/AboutBodySection";
import Partners from "./aboutPage/Partners";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutWelcomePage />
      <MiniSection />
      <hr />
      <AboutBodySection />
      <hr />
      <Partners />
      <ModularKit />
      <Footer />
    </>
  );
};

export default AboutPage;
