import React from "react";
import Header from "./commonComponent/Header";
import AuthorInfo from "./profilePage/profile/AuthorInfo";
import BottomNavbar from "./profilePage/profile/BottomNavbar";
import BodyPage from "./profilePage/bodyContent/BodyContent";
import Footer from "./commonComponent/Footer";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profile_page">
      <Header />
      <AuthorInfo />
      <BottomNavbar />
      <BodyPage />
      <Footer />
    </div>
  );
}

export default ProfilePage;
