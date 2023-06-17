import { Link } from "react-router-dom";
import React from "react";
import "./stylesheet/header.scss";
import MobileMenuBar from "../mobileMenuBar/MobileMenuBar";

const Header = () => {
  const getMenubar = () => {};

  return (
    <header>
      <div className="brandLogo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ProductPage">Product</Link>
          </li>
          <li>
            <Link to="/PricingPage">Pricing</Link>
          </li>
          <li>
            <Link to="/ContactPage">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="inputBar">
        <input type="email" placeholder="Your Email" id="emailId" />
        <input type="button" value="Subscribe" id="subscribeBtn" />
      </div>

      <div className="mobileVersion">
        <Link to="/LoginPage">
          <button type="button" id="mobileLogin">
            Login
          </button>
        </Link>

        <div className="menuBarOnMobile" onClick={getMenubar}>
          {<MobileMenuBar />}
        </div>
      </div>
    </header>
  );
};

export default Header;
