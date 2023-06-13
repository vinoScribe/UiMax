import React from "react";
import Footer from "./commonComponent/Footer";
import TopFeatureIntheApp from "./commonComponent/TopFeatureIntheApp";
import HomePageUiKitPoster from "./commonComponent/HomePageUIKitPoster";
import HomePageComponentPoster from "./commonComponent/HomePageComponentPoster";
import HomePageCodePoster from "./commonComponent/HomPageCodePoster";
import ModularKit from "./commonComponent/ModularKit";
import NewsLetter from "./homePage/NewsLetter";
import HomeMainContent from "./homePage/HomeMainContent";

const HomePage = () => {
  return (
    <>
      <HomeMainContent />
      <TopFeatureIntheApp />
      <HomePageUiKitPoster />
      <HomePageComponentPoster />
      <HomePageCodePoster />
      <NewsLetter />
      <ModularKit />
      <Footer />
    </>
  );
};

export default HomePage;
