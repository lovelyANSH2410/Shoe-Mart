import React from "react";
import "./Body.css";
import AvailableShoes from "../Shoes/AvailableShoes";

const Body = () => {
  return (
    <div className="body-comp">
      <h2>Items</h2>
      <AvailableShoes />
    </div>
  );
};

export default Body;
