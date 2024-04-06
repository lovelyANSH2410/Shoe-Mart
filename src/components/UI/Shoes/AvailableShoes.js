import React from "react";
import ShoeItem from "./ShoeItem";

const data = [
  {
    id: 1,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/379438/01/fnd/IND/fmt/png/Conduct-Pro-Unisex-Running-Shoes",
    name: "Puma",
    price: 100,
  },
  {
    id: 2,
    image:
      "https://images-cdn.ubuy.co.in/647d767a012f1b60c919c757-reebok-classic-leather-men-039-s.jpg",
    name: "Reebok",
    price: 120,
  },
  {
    id: 3,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29abad8d7ae64654b001adb90136819e_9366/RUNMAGICA_SHOES_Blue_EY2972_01_standard.jpg",
    name: "Adidas",
    price: 150,
  },
  {
    id: 4,
    image:
      "https://images-cdn.ubuy.co.in/634d0e2d194e7440c3499ac8-nike-air-jordan-1-high-og-unc-university.jpg",
    name: "Nike",
    price: 200,
  },
];

const AvailableShoes = () => {
  const shoeList = data.map((item) => (
    <ShoeItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
    />
  ));

  return <div>{shoeList}</div>;
};

export default AvailableShoes;
