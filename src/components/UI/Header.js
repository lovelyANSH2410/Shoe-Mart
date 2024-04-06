import React, { useContext } from "react";
import "./Header.css";
import CartContext from "../../Cart/CartContext";

const Header = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const handleClick = () => {
    props.onShowCart();
  };

  return (
    <div className="header">
      <h1 className="title">👟SHOE MART👟</h1>
      <ul className="options">
        <li className="header-option">Home🏠</li>
        <li className="header-option">About Us👤</li>
        <li className="header-option">Contact us📞</li>
        <button className="header-option" onClick={handleClick}>
          Cart🛒{numberOfCartItems}
        </button>
      </ul>
    </div>
  );
};

export default Header;
