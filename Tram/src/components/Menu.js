import React from "react";

const Menu = () => {
  return (
    <div className="relative w-screen h-screen bg-[#bdbdbd] z-[51]">
      <div className="absolute top-0 right-0 bottom-0 w-4/5 md:w-[420px] py-14 px-10 bg-[#0a1229]">
        <div className="text-white text-[32px]">Home</div>
        <div className="text-white text-[32px]">Tours</div>
        <div className="text-white text-[32px]">Blogs</div>
        <div className="text-white text-[32px]">Contact</div>
      </div>
    </div>
  );
};

export default Menu;
