import React, { useContext, useState } from "react";
import CartContext from "../../../Cart/CartContext";

const ShoeItem = (props) => {
  const cartContext = useContext(CartContext);

  const [counts, setCounts] = useState({
    Large: 10,
    Medium: 10,
    Small: 10
  });

  const addToCartHandler = (size) => {
    if (counts[size] > 0) {
      cartContext.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        image: props.image,
        size: size,
        amount: 1
      });
      setCounts(prevCounts => ({
        ...prevCounts,
        [size]: prevCounts[size] - 1
      }));
    }
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
          {props.size.map((size) => (
            <button
              className="add-btn"
              key={size}
              onClick={() => addToCartHandler(size)}
              disabled={counts[size] === 0}
            >
              Add {size} ({counts[size]})
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ShoeItem;
