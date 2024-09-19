import React from "react";

const Form = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  submitHandler,
  clearItems, // Receive clearItems as a prop
}) => {
  return (
    <div className="flex justify-center items-center pr-7">
      <form
        className="form min-w-fit rounded-lg flex justify-evenly items-center gap-5 bg-yellow-300"
        onSubmit={submitHandler}
      >
        <div>
          <span className="text-white text-lg font-bold">Quantity : </span>
          <select
            className="h-8 w-14 rounded text-black text-1xl font-bold"
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
          className="h-8 w-56 bg-gray-900 rounded px-3"
          type="text"
          placeholder="Enter Items"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-400 h-8 w-20 rounded text-1xl font-bold"
          type="submit"
        >
          ADD
        </button>
        <button
          className="bg-red-400 h-8 w-20 rounded text-1xl font-bold"
          type="button" // Prevents form submission
          onClick={clearItems} // Calls clearItems function
        >
          CLEAR
        </button>
      </form>
    </div>
  );
};

export default Form;
