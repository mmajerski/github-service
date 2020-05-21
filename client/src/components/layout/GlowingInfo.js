import React from "react";

const GlowingInfo = ({ timesVisited }) => {
  return (
    <div className="glowing-container">
      <div className="text glowing-animation">
        <span className="lead">T</span>
        <span className="lead">o</span>
        <span className="lead">t</span>
        <span className="lead">a</span>
        <span className="lead">l</span>
        <span className="lead"> </span>
        <span className="lead">v</span>
        <span className="lead">i</span>
        <span className="lead">e</span>
        <span className="lead">w</span>
        <span className="lead">s</span>
        <span className="lead">:</span>
      </div>
      <div className="data glowing-animation">
        <span className="lead"> {timesVisited}</span>
      </div>
    </div>
  );
};

export default GlowingInfo;
