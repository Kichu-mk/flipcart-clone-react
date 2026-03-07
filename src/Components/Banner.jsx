import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import b1 from "../assets/banner/1.webp";
import b2 from "../assets/banner/2.webp";
import b3 from "../assets/banner/3.webp";
import b4 from "../assets/banner/4.webp";
import b5 from "../assets/banner/5.webp";

const Banner = () => {
    let bannerArr = [b1, b2, b3, b4, b5]
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination= {{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {
            bannerArr.map((obj) => {
                return (
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={obj} alt="" className="" />
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
      
    </div>
  );
};

export default Banner;
