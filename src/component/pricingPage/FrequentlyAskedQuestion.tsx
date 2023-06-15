import React from "react";
import "./stylesheet/frequentlyAskedQuest.scss";

const FrequentlyAskedQiestion = () => {
  const left_Question = [
    "Design with real data",
    "Start working faster today",
    "Just type what's on your mind and we'll get you there.",
    "Just type what's on your mind and we'll get you there.",
    "Just type what's on your mind and we'll get you there.",
    "Rename files and more. All without opening a single tab.",
    "Design with real data",
    "The best products start with Sketch",
  ];

  return (
    <div className="FAQ">
      <h2>FAQ</h2>
      <div className="left_side_FAQ">
        <ul>
          {left_Question.map((question, index) => {
            return <li key={index}>{question}</li>;
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default FrequentlyAskedQiestion;
