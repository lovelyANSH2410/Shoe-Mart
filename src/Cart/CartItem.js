import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li className="cart-list">
      <div className="cart-item">
        <div>Product : {props.name}</div>
        <div>Price : {props.price}</div>
        <div>Count : {props.amount}</div>
        <div>Size : {props.size}</div>
      </div>
    </li>
  );
};

export default CartItem;
