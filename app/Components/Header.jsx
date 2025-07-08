import React from "react";

const Header = () => {
  return (
    <>
      <div className="header w-full flex justify-center items-center p-4">
        <div className="Logo w-full max-w-5xl flex flex-col justify-center items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            <img src="logo.png" className="h-20 sm:h-24" alt="logo" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">
              My Travel List
            </h1>
            <img src="bags.png" className="h-20 sm:h-24" alt="bags" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base md:text-lg text-center px-2">
              Feel Stress Free About Your Luggage Items
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
