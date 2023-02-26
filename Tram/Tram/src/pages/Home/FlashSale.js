import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FlashSale = () => {
  return (
    <div className="h-screen">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-screen">
            <img
              src="https://capital-placement.b-cdn.net/wp-content/uploads/2021/07/The-benefits-of-travelling.jpg"
              alt="img1"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-screen w-full">
            <img
              src="https://www.covermore.com.au/sites/default/files/why-travelling-makes-you-a-better-person.jpg"
              alt="img1"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h-screen">
            <img
              src="https://www.covermore.com.au/sites/default/files/why-travelling-makes-you-a-better-person.jpg"
              alt="img1"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FlashSale;
