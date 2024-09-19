import React from "react";

const Status = ({ totalItems, packedItems }) => {
  const completionPercentage =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="status flex flex-col justify-center items-center w-full pt-4">
      <h3>
        You Have {totalItems} Items On Your List And You Packed {packedItems}{" "}
        Items
      </h3>
      <h3>({completionPercentage}% Completed)</h3>
    </footer>
  );
};

export default Status;
