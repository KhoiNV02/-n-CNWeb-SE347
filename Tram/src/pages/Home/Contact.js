import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

import contactImg from "../../assets/Contact/contact-us.png";

const Contact = () => {
  return (
    <div className="w-11/12 lg:w-5/6 m-auto py-[40px]">
      <div className="relative flex items-center justify-center h-[300px]">
        <img
          alt="contac-us"
          src={contactImg}
          className="absolute top-0 right-0 left-0 h-full w-full object-cover rounded-3xl"
        />
        <div className="flex items-center justify-center w-full h-full z-10 bg-[#ff5e1461] rounded-3xl">
          <Link to="/contact">
            <button className="button bg-[#ff5e14] text-white z-30">
              Contac us
              <HiArrowNarrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
