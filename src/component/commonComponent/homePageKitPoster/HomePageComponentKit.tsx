import React from "react";
import "./homePagePoster.scss";

const HomePageComponentKit = () => {
  return (
    <div className="homePageComponentKit">
      <div id="homePageComponent_bg" className="wallposter" />
      <div className="wallposterContent">
        <h4>COMPONENTS</h4>
        <h2>Toggle element based on the Card</h2>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div className="wallposter" id="homePageComponentMob_bg" />
    </div>
  );
};

export default HomePageComponentKit;
