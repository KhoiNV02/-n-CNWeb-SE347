import React from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone, BsAt, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa";

import mapImg from "../assets/map.png";

const Footer = () => {
  return (
    <div className="bg-[#0a1229]">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[80px] w-5/6 m-auto gap-[3rem]">
        <div>
          <h3 className="text-white text-[26px] font-medium">Let's us</h3>
          <p className="text-[#9ca5af] mt-[20px]">
            Come to dream holiday to have the best experience
          </p>
          <p className="flex items-center gap-[0.4rem] text-[#9ca5af] mt-[16px]">
            <MdOutlineChangeCircle className="text-white text-[2.6rem]" />
            Mon - Sat 8:00 - 17:30, Sunday - CLOSED
          </p>
        </div>
        <div>
          <h3 className="text-white text-[26px] font-medium">Our Services</h3>
          <p className="text-[#9ca5af] mt-[16px]">
            Chemical Engineering Projects
          </p>
          <p className="text-[#9ca5af] mt-[20px]">
            Mining Engineering Construction
          </p>
          <p className="text-[#9ca5af] mt-[16px]">
            Engineering Welding Engineering
          </p>
          <p className="text-[#9ca5af] mt-[16px]">Welding Engineering</p>
          <p className="text-[#9ca5af] mt-[16px]">Space Program XYZ</p>
        </div>
        <div>
          <h3 className="text-white text-[26px] font-medium">
            Office in New York
          </h3>
          <p className="flex items-center gap-[0.4rem] text-[#9ca5af] mt-[16px]">
            <FiMapPin className="text-white text-[2.6rem]" />
            7300-7398 Colonial Rd, Brooklyn, NY 11209
          </p>
          <p className="flex items-center gap-[0.4rem] text-[#9ca5af] mt-[20px]">
            <BsTelephone className="text-white text-[1.4rem]" />+ (123)
            1234-567-8902
          </p>
          <p className="flex items-center gap-[0.4rem] text-[#9ca5af] mt-[16px]">
            <BsAt className="text-white text-[1.6rem]" />
            wilmer@qodeinteractive.com
          </p>
        </div>
        <div>
          <h3 className="text-white text-[26px] font-medium">Our Locations</h3>
          <div className="text-[#9ca5af] mt-[16px] max-w-[30rem]">
            <img src={mapImg} alt="map" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-5/6 m-auto">
        <div className="flex items-center justify-center w-[300px] py-[1.2rem] h-full text-[28px] font-semibold text-white bg-[#ff5e14]">
          Dream Holidays
        </div>
        <div className="text-[#9ca5af]">Create by Bich Tram</div>
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center justify-center px-[1rem] h-full border border-[#9ca5af] cursor-pointer">
            <FaFacebookF className=" text-white" />
          </div>
          <div className="flex items-center justify-center px-[1rem] h-full border border-[#9ca5af] cursor-pointer">
            <FaYoutube className=" text-white" />
          </div>
          <div className="flex items-center justify-center px-[1rem] h-full border border-[#9ca5af]cursor-pointer">
            <BsTwitter className=" text-white" />
          </div>
          <div className="flex items-center justify-center px-[1rem] h-full border border-[#9ca5af] cursor-pointer">
            <FaPinterestP className=" text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
