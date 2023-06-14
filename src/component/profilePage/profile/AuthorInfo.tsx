import React from "react";
import "./profileAuthorStyle.scss";

function AuthorInfo() {
  return (
    <section>
      <img src="./images/profilePic.png" alt="" />
      <div className="author_info">
        <h1>Silver Duck</h1>
        <p>Virgin Islands (British)</p>
      </div>
      <p className="author_desc">
        When you add work to your Slate calendar we automatically calculate
        useful insights about the financial health of your business.
      </p>
    </section>
  );
}

export default AuthorInfo;
