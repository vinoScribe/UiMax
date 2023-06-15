import React from "react";
import Header from "../commonComponent/Header";
import Footer from "../commonComponent/Footer";
import "./stylesheet/loginStyle.scss";
import { Link } from "react-router-dom";
import SignupPage from "./SignupPage";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="login_page main_header">
        <div className="user_login">
          <div className="login_content">
            <h2>Login</h2>
            <p>
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="login_input">
            <form action="">
              <input type="text" placeholder="Your Email" />
              <input type="password" placeholder="Password" />
              <button type="button">Connection</button>
            </form>
            <h6>
              Don't have an account?{" "}
              <span id="signup">
                <Link to={"/SignupPage"}>Sign up here</Link>
              </span>
            </h6>
          </div>
        </div>
        <div className="login_logo" />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
