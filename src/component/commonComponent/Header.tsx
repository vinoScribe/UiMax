import { Link } from "react-router-dom";
import React from "react";
import "./stylesheet/header.scss";
import MobileMenuBar from "../mobileMenuBar/MobileMenuBar";

const Header = () => {
  const getMenubar = () => {};

  const headBarNavLink = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/ProductPage",
      label: "Product",
    },
    {
      path: "/PricingPage",
      label: "Pricing",
    },
    {
      path: "/ContactPage",
      label: "Contact",
    },
  ];

  return (
    <header>
      <div className="brandLogo" />
      <nav>
        <ul>
          <li>
            {headBarNavLink.map((menu) => {
              return <Link to={menu.path}>{menu.label}</Link>;
            })}
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
          <MobileMenuBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
