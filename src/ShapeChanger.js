import React, { useRef } from "react";
import "./App.css";

export const ShapeChanger = () => {
  const MyBox = useRef(null);

  const handleShapeChange = () => {
    MyBox.current.style.borderRadius = "50%";
  };

  return (
    <div className="Wrapper">
      <div className="box" ref={MyBox}></div>
      <button onClick={handleShapeChange}>Change shape</button>
    </div>
  );
};

export default ShapeChanger;
