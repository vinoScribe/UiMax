import React, { useState } from "react";
import "./stylesheet/contactUs.scss";

const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="contactUs_container">
      <form action="">
        <h3>Contact Us</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={user.name}
          onChange={(e) =>
            setUser((lastState) => {
              return { ...lastState, name: e.target.value };
            })
          }
        />
        <input
          type="email"
          placeholder="Your Email"
          value={user.email}
          onChange={(e) =>
            setUser((lastState) => {
              return { ...lastState, email: e.target.value };
            })
          }
        />
        <textarea placeholder="Your Message" />
        <button type="button">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
