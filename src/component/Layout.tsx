import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" />
          </li>
          <li>
            <Link to="/ProductPage" />
          </li>
          <li>
            <Link to="/PricingPage" />
          </li>
          <li>
            <Link to="/ContactPage" />
          </li>
          <li>
            <Link to="/ProfilePage" />
          </li>
          <li>
            <Link to="/BlogPage" />
          </li>
          <li>
            <Link to="/LoginPage" />
          </li>
          <li>
            <Link to="/SignupPage" />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
