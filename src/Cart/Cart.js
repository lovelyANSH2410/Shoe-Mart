import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import Modal from "../components/UI/Modal";

const Cart = (props) => {
  const { cartItems, bill, setBill } = useContext(CartContext);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (acc, curr) => acc + curr.totalPrice,
      0
    );
    setBill(totalPrice);
    console.log(bill);
  });

  return (
    <Modal onClose={props.onClose}>
      <CartItem />
    </Modal>
  );
};

export default Cart;
