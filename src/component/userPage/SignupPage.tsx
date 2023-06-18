import React from "react";
import Header from "../commonComponent/Header";
import Footer from "../commonComponent/Footer";
import "./stylesheet/signupPage.scss";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <Header />
      <div className="signupPage">
        <div className="signup_bg" />
        <div className="userSignup">
          <div className="signupContent">
            <h2>Register</h2>
            <p>
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="signupInput">
            <form action="">
              <input
                type="text"
                placeholder="Your Email"
                className="userAuth"
              />
              <input
                type="password"
                placeholder="Password"
                className="userAuth"
              />

              <div className="agreedConditions">
                <input type="checkbox" />
                <p>
                  I agree with all <span>conditions</span>
                </p>
              </div>
              <button type="button">Sign up</button>
            </form>
            <h6>
              Already have an account?{" "}
              <span id="signin">
                <Link to="/LoginPage">Sign in here</Link>
              </span>
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
