import React from "react";
import "./stylesheet/authorInfo.scss";

const AuthorInfo = () => {
  return (
    <div className="authorDetails">
      <img src="./images/profilePic.png" alt="author photo" />
      <div className="authorInfo">
        <h1>Silver Duck</h1>
        <p>Virgin Islands (British)</p>
      </div>
      <p className="authorDesc">
        When you add work to your Slate calendar we automatically calculate
        useful insights about the financial health of your business.
      </p>
    </div>
  );
};

export default AuthorInfo;
