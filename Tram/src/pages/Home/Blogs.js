import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

import people1Img from "../../assets/Blogs/people1.png";
import people2Img from "../../assets/Blogs/people2.png";
import people3Img from "../../assets/Blogs/people3.png";
import people4Img from "../../assets/Blogs/people4.png";
import people5Img from "../../assets/Blogs/people5.png";
import "../Home/Home.scss";

const Blogs = () => {
  return (
    <div className="w-11/12 lg:w-5/6 m-auto py-[40px] blogs rounded-sm">
      <h3 className="text-[#001659] text-[40px] font-[700] mb-5">Blogs</h3>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "50px" }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-[24px] h-[410px] lg:h-[350px] border border-solid border-[#e8e8e9] rounded-[4px] border-b-4 border-b-[#ff5e14] item">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="w-[80px] h-[80px] ">
                  <img
                    alt="first-people"
                    src={people1Img}
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>
                <div>
                  <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3 comment">
                    Funny
                  </div>
                  <h3 className="text-[#001659] text-[24px] font-[700] name">
                    Hana
                  </h3>
                </div>
              </div>
              <div>
                <FaQuoteLeft className="text-[#001659] text-[32px] font-[700] quote" />
              </div>
            </div>
            <div className="text-[#565969] ml-[96px] text-[16px] sub">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-[24px] h-[410px] lg:h-[350px] border border-solid border-[#e8e8e9] rounded-[4px] border-b-4 border-b-[#ff5e14] item">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="w-[80px] h-[80px] ">
                  <img
                    alt="second-people"
                    src={people2Img}
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>
                <div>
                  <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3 comment">
                    interesting experience
                  </div>
                  <h3 className="text-[#001659] text-[24px] font-[700] name">
                    John
                  </h3>
                </div>
              </div>
              <div>
                <FaQuoteLeft className="text-[#001659] text-[32px] font-[700] quote" />
              </div>
            </div>
            <div className="text-[#565969] ml-[96px] text-[16px] sub">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. There are many variations of passages of
              Lorem Ipsum available, but the majority
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-[24px] h-[410px] lg:h-[350px] border border-solid border-[#e8e8e9] rounded-[4px] border-b-4 border-b-[#ff5e14] item">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="w-[80px] h-[80px] ">
                  <img
                    alt="third-people"
                    src={people3Img}
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>
                <div>
                  <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3 comment">
                    Happy
                  </div>
                  <h3 className="text-[#001659] text-[24px] font-[700] name">
                    Jenifer
                  </h3>
                </div>
              </div>
              <div>
                <FaQuoteLeft className="text-[#001659] text-[32px] font-[700] quote" />
              </div>
            </div>
            <div className="text-[#565969] ml-[96px] text-[16px] sub">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-[24px] h-[410px] lg:h-[350px] border border-solid border-[#e8e8e9] rounded-[4px] border-b-4 border-b-[#ff5e14] item">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="w-[80px] h-[80px] ">
                  <img
                    alt="four-people"
                    src={people4Img}
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>
                <div>
                  <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3 comment">
                    love this place
                  </div>
                  <h3 className="text-[#001659] text-[24px] font-[700] name">
                    Juice Marry
                  </h3>
                </div>
              </div>
              <div>
                <FaQuoteLeft className="text-[#001659] text-[32px] font-[700] quote" />
              </div>
            </div>
            <div className="text-[#565969] ml-[96px] text-[16px] sub">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-[24px] h-[410px] lg:h-[350px] border border-solid border-[#e8e8e9] rounded-[4px] border-b-4 border-b-[#ff5e14] item">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="w-[80px] h-[80px] ">
                  <img
                    alt="five-people"
                    src={people5Img}
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                </div>
                <div>
                  <div className="text-[#565969] uppercase text-[13px] font-[600] mt-3 comment">
                    Good day
                  </div>
                  <h3 className="text-[#001659] text-[24px] font-[700] name">
                    Mark Joy
                  </h3>
                </div>
              </div>
              <div>
                <FaQuoteLeft className="text-[#001659] text-[32px] font-[700] quote" />
              </div>
            </div>
            <div className="text-[#565969] ml-[96px] text-[16px] sub">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blogs;
