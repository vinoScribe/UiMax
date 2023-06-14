import React from "react";
import "./aboutStyle.scss";

const ImageModuleCard = ({ image }) => {
  return (
    <div className="miniProfile">
      <div className="profile_photo">
        <img src={image} alt="people" />
      </div>
      <div className="profile_desc">
        <h3>Calvin Cooper</h3>
        <h5>Randall Warren</h5>
        <p>Slate helps you see how many more days to work</p>
      </div>
    </div>
  );
};

export default ImageModuleCard;
