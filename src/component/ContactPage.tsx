import React from "react";
import Footer from "./commonComponent/Footer";
import HeaderNavbar from "./commonComponent/Header";
import AboutContactPage from "./contactPage/AboutContactPage";
import WallposterContact from "./contactPage/WallposterContact";
import GetInTouch from "./contactPage/GetInTouch";
import ContactInfo from "./contactPage/ContactInfo";
import ContactUs from "./contactPage/ContactUs";
import ModularKit from "./commonComponent/ModularKit";

const ContactPage = () => {
  return (
    <>
      <HeaderNavbar />
      <AboutContactPage />
      <WallposterContact />
      <GetInTouch />
      <ContactInfo />
      <ContactUs />
      <ModularKit />
      <Footer />
    </>
  );
};

export default ContactPage;
