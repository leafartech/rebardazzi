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

export default function MySwiper2() {
  return (
    <div className="mt-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 3
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
            <img src="./images/slider/5.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/6.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/7.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/5.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/6.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-12 border-zinc-300 rounded-md sm:h-72 px-4 flex flex-col justify-start">
            <img src="./images/slider/7.webp" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
