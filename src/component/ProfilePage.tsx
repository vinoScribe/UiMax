import React from "react";
import Header from "./commonComponent/Header";
import AuthorInfo from "./profilePage/profile/AuthorInfo";
import BottomNavbar from "./profilePage/profile/BottomNavbar";
import ProfileBody from "./profilePage/bodyContent/ProfileBody";
import Footer from "./commonComponent/Footer";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <Header />
      <AuthorInfo />
      <BottomNavbar />
      <ProfileBody />
      <Footer />
    </div>
  );
}

export default ProfilePage;
