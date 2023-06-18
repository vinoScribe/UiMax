import React from "react";
import Header from "../commonComponent/Header";
import "./stylesheet/homeMain.scss";

const HomeMainContent = () => {
  return (
    <div className="homeWelcomePage">
      <Header />
      <div className="homeContent">
        <h1>Lightning fast prototyping </h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <button type="button">Try For Free</button>
      </div>
      <div className="welcomePage_bg" />
    </div>
  );
};

export default HomeMainContent;
