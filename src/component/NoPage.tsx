import React from "react";
import HeaderNavbar from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import ModularKit from "./commonComponent/ModularKit";

const NoPage = () => {
  function ErrorContent() {
    return (
      <div className="err_body">
        <p className="err_code">404</p>
        <h1>
          <span>Page</span> Not Found
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
        <div className="err_icon" />
      </div>
    );
  }
  return (
    <div className="error_page">
      <HeaderNavbar />
      <ErrorContent />
      <ModularKit />
      <Footer />
    </div>
  );
};

export default NoPage;
