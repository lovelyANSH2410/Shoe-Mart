import React, { useContext } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import Modal from "../components/UI/Modal";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            size={item.size}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <p>Total Amount : {totalAmount}</p>
      <p>{cartItems} </p>
      {hasItems && <button className="cart-btn">Order</button>}
      <button className="cart-btn" onClick={props.onClose}>
        Close Cart
      </button>
    </Modal>
  );
};

export default Cart;
