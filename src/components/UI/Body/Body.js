import React, { useState } from "react";
import "./Body.css";

const Body = (props) => {
  const cartItems = props.items;
  const [large, setLarge] = useState(10);
  const [medium, setMedium] = useState(10);
  const [small, setSmall] = useState(10);

  const largeDataHandler = () => {
    if (large > 0) setLarge(large - 1);
    else return;
  };
  const mediumDataHandler = () => {
    if (medium > 0) setMedium(medium - 1);
    else return;
  };
  const smallDataHandler = () => {
    if (small > 0) setSmall(small - 1);
    else return;
  };

  return (
    <div>
      <h2>Items</h2>
      <ul className="items">
        {cartItems.map((item) => {
          return (
            <div className="item" key={item.id}>
              <p>
                {item.name} - ${item.price}
              </p>
              <img className="img" src={item.image} alt="logo" />
              <p>100% Cotton</p>
              <button className="add-btn" onClick={largeDataHandler}>
                Add Large ({large})
              </button>
              <button className="add-btn" onClick={mediumDataHandler}>
                Add Medium ({medium})
              </button>
              <button className="add-btn" onClick={smallDataHandler}>
                Add Small ({small})
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Body;
