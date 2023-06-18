import React from "react";
import "./homePagePoster.scss";

const HomePageUiKitPoster = () => {
  return (
    <div className="homePageComponentKit">
      <div className="wallposterContent leftSideContent">
        <h4>UI KIT</h4>
        <h2>Headings, body and other common text elements</h2>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div id="homePageUiKitPoster" className="wallposter" />
    </div>
  );
};

export default HomePageUiKitPoster;
