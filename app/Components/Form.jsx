import React from "react";

const Form = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  submitHandler,
  clearItems,
}) => {
  return (
    <div className="flex justify-center items-center p-4">
      <form
        className="form w-full max-w-4xl rounded-lg flex flex-wrap justify-evenly items-center gap-4 bg-yellow-300 p-4"
        onSubmit={submitHandler}
      >
        <div className="flex items-center gap-2">
          <span className="text-white text-base sm:text-lg font-bold">
            Quantity :
          </span>
          <select
            className="h-8 w-16 sm:w-20 rounded text-black text-base font-bold"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option className="text-black bg-cyan-200" value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <input
          className="h-8 w-full sm:w-56 bg-gray-900 rounded px-3 text-white"
          type="text"
          placeholder="Enter Items"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-400 h-8 w-24 rounded text-base font-bold"
          type="submit"
        >
          ADD
        </button>
        <button
          className="bg-red-400 h-8 w-24 rounded text-base font-bold"
          type="button"
          onClick={clearItems}
        >
          CLEAR
        </button>
      </form>
    </div>
  );
};

export default Form;
