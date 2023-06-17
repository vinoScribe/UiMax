import React from "react";
import HeaderNavbar from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import ModularKit from "./commonComponent/ModularKit";
import "./noPage.scss";

const NoPage = () => {
  const ErrorContent = () => {
    return (
      <div className="errBodyContent">
        <p className="errCode">404</p>
        <h1>
          <span>Page</span> Not Found
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
        <div className="errIcon" />
      </div>
    );
  };
  return (
    <>
      <HeaderNavbar />
      <ErrorContent />
      <ModularKit />
      <Footer />
    </>
  );
};

export default NoPage;
