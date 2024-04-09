import React, { useContext } from "react";
import "./Header.css";
import CartContext from "../../Cart/CartContext";

const Header = (props) => {
  const { cartCount } = useContext(CartContext);

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
          Cart🛒{cartCount}
        </button>
      </ul>
    </div>
  );
};

export default Header;
