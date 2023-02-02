import React from "react";

import valiImg from "../../assets/Aboutus/vali.png";
import "../Home/Home.scss";

const AboutUs = () => {
  return (
    <div className="py-[40px]">
      <div className="w-11/12 lg:w-5/6 m-auto py-[40px] flex flex-col sm:flex-row gap-[5%] justify-between about-us">
        <div className="sm:w-[460px]">
          <img alt="vali" src={valiImg} className="object-cover" />
        </div>
        <div>
          <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3">
            Explore the feature
          </div>
          <h3 className="text-[#001659] text-[40px] font-[700]">
            Travel's in our blood
          </h3>
          <div className="text-[#565969]">
            With the convenience of global online resources, it’s easier than
            ever to plan and book your next global travel.
          </div>
          <div className="">
            <button className="button">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
