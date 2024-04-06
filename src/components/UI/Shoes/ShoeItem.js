import React, { useContext, useState } from "react";
import CartContext from "../../../Cart/CartContext";

const ShoeItem = (props) => {
  const cartContext = useContext(CartContext);

  const [large, setLarge] = useState(10);
  const [medium, setMedium] = useState(10);
  const [small, setSmall] = useState(10);

  const largeDataHandler = () => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      size: "Large",
      amount: 1,
    });
    if (large > 0) setLarge(large - 1);
    else return;
  };
  const mediumDataHandler = () => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      size: "Medium",
      amount: 1,
    });
    if (medium > 0) setMedium(medium - 1);
    else return;
  };
  const smallDataHandler = () => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      size: "Small",
      amount: 1,
    });
    if (small > 0) setSmall(small - 1);
    else return;
  };

  return (
    <div>
      <ul className="items">
        <div className="item" key={props.id}>
          <p>
            {props.name} - ${props.price}
          </p>
          <img className="img" src={props.image} alt="logo" />
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
      </ul>
    </div>
  );
};

export default ShoeItem;
