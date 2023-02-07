import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="fixed w-screen h-screen bg-[#bdbdbd] z-[51]">
      <div className="absolute top-0 right-0 bottom-0 w-4/5 md:w-[420px] py-14 px-10 bg-[#0a1229]">
        <div className="absolute top-0 right-0 text-white">
          <IoClose />
        </div>
        <div>
          <Link to={""}>
            <div className="text-white text-[32px]">Home</div>
          </Link>
          <Link to={"/tours"}>
            <div className="text-white text-[32px]">Tours</div>
          </Link>
          <Link to={"blogs"}>
            <div className="text-white text-[32px]">Blogs</div>
          </Link>

          <Link to={"contact"}>
            <div className="text-white text-[32px]">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
