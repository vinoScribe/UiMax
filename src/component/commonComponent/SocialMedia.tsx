import React from "react";
import twitter from "./commonComponentImage/twitter.png";
import facebook from "./commonComponentImage/facebook.png";
import linkdln from "./commonComponentImage/linkdln.png";
import "./commonComponentStyle.scss";

const SocialMedia = () => {
  const imageSrc = [twitter, facebook, linkdln];
  return (
    <div className="social-media">
      {imageSrc.map((img, index) => {
        return <img src={img} key={index} alt="social media" />;
      })}
    </div>
  );
};

export default SocialMedia;
