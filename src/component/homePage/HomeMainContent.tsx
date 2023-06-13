import React from "react";
import Header from "../commonComponent/Header";
import "./homeStyle.scss";

const homeMainContent = () => {
  return (
    <div className="home_main">
      <Header />
      <div className="about_home_main_content">
        <h1>Lightning fast prototyping </h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <button type="button">Try For Free</button>
      </div>
      <div className="main_img" />
    </div>
  );
};

export default homeMainContent;
