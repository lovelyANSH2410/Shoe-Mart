import React, { useContext } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import Modal from "../components/UI/Modal";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <div className="cart">
        <p>Total Amount : {totalAmount}</p>
        <ul>
          {cartContext.items.map((item) => (
            <CartItem
              key={`${item.id}-${item.size}`}
              name={item.name}
              price={item.price}
              image={item.image}
              size={item.size}
              amount={item.amount}
            />
          ))}
        </ul>
        <div>
          {hasItems && <button className="cart-btn">Order</button>}
          <button className="cart-btn" onClick={props.onClose}>
            Close Cart
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
