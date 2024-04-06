import React, { useState } from "react";
import './AddNewItem.css'

const AddNewItem = ({ dataList, setDataList }) => {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemData, setNewItemData] = useState({
    image: "",
    name: "",
    price: 0
  });

  const handleToggle = () => {
    setIsAddingItem(!isAddingItem);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItemData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddItem = () => {
    // Add a new item to the dataList array
    const newItem = {
      id: dataList.length + 1, // Generate a unique ID for the new item
      image: newItemData.image,
      name: newItemData.name,
      size: ['Large', 'Medium', 'Small'], // Assuming default sizes
      price: parseFloat(newItemData.price)
    };
    setDataList([...dataList, newItem]);
    setIsAddingItem(false); // Close the toggle after adding the item
    // Reset newItemData
    setNewItemData({
      image: "",
      name: "",
      price: 0
    });
  };

  return (
    <div >
      <button className="toggle-btn" onClick={handleToggle}>
        {isAddingItem ? "Cancel" : "Add New Item"}
      </button>
      {isAddingItem && (
        <div className="input-form">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newItemData.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newItemData.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newItemData.price}
            onChange={handleInputChange}
          />
          <button className="input-btn" onClick={handleAddItem}>Add Item</button>
        </div>
      )}
    </div>
  );
};

export default AddNewItem;
