import React, { useContext } from "react";
import "./ShowItem.css";
import CartContext from "../../../Cart/CartContext";

const ShowItem = () => {
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
          (item.id === obj.id
            ? {
                ...item,
                quantityAvailable: {
                  ...item.quantityAvailable,
                  Large: obj.quantityAvailable.Large,
                },
              }
            : item)
      );

      setDataList(updatedData);

      if (cartItems.length > 0) {
        const updatedCartItems = cartItems.map(
          (item) =>
            (item.id === obj.id
              ? {
                  ...item,
                  selected: { ...item.selected, Large: obj.selected.Large },
                  totalPrice: obj.totalPrice,
                }
              : item)
        );
        setCartItems(updatedCartItems);
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

  const handleMedium = (obj) => {
    if (obj.quantityAvailable.Medium > 0) {
      obj.quantityAvailable.Medium = obj.quantityAvailable.Medium - 1;
      obj.selected.Medium = obj.selected.Medium + 1;
      obj.totalPrice =
        (obj.selected.Large + obj.selected.Medium + obj.selected.Small) *
        parseInt(obj.price);

      const updatedData = dataList.map(
        (item) =>
          (item.id === obj.id
            ? {
                ...item,
                quantityAvailable: {
                  ...item.quantityAvailable,
                  Medium: obj.quantityAvailable.Medium,
                },
              }
            : item)
      );

      setDataList(updatedData);

      if (cartItems.length > 0) {
        const updatedCartItems = cartItems.map(
          (item) =>
            (item.id === obj.id
              ? {
                  ...item,
                  selected: { ...item.selected, Medium: obj.selected.Medium },
                  totalPrice: obj.totalPrice,
                }
              : item)
        );
        setCartItems(updatedCartItems);
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

  const handleSmall = (obj) => {
    if (obj.quantityAvailable.Small > 0) {
      obj.quantityAvailable.Small = obj.quantityAvailable.Small - 1;
      obj.selected.Small = obj.selected.Small + 1;
      obj.totalPrice =
        (obj.selected.Large + obj.selected.Medium + obj.selected.Small) *
        parseInt(obj.price);

      const updatedData = dataList.map(
        (item) =>
          (item.id === obj.id
            ? {
                ...item,
                quantityAvailable: {
                  ...item.quantityAvailable,
                  Small: obj.quantityAvailable.Small,
                },
              }
            : item)
      );

      setDataList(updatedData);

      if (cartItems.length > 0) {
        const updatedCartItems = cartItems.map(
          (item) =>
            (item.id === obj.id
              ? {
                  ...item,
                  selected: { ...item.selected, Small: obj.selected.Small },
                  totalPrice: obj.totalPrice,
                }
              : item)
        );
        setCartItems(updatedCartItems);
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

  return (
      <div className="items">
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
      </div>
  );
};

export default ShowItem;
