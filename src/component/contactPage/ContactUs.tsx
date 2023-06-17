import React, { useState } from "react";
import "./stylesheet/contactUs.scss";

const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const updateInputField = (propertyName) => (e) => {
    setUser((initialState) => {
      return { ...initialState, [propertyName]: e.target.value };
    });
  };
  const updateUserName = updateInputField("name");
  const updateUserEmail = updateInputField("email");

  return (
    <div className="contactUsContainer">
      <form action="">
        <h3>Contact Us</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={user.name}
          onChange={updateUserName}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={user.email}
          onChange={updateUserEmail}
        />
        <textarea placeholder="Your Message" />
        <button type="button">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
