import "../../../style.scss";
import React from "react";

function BottomNavbar() {
  return (
    <div className="bottom_navbar">
      <div className="foot_menu">
        <ul>
          <li className="home">Home</li>
          <li className="profile">Profile</li>
          <li className="community">Community</li>
        </ul>
      </div>
      <div className="connect-with-me">
        <input type="button" value="Follow" />
        <input type="button" value="Message" />
      </div>
    </div>
  );
}

export default BottomNavbar;
