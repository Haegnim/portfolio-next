import React from "react";

const layout = () => {
  return (
    // <div style={{ display: "flex" }}>
    <>
      <div
        className="test"
        style={{ display: "inline-block", border: "5px solid " }}
      >
        layout
      </div>
      <div className="test" style={{ display: "inline", border: "5px solid " }}>
        layout
      </div>
      <div className="test" style={{ display: "block", border: "5px solid " }}>
        layout
      </div>
    </>
    // </div>
  );
};

export default layout;
