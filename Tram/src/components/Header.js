import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

import Menu from "./Menu";
import logoImg from "../assets/logo.png";

const Header = () => {
  const [toggeMenu, setToggeMenu] = useState(false);
  const navigate = useNavigate();
  const handleToggeMenu = () => {
    setToggeMenu(!toggeMenu);
    console.log(toggeMenu);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between h-[60px] bg-white shadow z-999">
        <div
          className="flex items-center justify-center w-[300px] h-full text-[28px] font-semibold text-white bg-[#ff5e14] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img alt="logo" src={logoImg} className="h-[60px] hidden sm:block" />
          Dream Holidays
        </div>
        <div className="hidden lg:flex items-center w-[500px] bg-[#f4f4f4] rounded-[10px] hover:bg-[#e4e6e9]">
          <label className="pl-[12px]">
            <BiSearch className="text-[22px] text-[#65676b] " />
          </label>
          <input
            className="flex-1 py-[10px] px-[12px] bg-[#f4f4f4] rounded-tr-[10px] rounded-br-[10px] hover:bg-[#e4e6e9]"
            placeholder="Enter here"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center h-full cursor-pointer px-[18px] hover:bg-[#cbcffb]">
            <IoNotifications className="text-[22px] text-[#001659]" />
          </div>
          <div className="flex items-center h-full cursor-pointer px-[18px] hover:bg-[#cbcffb]">
            <FaUserAlt className="text-[18px] text-[#001659]" />
          </div>
          <div
            className="flex z-[52] items-center h-full px-[16px] cursor-pointer bg-[#ff5e14]"
            onClick={handleToggeMenu}
          >
            <HiBars3BottomRight className="text-[26px]  text-white" />
          </div>
        </div>
      </div>
      {toggeMenu && <Menu />}
    </div>
  );
};

export default Header;
