import React from "react";
import "./stylesheet/newsLetter.scss";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <div className="newsLetterHeadline">
        <h4>At your fingertips</h4>
        <h2>Newsletter </h2>
      </div>
      <div className="subscribeContainer">
        <div className="subscribeContent">
          <h4>Subscribe to our Newsletter</h4>
          <p>Available exclusivery on Figmaland</p>
        </div>
        <form action="">
          <input type="email" placeholder="Your Email" />
          <button type="button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
