import React from "react";
import "./aboutStyle.scss";
import Partner1 from "./aboutPageImg/partner1.png";
import Partner2 from "./aboutPageImg/partner2.png";
import Partner3 from "./aboutPageImg/partner3.png";
import Partner4 from "./aboutPageImg/partner4.png";
import Partner5 from "./aboutPageImg/partner5.png";
import Partner6 from "./aboutPageImg/partner6.png";

const partnerList = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
];

const Partners = () => {
  return (
    <div className="official_partner">
      <div className="content">
        <h2>Partners</h2>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div className="official_partner_logo">
        {partnerList.map((imgSrc, index) => {
          return <img src={imgSrc} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Partners;
