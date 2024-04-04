import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <h1 className="title">Shoe Mart</h1>
        <ul className="options">
          <li className="header-option">Home</li>
          <li className="header-option">About Us</li>
          <li className="header-option">Contact us</li>
          <li className="header-option">Cart</li>
        </ul>
    </div>
  );
};

export default Header;
