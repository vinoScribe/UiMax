import React from "react";
import "./stylesheet/aboutContact.scss";

const ContactWelcomePage = () => {
  return (
    <div className="contactWelcomePage">
      <div className="contentOfContact">
        <h3>CONTACT</h3>
        <h1>
          We’re here <span>to help</span>
        </h1>
      </div>
      <p>
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
    </div>
  );
};

export default ContactWelcomePage;
