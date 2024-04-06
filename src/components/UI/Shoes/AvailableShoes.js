import React, { useState } from "react";
import ShoeItem from "./ShoeItem";
import AddNewItem from "./AddNewItem";

const AvailableShoes = () => {
  const [dataList, setDataList] = useState([
    {
      id: 1,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/379438/01/fnd/IND/fmt/png/Conduct-Pro-Unisex-Running-Shoes",
      name: "Puma",
      size: ["Large", "Medium", "Small"],
      price: 100,
    },
    {
      id: 2,
      image:
        "https://www.shutterstock.com/image-photo/vintage-red-shoes-on-white-260nw-92008067.jpg",
      name: "Reebok",
      size: ["Large", "Medium", "Small"],
      price: 120,
    },
    {
      id: 3,
      image:
        "https://www.shutterstock.com/image-photo/pair-pink-sport-shoes-on-260nw-228691018.jpg",
      name: "Adidas",
      size: ["Large", "Medium", "Small"],
      price: 150,
    },
    {
      id: 4,
      image:
        "https://images-cdn.ubuy.co.in/634d0e2d194e7440c3499ac8-nike-air-jordan-1-high-og-unc-university.jpg",
      name: "Nike",
      size: ["Large", "Medium", "Small"],
      price: 200,
    },
  ]);

  return (
    <div>
      <AddNewItem dataList={dataList} setDataList={setDataList} />
      {dataList.map((item) => (
        <ShoeItem
          key={item.id}
          id={item.id}
          name={item.name}
          size={item.size}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default AvailableShoes;
