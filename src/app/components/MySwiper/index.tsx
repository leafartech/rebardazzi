'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function MySwiper() {
  return (
    <div className="mt-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 4
          },
          300: {
            slidesPerView: 1
          }
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/4.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border border-zinc-300 rounded-md h-72 px-4 flex flex-col justify-start bg-white">
            <img src="./images/slider/4.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
