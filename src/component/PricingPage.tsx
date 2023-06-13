import React from "react";
import HeaderNavbar from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import AboutPricePage from "./pricingPage/AboutPricePage";
import ModularKit from "./commonComponent/ModularKit";
import PlanInfo from "./pricingPage/PlanInfo";
import KeyFeature from "./commonComponent/KeyFeature";
import FrequentlyAskedQiestion from "./pricingPage/FrequentlyAskedQuestion";
import Review from "./pricingPage/Review";

const PricingPage = () => {
  return (
    <>
      <HeaderNavbar />
      <AboutPricePage />
      <PlanInfo />
      <KeyFeature />
      <FrequentlyAskedQiestion />
      <Review />
      <ModularKit />
      <Footer />
    </>
  );
};

export default PricingPage;
