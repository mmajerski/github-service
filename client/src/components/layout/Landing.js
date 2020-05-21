import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TypeEffect from "./TypeEffect";
import GlowingInfo from "./GlowingInfo";
import { visitCounter } from "./../../actions/visit";

const Landing = ({ visitCounter, isAuthenticated, timesVisited }) => {
  useEffect(() => {
    visitCounter();
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <TypeEffect />
          <p className="lead">
            Join now and create developer profile, get help from other
            developers by sharing posts and comments
          </p>
          <div className="buttons">
            <Link
              to="/register"
              className="btn btn-primary landing-page-button"
            >
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light landing-page-button">
              Login
            </Link>
            <GlowingInfo timesVisited={timesVisited} />
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  timesVisited: PropTypes.number
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  timesVisited: state.visit.timesVisited
});

export default connect(mapStateToProps, { visitCounter })(Landing);
