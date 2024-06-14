import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        scrollbarWidth: "none",
        borderWidth: "20px",
        borderStyle: "solid",
        borderImage: "linear-gradient(rgb(3, 211, 225), rgb(191, 26, 228)) 30",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
