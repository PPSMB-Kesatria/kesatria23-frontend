"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Dokumentasi() {
  const [swiper, setSwiper] = useState(null);

  // Define breakpoints for different screen sizes
  const breakpoints = {
    320: { slidesPerView: 1 }, // Mobile view with 1 slide per view
    640: { slidesPerView: 2 }, // Larger screens with 2 slides per view
    1024: { slidesPerView: 3 }, // Even larger screens with 4 slides per view
  };

  return (
    <section className="min-h-screen text-neutral-100 py-10 md:py-20 relative bg-pattern-green bg-contain bg-repeat flex gap-[35px] justify-center items-center flex-col">
      <div>
        <h1 className="font-alstoria text-[45px] 2xl:text-[60px] text-center mb-7 mt-5 md:mt-10">
          Dokumentasi
        </h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className="w-full !overflow-y-visible !px-[10px]"
        grabCursor={true}
        onSwiper={setSwiper}
        breakpoints={breakpoints} // Apply breakpoints
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
          className="z-[1] hidden cursor-pointer unselectable lg:block absolute left-[10%] text-[80px] top-[50%] translate-y-[-50%]"
          onClick={() => {
            if (swiper.activeIndex === 0) return;
            swiper.slidePrev();
          }}
        >
          <IoIosArrowBack className="text-green-400" />
        </div>
        <div
          className="z-[1] hidden cursor-pointer unselectable lg:block absolute right-[10%] text-[80px] top-[50%] translate-y-[-50%]"
          onClick={() => {
            if (swiper.activeIndex === 3) return;
            swiper.slideNext();
          }}
        >
          <IoIosArrowForward className="text-green-400" />
        </div>
      </Swiper>
    </section>
  );
}

function Imagecard() {
  const placeholders = Array.from({ length: 2 });
  return (
    <div className="flex flex-col lg:flex-row ml-[20px] !mx-auto p-5 sm:rounded-[40px] gap-10 w-fit items-center sm:px-10 sm:py-10 2xl:py-12 2xl:px-20">
      <div className="container mx-auto w-fit flex flex-wrap justify-center">
        {placeholders.map((_, index) => (
          <div key={index} className=" w-64 h-36 mb-4 animate-pulse m-2">
            <div className="bg-gray-300 w-full h-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
