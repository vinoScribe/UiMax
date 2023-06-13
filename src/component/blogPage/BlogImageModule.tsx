import React from "react";
import FirstRowComponentOfTheBody from "./FirstRowComponentOfTheBody";
import "./blogStyle.scss";
import Picture from "./blogpage_img/Picture.png";
import Picture1 from "./blogpage_img/Picture-1.png";
import Picture2 from "./blogpage_img/Picture-2.png";
import Picture3 from "./blogpage_img/Picture-3.png";
import Picture4 from "./blogpage_img/Picture-4.png";
import Picture5 from "./blogpage_img/Picture-5.png";

const blogImageModule = () => {
  const firstRowImgList = [
    Picture,
    Picture1,
    Picture2,
    Picture3,
    Picture4,
    Picture5,
  ];

  return (
    <div className="blog_body_content">
      {firstRowImgList.map((img_src, index) => {
        return <FirstRowComponentOfTheBody key={index} image={img_src} />;
      })}
    </div>
  );
};

export default blogImageModule;
