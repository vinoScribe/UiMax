import React from "react";
import HeaderNavbar from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import AboutProductPage from "./productPage/AboutProductPage";
import KeyFeature from "./commonComponent/KeyFeature";
import HomePageComponentPoster from "./commonComponent/HomePageComponentPoster";
import HomePageCodePoster from "./commonComponent/HomPageCodePoster";
import HomePageUIKitPoster from "./commonComponent/HomePageUIKitPoster";
import TopFeatureIntheApp from "./commonComponent/TopFeatureIntheApp";
import ModularKit from "./commonComponent/ModularKit";

const ProductPage = () => {
  return (
    <div className="product_page">
      <HeaderNavbar />
      <AboutProductPage />
      <KeyFeature />
      <hr />
      <HomePageUIKitPoster />
      <HomePageComponentPoster />
      <HomePageCodePoster />
      <hr />
      <TopFeatureIntheApp />
      <ModularKit />
      <Footer />
    </div>
  );
};

export default ProductPage;
