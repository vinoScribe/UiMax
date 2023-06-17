import React from "react";
import twitter from "./commonComponentImage/twitter.png";
import facebook from "./commonComponentImage/facebook.png";
import linkdln from "./commonComponentImage/linkdln.png";
import "./stylesheet/socialMedia.scss";

const imageSrc = [twitter, facebook, linkdln];

const SocialMedia = ({ image = imageSrc }) => {
  return (
    <div className="socialMedia">
      {image.map((img, index) => {
        return <img src={img} key={img[index]} alt="social media" />;
      })}
    </div>
  );
};

export default SocialMedia;
