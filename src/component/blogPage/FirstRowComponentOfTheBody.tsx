import React from "react";
import "./stylesheet/blogBody.scss";

const FirstRowComponentOfTheBody = ({ image }) => {
  return (
    <div className="first_rowOf_body">
      <img src={image} alt="blog poster" />
      <div className="about_blog_img_src">
        <h5>20 JUNE 2019</h5>
        <h3>Life Tips From Top Ten Adventure Travelers</h3>
        <p>Slate helps you see how many more days you need to work to reach.</p>
        <ul>
          <li>Google</li>
          <li>Trending</li>
          <li>New</li>
        </ul>
      </div>
    </div>
  );
};

export default FirstRowComponentOfTheBody;
