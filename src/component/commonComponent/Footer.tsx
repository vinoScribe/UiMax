import React from "react";
import logo from "./commonComponentImage/logo.png";
import SocialMedia from "./SocialMedia";
import "./stylesheet/footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="companyLogo" height="45px" />
      <SocialMedia />
      <p>Just type what's on your mind and we'll </p>
    </footer>
  );
}

export default Footer;
