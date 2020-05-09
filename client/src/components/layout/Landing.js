import React from "react";
import Typical from "react-typical";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {/* <h1 className="x-large">Github Community</h1> */}
          <Typical
            className="x-large"
            steps={[
              "Hi Developers!",
              2000,
              "Welcome to",
              2000,
              "Github Community",
              4000
            ]}
            loop={Infinity}
            wrapper="h1"
          />
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" className="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
