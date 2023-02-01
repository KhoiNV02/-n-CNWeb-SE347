import React from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { BsTelephone, BsAt, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa";

import mapImg from "../assets/map.png";

const Footer = () => {
  return (
    <div className="bg-[#0a1229]">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-4 p-[80px] w-[9/10] m-auto">
        <div>
          <h3 className="text-white text-[26px] font-medium">Let's us</h3>
          <p className="text-[#9ca5af] mt-[20px]">
            Come to dream holiday to have the best experience
          </p>
          <p className="text-[#9ca5af] mt-[16px]">
            <MdOutlineChangeCircle />
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
          <p className="text-[#9ca5af] mt-[16px]">
            <FiMapPin />
            7300-7398 Colonial Rd, Brooklyn, NY 11209
          </p>
          <p className="text-[#9ca5af] mt-[20px]">
            <BsTelephone />+ (123) 1234-567-8902
          </p>
          <p className="text-[#9ca5af] mt-[16px]">
            <BsAt />
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
      <div>
        <div className="flex items-center justify-center w-[300px] h-full text-[28px] font-semibold text-white bg-[#ff5e14]">
          Dream Holidays
        </div>
        <div>Create by Bich Tram</div>
        <div>
          <FaFacebookF />
          <FaYoutube />
          <BsTwitter />
          <FaPinterestP />
        </div>
      </div>
    </div>
  );
};

export default Footer;
