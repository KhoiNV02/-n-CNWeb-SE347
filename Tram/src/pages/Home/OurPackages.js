import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import thailandImg from "../../assets/Packages/thailand.png";
import canadaImg from "../../assets/Packages/canada.png";
import japanImg from "../../assets/Packages/japan.png";
import parisImg from "../../assets/Packages/paris.png";
import laosImg from "../../assets/Packages/laos.png";
import koreanImg from "../../assets/Packages/korean.png";

const OurPackages = () => {
  return (
    <div className="w-5/6 m-auto py-[80px]">
      <div className="mb-5">
        <h3 className="text-[#001659] text-[40px] font-[700]">Our Packages</h3>
        <p className="text-[#565969] text-lg font-[400]">
          Where to go, right now
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        <div>
          <div className="relative h-[250px]">
            <img src={thailandImg} className="w-full h-full" />
            <div className="absolute top-[6%] left-[6%] py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#ff5e14]">
              Sale
            </div>
            {/* <div className="absolute bottom-0 left-0 right-0">Add to cart</div> */}
          </div>
          <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3">
            Asia
          </div>
          <div className="text-[#001659] text-[24px] font-[600] cursor-pointer hover:text-[#ff5e14]">
            Thailand
          </div>
          <div className="flex text-[#565969] gap-2 text-[14px] font-[500]">
            <div className="line-through">$121.00</div>
            <div>$111.00</div>
          </div>
        </div>

        <div>
          <div className="relative h-[250px]">
            <img src={canadaImg} className="w-full h-full" />
            <div className="absolute top-[6%] left-[6%] flex gap-2">
              <div className="py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#ff5e14]">
                Sale
              </div>
              <div className="py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#09316f]">
                New
              </div>
            </div>
          </div>
          <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3">
            America
          </div>
          <div className="text-[#001659] text-[24px] font-[600] cursor-pointer hover:text-[#ff5e14]">
            Canada
          </div>
          <div className="flex text-[#565969] gap-2 text-[14px] font-[500]">
            <div className="line-through">$178.00</div>
            <div>$160.00</div>
          </div>
        </div>

        <div>
          <div className="relative h-[250px]">
            <img src={koreanImg} className="w-full h-full" />
            <div className="absolute top-[6%] left-[6%] py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#09316f]">
              New
            </div>
          </div>
          <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3">
            Asia
          </div>
          <div className="text-[#001659] text-[24px] font-[600] cursor-pointer hover:text-[#ff5e14]">
            Korean
          </div>
          <div className="text-[#565969] text-[14px] font-[500]">$124.00</div>
        </div>

        <div>
          <div className="relative h-[250px]">
            <img src={japanImg} className="w-full h-full" />
            <div className="absolute top-[6%] left-[6%] flex gap-2">
              <div className="py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#ff5e14]">
                Sale
              </div>
              <div className="py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#09316f]">
                New
              </div>
            </div>
          </div>
          <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3">
            Asia
          </div>
          <div className="text-[#001659] text-[24px] font-[600] cursor-pointer hover:text-[#ff5e14]">
            Japan
          </div>
          <div className="flex text-[#565969] gap-2 text-[14px] font-[500]">
            <div className="line-through">$130.00</div>
            <div>$128.00</div>
          </div>
        </div>

        <div>
          <div className="relative h-[250px]">
            <img src={parisImg} className="w-full h-full" />
            <div className="absolute top-[6%] left-[6%] py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#09316f]">
              New
            </div>
          </div>
          <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3">
            Europe
          </div>
          <div className="text-[#001659] text-[24px] font-[600] cursor-pointer hover:text-[#ff5e14]">
            Paris
          </div>
          <div className="text-[#565969] text-[14px] font-[500]">$169.00</div>
        </div>

        <div>
          <div className="relative h-[250px]">
            <img src={laosImg} className="w-full h-full" />
            <div className="absolute top-[6%] left-[6%] py-[16px] px-[10px] uppercase text-white font-[500] rounded-sm bg-[#ff5e14]">
              Sale
            </div>
          </div>
          <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3">
            Asia
          </div>
          <div className="text-[#001659] text-[24px] font-[600] cursor-pointer hover:text-[#ff5e14]">
            Laos
          </div>
          <div className="flex text-[#565969] gap-2 text-[14px] font-[500]">
            <div className="line-through">$100.00</div>
            <div>$92.00</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-1 mt-4 text-center text-[16px] rounded-full bg-[#ff5e14] text-white py-2 px-4 hover:tracking-wider transition">
          View all
          <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default OurPackages;
