import React from "react";
import "./priceStyle.scss";

const FrequentlyAskedQiestion = () => {
  return (
    <div className="FAQ">
      <h2>FAQ</h2>
      <div className="left_side_FAQ">
        <ul>
          <li>Design with real data</li>
          <li>Start working faster today</li>
          <li>Just type what's on your mind and we'll get you there.</li>
          <li>Just type what's on your mind and we'll get you there.</li>
        </ul>
      </div>
      <div className="right_side_FAQ">
        <ul>
          <li>Just type what's on your mind and we'll get you there.</li>
          <li>Rename files and more. All without opening a single tab.</li>
          <li>Design with real data</li>
          <li>The best products start with Sketch</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default FrequentlyAskedQiestion;
