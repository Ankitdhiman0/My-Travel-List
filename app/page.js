"use client";
import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import ItemsList from "./Components/ItemsList";
import Status from "./Components/Status";

const Page = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    setItems((prevItems) => [...prevItems, newItem]);

    setDescription("");
    setQuantity(1);
  }

  const togglePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearItems = () => {
    setItems([]); // This should clear the items
    setDescription(""); // Clear the description input
    setQuantity(1); // Reset quantity to 1
  };

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <>
      <Header />
      <Form
        description={description}
        setDescription={setDescription}
        setQuantity={setQuantity}
        quantity={quantity}
        submitHandler={submitHandler}
        clearItems={clearItems} // Pass the clear function
      />
      <ItemsList items={items} togglePacked={togglePacked} />
      <Status totalItems={totalItems} packedItems={packedItems} />
    </>
  );
};

export default Page;
