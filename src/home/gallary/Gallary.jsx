import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import gallary1 from "../../assets/gallary/gallary1.jpg";
import gallary2 from "../../assets/gallary/gallary2.jpg";
import gallary3 from "../../assets/gallary/gallary3.jpg";
import gallary4 from "../../assets/gallary/gallary4.jpg";
import gallary5 from "../../assets/gallary/gallary5.jpg";
import gallary6 from "../../assets/gallary/gallary6.jpg"
import gallary7 from "../../assets/gallary/gallary7.jpg"
import gallary8 from "../../assets/gallary/gallary8.jpg"

const Gallary = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 10)}s`;
  };
  return (
    <>
      <div className="my-8 ">
        <p className="text-center text-4xl font-medium">Art Gallery!!!</p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={true}
       
        modules={[Autoplay, EffectCoverflow, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper  lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]"
      >
        <SwiperSlide>
          <img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary5} alt="" />
        </SwiperSlide>
        <SwiperSlide><img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary6} alt="" /></SwiperSlide>
        <SwiperSlide><img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary7} alt="" /></SwiperSlide>
        <SwiperSlide><img className="lg:w-[800px] w-[380px] h-[300px] lg:h-[400px]" src={gallary8} alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};
export default Gallary;
