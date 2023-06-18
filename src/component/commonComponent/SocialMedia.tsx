import React from "react";
import twitter from "./commonComponentImage/twitter.png";
import facebook from "./commonComponentImage/facebook.png";
import linkdln from "./commonComponentImage/linkdln.png";
import "./stylesheet/socialMedia.scss";

const socialMediaList = [
  { id: 1, socialMedia_bg: twitter },
  { id: 2, socialMedia_bg: facebook },
  { id: 3, socialMedia_bg: linkdln },
];

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      {socialMediaList.map((details) => {
        return (
          <img
            src={details.socialMedia_bg}
            key={details.id}
            alt="social media"
          />
        );
      })}
    </div>
  );
};

export default SocialMedia;
