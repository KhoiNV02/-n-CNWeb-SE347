import React from "react";
import MainLayout from "./../../layouts/MainLayout";
import letgoImg from "../../assets/Contact/let-go.png";

export const Contact = () => {
  return (
    <MainLayout>
      <div className="w-11/12 lg:w-5/6 m-auto pb-[40px] pt-[100px] flex items-center">
        <div className="flex flex-col gap-4 w-2/5">
          <div>
            <label className="block">Name</label>
            <input
              className="border-0 border-solid border-b-2 border-b-[#001659] w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block">Phone</label>
            <input
              className="border-0 border-solid border-b-2 border-b-[#001659] w-full"
              placeholder="Enter your phone"
            />
          </div>
          <div>
            <label className="block">Mail</label>
            <input
              className="border-0 border-solid border-b-2 border-b-[#001659] w-full"
              placeholder="Enter your mail"
            />
          </div>
          <div>
            <label className="block">Note</label>
            <textarea className="border-0 border-solid border-b-2 border-b-[#001659] w-full"></textarea>
          </div>
          <button className="button bg-[#ff5e14] text-white text-center justify-center">
            Submit
          </button>
        </div>
        <div className="w-3/5">
          <img alt="" src={letgoImg} />
        </div>
      </div>
    </MainLayout>
  );
};
