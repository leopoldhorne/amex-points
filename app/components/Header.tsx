import React from "react";

const Header = () => {
  return (
    <header className="bg-amber-50 w-screen h-screen max-sm:h-fit">
      <div className=" mx-auto max-w-6xl flex justify-center items-center h-full w-full max-sm:flex-col max-sm:max-w-[80%]">
        <div className="flex flex-col items-center gap-1 justify-center">
          <h1 className="title text-5xl font-bold text-center max-sm:mt-10">
            AMEX Points Visualizer
          </h1>
          <p className="text-xl text-center w-[80%] mt-5">
           Turn confusion into clarity. Instantly see how much your Amex points are worth across top airlines, hotels, and redemption partners
          </p>
        </div>

        <div>
          <img src="/images/cards.png" alt="3 cards stacked" className="h-100 w-150" />
        </div>
      </div>
    </header>
  );
};

export default Header;
