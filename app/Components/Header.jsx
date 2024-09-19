import React from "react";

const Header = () => {
  return (
    <>
      <div className="header w-full flex justify-center items-center">
        <div className="Logo min-w-fit h-28 flex flex-col justify-center items-center gap-2">
          <div className="flex items-center gap-5">
            <img src="logo.png" className="h-24" />
            <h1 className="text-5xl">My Travel List</h1>
            <img src="bags.png" className="h-24" />
          </div>
          <div>
            <h2 className="pr-4">Feel Stress Free About Your Luggage Items</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
