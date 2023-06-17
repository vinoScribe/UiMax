import React from "react";
import HeaderNavbar from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import ProductWelcomePage from "./productPage/ProductWelcomePage";
import HomePageComponentPoster from "./commonComponent/homePageKitPoster/HomePageComponentKit";
import HomePageCodePoster from "./commonComponent/homePageKitPoster/HomPageCodePoster";
import HomePageUiKitPoster from "./commonComponent/homePageKitPoster/HomePageUIKitPoster";
import TopFeatureIntheApp from "./commonComponent/TopFeatureIntheApp";
import ModularKit from "./commonComponent/ModularKit";
import KeyFeatureComponent from "./commonComponent/keyFeature/KeyFeatureComponent";

const ProductPage = () => {
  return (
    <>
      <HeaderNavbar />
      <ProductWelcomePage />
      <KeyFeatureComponent />
      <hr />
      <HomePageUiKitPoster />
      <HomePageComponentPoster />
      <HomePageCodePoster />
      <hr />
      <TopFeatureIntheApp />
      <ModularKit />
      <Footer />
    </>
  );
};

export default ProductPage;
