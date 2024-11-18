import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantitiy, setQuanttiy] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !quantitiy) return null;
    const newItem = {
      name,
      quantitiy: Number(quantitiy),
    };
    setItems((prevItem) => {
      return [...prevItem, newItem];
    });
    setName("");
    setQuanttiy("");
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter your items"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="enter quantity"
          onChange={(e) => setQuanttiy(e.target.value)}
        />
        <button type="submit">Add itsm</button>
      </form>
      <ul>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <li>Product Name:{item.name}</li>
              <li>Product Quantity:{item.quantitiy}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
