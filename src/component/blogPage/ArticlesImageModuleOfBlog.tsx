import React from "react";
import BodyContentOfBlog from "./BodyContentOfBlog";
import "./stylesheet/blogBody.scss";
import Picture from "./blogpage_img/Picture.png";
import Picture1 from "./blogpage_img/Picture-1.png";
import Picture2 from "./blogpage_img/Picture-2.png";
import Picture3 from "./blogpage_img/Picture-3.png";
import Picture4 from "./blogpage_img/Picture-4.png";
import Picture5 from "./blogpage_img/Picture-5.png";

const articlePoster = [
  Picture,
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
];

const ArticlesImageModuleOfBlog = ({ article_bg = articlePoster }) => {
  return (
    <div className="blogBodyContent">
      {article_bg.map((imgsrc) => {
        return <BodyContentOfBlog image={imgsrc} />;
      })}
    </div>
  );
};

export default ArticlesImageModuleOfBlog;
