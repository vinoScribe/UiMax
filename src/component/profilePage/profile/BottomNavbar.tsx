import React from "react";
import "./stylesheet/bottomNavBar.scss";

const profileMenuOnWelcomePage = ["Home", "Profile", "Community"];

const BottomNavbar = ({ menuBar = profileMenuOnWelcomePage }) => {
  return (
    <div className="bottomNavbar">
      <div className="footMenu">
        <ul>
          {menuBar.map((menu, index) => {
            return <li key={menu[index]}>{menu}</li>;
          })}
        </ul>
      </div>
      <div className="connectWithMe">
        <input type="button" value="Follow" />
        <input type="button" value="Message" />
      </div>
    </div>
  );
};

export default BottomNavbar;
