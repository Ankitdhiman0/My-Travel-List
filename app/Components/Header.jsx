import React from "react";

const Header = () => {
  return (
    <>
      <div className="header w-full h-32 flex justify-center items-center">
        <div className="Logo w-1/2 h-28 flex flex-col justify-center items-center">
          <div className="flex items-center gap-5">
            <img src="logo.png" className="h-24" />
            <h1 className="text-5xl">My Travel List</h1>
            <img src="bags.png" className="h-24" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
