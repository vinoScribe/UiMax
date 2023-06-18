import React from "react";
import HeaderNavbar from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import PriceWelcomePage from "./pricingPage/PriceWelcomePage";
import ModularKit from "./commonComponent/ModularKit";
import PlanInfo from "./pricingPage/PlanInfo";
import FrequentlyAskedQiestion from "./pricingPage/FrequentlyAskedQuestion";
import Review from "./pricingPage/Review";
import KeyFeatureComponent from "./commonComponent/keyFeature/KeyFeatureComponent";

const PricingPage = () => {
  return (
    <>
      <HeaderNavbar />
      <PriceWelcomePage />
      <PlanInfo />
      <KeyFeatureComponent />
      <FrequentlyAskedQiestion />
      <Review />
      <ModularKit />
      <Footer />
    </>
  );
};

export default PricingPage;
