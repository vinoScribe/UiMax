import { Link } from "react-router-dom";
import React from "react";
import "./stylesheet/header.scss";

const Header = () => {
  return (
    <header>
      <div className="official-log" />
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

      <div className="input-bar">
        <input type="email" placeholder="Your Email" id="email_id" />
        <input type="button" value="Subscribe" id="subscribe_btn" />
      </div>

      <div className="mobile_version">
        <button type="button">Login</button>
        <div className="menu_bar_logo" />
      </div>
    </header>
  );
};

export default Header;
