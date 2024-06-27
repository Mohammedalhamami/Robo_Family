import React from "react";

export const RobotsCounter = ({ count }) => {
  return (
    <div className="db  pv3">
      <p className="robot-counter tc f2">
        Robots Counter: <span>{count}</span>
      </p>
    </div>
  );
};
