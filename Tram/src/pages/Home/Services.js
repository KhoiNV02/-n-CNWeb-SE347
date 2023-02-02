import React from "react";
import { RiShipLine } from "react-icons/ri";
import { IoFastFoodSharp } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import { FaHotel } from "react-icons/fa";

import "../Home/Home.scss";

const Services = () => {
  return (
    <div className="w-11/12 lg:w-5/6 m-auto py-[40px] services">
      <h3 className="text-[#001659] text-[40px] font-[700] text-center">
        Services
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 my-5 gap-5">
        <div className="item">
          <div className="flex justify-center flex-col gap-2 items-center item--blue">
            <div className="blue--icon">
              <RiShipLine className="text-5xl text-[#001659]" />
            </div>
            <div className="text-[#2e448d] font-[500]">Ship Cruises</div>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center item--orange">
            <div className="orange--icon">
              <RiShipLine className="text-5xl text-[#ff5e14]" />
            </div>
            <div className="text-[#975231] font-[500]">Ship Cruises</div>
          </div>
        </div>

        <div className="item">
          <div className="flex justify-center flex-col gap-2 items-center item--blue">
            <div className="blue--icon">
              <IoFastFoodSharp className="text-5xl text-[#001659]" />
            </div>
            <div className="text-[#2e448d] font-[500]">Food Tour</div>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center item--orange">
            <div className="orange--icon">
              <IoFastFoodSharp className="text-5xl text-[#ff5e14]" />
            </div>
            <div className="text-[#975231] font-[500]">Food Tour</div>
          </div>
        </div>

        <div className="item">
          <div className="flex justify-center flex-col gap-2 items-center item--blue">
            <div className="blue--icon">
              <SlPlane className="text-5xl text-[#001659]" />
            </div>
            <div className="text-[#2e448d] font-[500]">Vehicle</div>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center item--orange">
            <div className="orange--icon">
              <SlPlane className="text-5xl text-[#ff5e14]" />
            </div>
            <div className="text-[#975231] font-[500]">Vehicle</div>
          </div>
        </div>

        <div className="item">
          <div className="flex justify-center flex-col gap-2 items-center item--blue">
            <div className="blue--icon">
              <FaHotel className="text-5xl text-[#001659]" />
            </div>
            <div className="text-[#2e448d] font-[500]">Accommodation</div>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center item--orange">
            <div className="orange--icon">
              <FaHotel className="text-5xl text-[#ff5e14]" />
            </div>
            <div className="text-[#975231] font-[500]">Accommodation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
