import React from "react";
import "./stylesheet/homePagePoster.scss";

const HomePageComponentPoster = () => {
  return (
    <div className="home_page_wallposter">
      <div id="home_page_component_poster" className="wallposter_home" />
      <div className="wallposter_content">
        <h4>COMPONENTS</h4>
        <h2>Toggle element based on the Card</h2>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div className="wallposter_home" id="home_page_component_poster_mob" />
    </div>
  );
};

export default HomePageComponentPoster;
