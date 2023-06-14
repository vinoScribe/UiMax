import React from "react";
import "./homeStyle.scss";

const NewsLetter = () => {
  return (
    <div className="news_letter_homepage">
      <div className="news_letter_headline">
        <h4>At your fingertips</h4>
        <h2>Newsletter </h2>
      </div>
      <div className="isInterested">
        <div className="subscribed_content">
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
