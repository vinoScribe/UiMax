import React from "react";
import { Link } from "react-router-dom";
import "./mobileMenu.scss";

const MobileMenuBar = () => {
  return (
    <div className="mobileMenuBar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"./ProductPage"}>Product</Link>
        </li>
        <li>
          <Link to={"/PricingPage"}>Pricing</Link>
        </li>
        <li>
          <Link to={"/ContactPage"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuBar;
