import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./component/HomePage";
import ProductPage from "./component/ProductPage";
import PricingPage from "./component/PricingPage";
import NoPage from "./component/NoPage";
import ContactPage from "./component/ContactPage";
import Layout from "./component/Layout";
import ProfilePage from "./component/ProfilePage";
import BlogPage from "./component/BlogPage";
import LoginPage from "./component/userPage/LoginPage";
import SignupPage from "./component/userPage/SignupPage";
import AboutPage from "./component/AboutPage";
import MobileMenuBar from "./component/mobileMenuBar/MobileMenuBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="ProductPage" element={<ProductPage />} />
            <Route path="PricingPage" element={<PricingPage />} />
            <Route path="ContactPage" element={<ContactPage />} />
            <Route path="ProfilePage" element={<ProfilePage />} />
            <Route path="BlogPage" element={<BlogPage />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="SignupPage" element={<SignupPage />} />
            <Route path="AboutPage" element={<AboutPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
