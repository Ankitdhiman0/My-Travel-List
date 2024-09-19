import React from "react";

const ItemsList = ({ items, togglePacked }) => {
  function Item({ item }) {
    return (
      <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105 mb-4">
        <span
          style={
            item.packed ? { textDecoration: "line-through", color: "gray" } : {}
          }
          className="text-lg font-bold text-black "
        >
          {item.quantity} {item.description}
        </span>
        <button
          onClick={() => togglePacked(item.id)}
          className="ml-4 text-red-600 hover:text-red-800 transition-colors"
        >
          ❌
        </button>
      </div>
    );
  }

  return (
    <div className="list max-w-6xl mx-auto my-5 p-4 ">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
