'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Slide from './Slide';

export default function Banner() {
  return (
    <>
      <style>{`
        .mySwiper .swiper-pagination-bullet {
          background-color: #0D7674;
          opacity: 0.6;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background-color: #0D7674;
          opacity: 1;
        }
      `}</style>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={2000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="min-h-screen bg-cover bg-center bg-[url('/slider-1.jpg')]"><Slide/></SwiperSlide>
        <SwiperSlide className="min-h-screen bg-cover bg-center bg-[url('/slider-2.jpg')]"><Slide/></SwiperSlide>
        <SwiperSlide className="min-h-screen bg-cover bg-center bg-[url('/slider-3.jpg')]"><Slide/></SwiperSlide>
      </Swiper>
    </>
  );
}