import React from "react";
import "./stylesheet/frequentlyAskedQuest.scss";

const FrequentlyAskedQiestion = () => {
  const listOfQuestions = [
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
      <div className="questionContainer">
        <ul>
          {listOfQuestions.map((question) => {
            return <li>{question}</li>;
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default FrequentlyAskedQiestion;
