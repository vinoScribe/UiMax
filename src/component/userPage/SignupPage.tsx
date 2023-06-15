import React from "react";
import Header from "../commonComponent/Header";
import Footer from "../commonComponent/Footer";
import "./stylesheet/signupPage.scss";

const SignupPage = () => {
  return (
    <>
      <Header />
      <div className="signup_page main_header">
        <div className="signup_logo" />
        <div className="user_signup">
          <div className="signup_content">
            <h2>Register</h2>
            <p>
              Most calendars are designed for teams. Slate is designed for
              freelancers
            </p>
          </div>
          <div className="signup_input">
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

              <div className="agreed_conditions">
                <input type="checkbox" />
                <p>
                  I agree with all <span>conditions</span>
                </p>
              </div>
              <button type="button">Sign up</button>
            </form>
            <h6>
              Don't have an account? <span>Sign in here</span>
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
