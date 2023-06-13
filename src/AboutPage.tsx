import React from "react";
import AboutWelcomePage from "./component/AboutPage/AboutWelcomePage";
import Header from "./component/commonComponent/Header";
import Footer from "./component/commonComponent/Footer";
import MiniSection from "./component/AboutPage/MiniSection";
import ModularKit from "./component/commonComponent/ModularKit";
import AboutBodyComponent from "./component/AboutPage/AboutBodyComponent";
import Partners from "./component/AboutPage/Partners";

const aboutPage = () => {
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

export default aboutPage;
