import React from "react";

const Status = ({ totalItems, packedItems }) => {
  const completionPercentage =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="status flex flex-col justify-center items-center w-full pt-4 pb-6 px-2 bg-yellow-100">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center">
        You have {totalItems} items on your list and you packed {packedItems}{" "}
        items
      </h3>
      <h3 className="text-sm sm:text-base md:text-lg text-gray-700 text-center mt-1">
        ({completionPercentage}% Completed)
      </h3>
    </footer>
  );
};

export default Status;
