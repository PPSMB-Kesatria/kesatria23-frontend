"use client";

import Top from "../../../public/top_dokumentasi.svg"
import Bot from "../../../public/bot_dokumentasi.svg"
import Silhouette from "../../../public/silhouette_tugu_teknik_hero.svg"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Dokumentasi() {
  const [swiper, setSwiper] = useState(null);


  const breakpoints = {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  return (
    <section className="min-h-screen text-neutral-100 py-10 md:py-20 relative bg-pattern-green bg-contain bg-repeat flex gap-[35px] justify-center items-center flex-col">
      <Image src={Silhouette} width={1920} height={220} className="absolute bottom-0 right-0 min-w-[600px]" />
      <Image src={Top} className="absolute top-0 left-0 sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%]" width={700} />
      <Image src={Bot} className="absolute bottom-0 right-0 sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%]" width={700} />



      <div className="z-[100]">
        <h1 className="font-alstoria text-[45px] 2xl:text-[60px] text-center mb-7 mt-5 md:mt-10">
          Dokumentasi
        </h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className="w-[290px] sm:w-[576px] lg:w-[920px] 2xl:w-[1020px] !overflow-y-visible !px-[10px] bg-green-100 rounded-[50px]"
        grabCursor={true}
        onSwiper={setSwiper}
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <Imagecard />
        </SwiperSlide>
        <SwiperSlide>
          <Imagecard />
        </SwiperSlide>
        <SwiperSlide>
          <Imagecard />
        </SwiperSlide>
        <SwiperSlide>
          <Imagecard />
        </SwiperSlide>
        <div
          className="z-[1] hidden cursor-pointer unselectable lg:block absolute left-[-20px] text-[80px] top-[50%] translate-y-[-50%] "
          onClick={() => {
            if (swiper.activeIndex === 0) return;
            swiper.slidePrev();
          }}
        >
          <IoIosArrowBack className="text-green-400 h-[200%]" />
        </div>
        <div
          className="z-[1] hidden cursor-pointer unselectable lg:block absolute right-[-20px] text-[80px] top-[50%] translate-y-[-50%]"
          onClick={() => {
            if (swiper.activeIndex === 3) return;
            swiper.slideNext();
          }}
        >
          <IoIosArrowForward className="text-green-400" />
        </div>
      </Swiper>
      <div className="flex md:hidden gap-8 text-[35px] sm:text-[40px] z-[100]">
        <div
          onClick={() => {
            if (swiper.activeIndex == 0) return;
            swiper.slidePrev();
          }}
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={() => {
            if (swiper.activeIndex == 3) return;
            swiper.slideNext();
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
}

function Imagecard() {
  const placeholders = Array.from({ length: 2 });
  return (
    <div className="flex flex-col lg:flex-row ml-[20px] sm:rounded-[40px] sw-fit items-center  sm:py-10 2xl:py-12 !mx-auto drop-shadow-md    ">
      <div className=" mx-auto w-64 flex flex-wrap justify-center py-2">
        {placeholders.map((_, index) => (
          <div key={index} className=" w-64 h-36 my-2 animate-pulse m-2">
            <div className="bg-gray-300 w-full h-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
