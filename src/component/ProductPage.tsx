import React from "react";
import HeaderNavbar from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import AboutProductPage from "./productPage/AboutProductPage";
import HomePageComponentPoster from "./commonComponent/HomePageComponentPoster";
import HomePageCodePoster from "./commonComponent/HomPageCodePoster";
import HomePageUIKitPoster from "./commonComponent/HomePageUIKitPoster";
import TopFeatureIntheApp from "./commonComponent/TopFeatureIntheApp";
import ModularKit from "./commonComponent/ModularKit";
import KeyFeatureComponent from "./commonComponent/keyFeature/KeyFeatureComponent";

const ProductPage = () => {
  return (
    <div className="product_page">
      <HeaderNavbar />
      <AboutProductPage />
      <KeyFeatureComponent />
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
