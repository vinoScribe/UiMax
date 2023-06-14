import React from "react";
import "./aboutStyle.scss";
import PeopleResponse1 from "./aboutPageImg/Rectangle 7.png";
import PeopleResponse2 from "./aboutPageImg/Rectangle 7-1.png";
import PeopleResponse3 from "./aboutPageImg/Rectangle 7-2.png";
import PeopleResponse4 from "./aboutPageImg/Rectangle 7-3.png";
import PeopleResponse5 from "./aboutPageImg/Rectangle 7-4.png";
import PeopleResponse6 from "./aboutPageImg/Rectangle 7-5.png";
import ImageModuleCard from "./ImageModuleCard";

const ImageModuleAbout = () => {
  const people = [
    PeopleResponse1,
    PeopleResponse2,
    PeopleResponse3,
    PeopleResponse4,
    PeopleResponse5,
    PeopleResponse6,
  ];

  return (
    <div className="peopleResponseAbout">
      {people.map((imgSrc, index) => {
        return <ImageModuleCard key={index} image={imgSrc} />;
      })}
    </div>
  );
};

export default ImageModuleAbout;
