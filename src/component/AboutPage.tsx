import React from "react";
import AboutWelcomePage from "./AboutPage/AboutWelcomePage";
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import MiniSection from "./AboutPage/MiniSection";
import ModularKit from "./commonComponent/ModularKit";
import AboutBodyComponent from "./AboutPage/AboutBodyComponent";
import Partners from "./AboutPage/Partners";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutWelcomePage />
      <MiniSection />
      <hr />
      <AboutBodyComponent />
      <hr />
      <Partners />
      <ModularKit />
      <Footer />
    </>
  );
};

export default AboutPage;
