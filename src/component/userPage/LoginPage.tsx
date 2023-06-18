import React from "react";
import Header from "../commonComponent/Header";
import Footer from "../commonComponent/Footer";
import "./stylesheet/loginStyle.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="loginPage">
        <div className="userLogin">
          <div className="loginContent">
            <h2>Login</h2>
            <p>
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="loginInput">
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
        <div className="login_bg" />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
