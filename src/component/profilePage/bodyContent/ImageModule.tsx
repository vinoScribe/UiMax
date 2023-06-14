import React from "react";
import CardComponents from "./CardComponents";
import feature_card1 from "./feature_card1.png";
import feature_card2 from "./feature_card2.png";
import feature_card3 from "./feature_card3.png";
import feature_card4 from "./feature_card4.png";
import feature_card5 from "./feature_card5.png";
import feature_card6 from "./feature_card6.png";
import "./authorBodyStyle.scss";

const imageList = [
  feature_card1,
  feature_card2,
  feature_card3,
  feature_card4,
  feature_card5,
  feature_card6,
];

const ImageModule = () => {
  return (
    <div id="firstRow">
      {imageList.map((img, index) => {
        return <CardComponents key={index} image={img} />;
      })}
    </div>
  );
};

export default ImageModule;
