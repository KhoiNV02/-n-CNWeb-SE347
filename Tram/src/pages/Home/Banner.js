import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import pic1Img from "../../assets/Banner/pic1.png";
import pic2Img from "../../assets/Banner/pic2.png";
import pic3Img from "../../assets/Banner/pic3.png";

const Banner = () => {
  const swiperRef = useRef();

  return (
    <div className="relative h-screen w-full banner">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        speed={500}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ width: "100%", height: "100%" }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div
            className="w-full h-full flex items-center bg-cover bg-no-repeat bg-center "
            style={{ backgroundImage: `url(${pic2Img})` }}
          >
            <div className="relative w-11/12 lg:w-5/6 m-auto ">
              <div className="text-white uppercase text-[13px] font-[600] mt-3 sub">
                Explore the feature
              </div>
              <h3 className="text-white text-[40px] font-[700] title">
                Go to Venice
              </h3>
              <div className="text-white max-w-[600px] my-4 detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has ... The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet.
              </div>
              <div className="control">
                <div className="button square bg-[#ff5e14] text-white mr-3">
                  Read More
                </div>
                <div className="button square bg-[#001659] text-white">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full flex items-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${pic1Img})` }}
          >
            <div className="relative w-11/12 lg:w-5/6 m-auto ">
              <div className="text-white uppercase text-[13px] font-[600] mt-3 sub">
                Explore the feature
              </div>
              <h3 className="text-white text-[40px] font-[700] title">
                Try yours the best
              </h3>
              <div className="text-white max-w-[600px] my-4 detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has ... The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet.
              </div>
              <div className="control">
                <div className="button square bg-[#ff5e14] text-white mr-3">
                  Read More
                </div>
                <div className="button square bg-[#001659] text-white">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full flex items-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${pic3Img})` }}
          >
            <div className="relative w-11/12 lg:w-5/6 m-auto ">
              <div className="text-white uppercase text-[13px] font-[600] mt-3 sub">
                Explore the feature
              </div>
              <h3 className="text-white text-[40px] font-[700] title">
                Go to Venice
              </h3>
              <div className="text-white max-w-[600px] my-4 detail">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has ... The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet.
              </div>
              <div className="control">
                <div className="button square bg-[#ff5e14] text-white mr-3">
                  Read More
                </div>
                <div className="button square bg-[#001659] text-white">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute hidden md:flex left-0 bottom-0">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex justify-center items-center w-[70px] h-[70px] z-[3] cursor-pointer bg-white"
        >
          <IoIosArrowBack className="text-2xl text-[#12192d]" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex justify-center items-center w-[70px] h-[70px] z-[3] cursor-pointer bg-[#001659]"
        >
          <IoIosArrowForward className="text-2xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
