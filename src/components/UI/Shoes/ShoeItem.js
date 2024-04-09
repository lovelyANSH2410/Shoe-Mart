import React, { useContext } from "react";
import "./ShoeItem.css";
import CartContext from "../../../Cart/CartContext";

const ShoeItem = () => {
  const {
    dataList,
    setDataList,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
  } = useContext(CartContext);

  const handleLarge = (obj) => {
    if (obj.quantityAvailable.Large > 0) {
      obj.quantityAvailable.Large = obj.quantityAvailable.Large - 1;
      obj.selected.Large = obj.selected.Large + 1;
      obj.totalPrice =
        (obj.selected.Large + obj.selected.Medium + obj.selected.Small) *
        parseInt(obj.price);

      const updatedData = dataList.map(
        (item) =>
          (item.id = obj.id
            ? {
                ...item,
                quantityAvailable: {
                  ...item.quantityAvailable,
                  Large: obj.quantityAvailable.Large,
                },
              }
            : item)
      );

      setDataList([...dataList, updatedData]);

      if (cartItems.length > 0) {
        const updatedCartItems = cartItems.map(
          (item) =>
            (item.id = obj.id
              ? {
                  ...item,
                  selected: { ...item.selected, size: obj.selected.Large },
                  totalPrice: obj.totalPrice,
                }
              : item)
        );
        setCartItems([...cartItems, updatedCartItems]);
      }

      let flag = false;

      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems.length === 0) {
          setCartItems([obj]);
          flag = true;
          break;
        }

        if (cartItems[i].id === obj.id) {
          flag = true;
        }
      }

      if (flag === false) {
        setCartItems([...cartItems, obj]);
      }
      setCartCount(cartCount + 1);
    }
  };

  const handleMedium = () => {};
  const handleSmall = () => {};

  return (
    <div>
      <ul className="items">
        {dataList.length === 0 ? (
          <h2>Sorry No products are available at the moment!</h2>
        ) : (
          dataList.map((item, index) => {
            item.id = index;

            return (
              <li className="item-card" key={index}>
                <span>{item.name}</span>
                <img className="img" src={item.image} alt="logo" />
                <span>Price: ${item.price}</span>
                <span>
                  <button
                    className="input-btn"
                    onClick={(e) => handleLarge(item)}
                  >
                    L {item.quantityAvailable.Large}
                  </button>
                  <button
                    className="input-btn"
                    onClick={(e) => handleMedium(item)}
                  >
                    M {item.quantityAvailable.Medium}
                  </button>
                  <button
                    className="input-btn"
                    onClick={(e) => handleSmall(item)}
                  >
                    S {item.quantityAvailable.Small}
                  </button>
                </span>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ShoeItem;
