"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function KesatriaMuda() {
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);
  return (
    <section className="min-h-screen text-neutral-100 py-20 relative bg-pattern-green bg-contain bg-repeat flex gap-[35px] justify-center items-center flex-col">
      <img
        src="/TransitionGreenBegin.png"
        className="absolute top-[0px] translate-y-[-50%] w-full drop-shadow-[0_-10px_10px_rgba(0,0,0,.5)]"
      />

      <div>
        <h1 className="font-alstoria text-[45px] lg:text-[60px] text-center mb-7 mt-5 md:mt-10">
          Aku Sebagai Kesatria Muda
        </h1>
        <p className="text-[18px] sm:text-[20px] px-5 lg:text-[25px] font-creato font-normal max-w-[923px] text-center">
          Gamadhira berasal dari kata "gamadi" yang berarti perjalanan dan kata
          "dhira" yang berarti kebijaksanaan, kecerdasan, dan keberagaman.
          "Gamadhira" layaknya burung merak yang identik dengan keberagaman,
          ketangguhan, dan keindahan. Dengan Gamadhira diharapkan Kesatria Muda
          memiliki perjalanan yang indah.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className="w-full !overflow-y-visible !px-[10px]"
        grabCursor={true}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setActiveSwiper(swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          <SwiperCard title="Pengenalan Jurusan" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard title="Jelajah Lembaga" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard title="Pameran Karya" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard title="Fasilitas Teknik" />
        </SwiperSlide>
        <div
          className="z-[1] hidden cursor-pointer unselectable lg:block absolute left-[10%] text-[80px] top-[50%] translate-y-[-50%]"
          onClick={() => {
            if (swiper.activeIndex == 0) return;
            swiper.slidePrev();
            setActiveSwiper(swiper.activeIndex);
          }}
        >
          <IoIosArrowBack />
        </div>
        <div
          className="z-[1] hidden cursor-pointer unselectable lg:block absolute right-[10%] text-[80px] top-[50%] translate-y-[-50%]"
          onClick={() => {
            if (swiper.activeIndex == 3) return;
            swiper.slideNext();
            setActiveSwiper(swiper.activeIndex);
          }}
        >
          <IoIosArrowForward />
        </div>
      </Swiper>

      <div className="hidden md:flex gap-10 2xl:gap-40 mt-5 text-[18px] sm:text-[20px] 2xl:text-[25px]">
        <div
          className={
            "font-creato cursor-pointer flex flex-col gap-1 after:duration-300 font-bold text-neutral-100 after:bg-green-200 after:h-[4px] after:w-full " +
            (activeSwiper == 0 ? " after:scale-x-100" : "after:scale-x-0")
          }
          onClick={() => {
            setActiveSwiper(0);
            swiper.slideTo(0);
          }}
        >
          Pengenalan Jurusan
        </div>
        <div
          className={
            "font-creato cursor-pointer flex flex-col gap-1 after:duration-300 font-bold text-neutral-100 after:bg-green-200 after:h-[4px] after:w-full " +
            (activeSwiper == 1 ? " after:scale-x-100" : "after:scale-x-0")
          }
          onClick={() => {
            setActiveSwiper(1);
            swiper.slideTo(1);
          }}
        >
          Jelajah Lembaga
        </div>
        <div
          className={
            "font-creato cursor-pointer flex flex-col gap-1 after:duration-300 font-bold text-neutral-100 after:bg-green-200 after:h-[4px] after:w-full " +
            (activeSwiper == 2 ? " after:scale-x-100" : "after:scale-x-0")
          }
          onClick={() => {
            setActiveSwiper(2);
            swiper.slideTo(2);
          }}
        >
          Pameran Karya
        </div>
        <div
          className={
            "font-creato cursor-pointer flex flex-col gap-1 after:duration-300 font-bold text-neutral-100 after:bg-green-200 after:h-[4px] after:w-full " +
            (activeSwiper == 3 ? " after:scale-x-100" : "after:scale-x-0")
          }
          onClick={() => {
            setActiveSwiper(3);
            swiper.slideTo(3);
          }}
        >
          Fasilitas Teknik
        </div>
      </div>

      <div className="flex md:hidden gap-8 text-[35px] sm:text-[40px]">
        <div
          onClick={() => {
            if (swiper.activeIndex == 0) return;
            swiper.slidePrev();
            setActiveSwiper(swiper.activeIndex);
          }}
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={() => {
            if (swiper.activeIndex == 3) return;
            swiper.slideNext();
            setActiveSwiper(swiper.activeIndex);
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
}

function SwiperCard({ title, content, img, link }) {
  return (
    <div className="flex flex-col lg:flex-row ml-[20px] !mx-auto bg-green-400 p-5 sm:px-10 sm:py-10 2xl:py-12 2xl:px-20 rounded-[30px] sm:rounded-[40px] gap-10 shadow-[0_0_10px_#54BB9C] w-[90%] lg:w-[900px] 2xl:w-[1200px] items-center">
      <div className="bg-red-500 flex-shrink-0 w-full sm:w-[400px] !aspect-[65.5/41] 2xl:w-[655px] self-center 2xl:h-[410px] outline outline-[11px] outline-green-200 rounded-[20px]"></div>
      <div className="flex flex-col justify-evenly gap-2 md:gap-5 h-max">
        <h2 className="font-creato text-center 2xl:text-left text-[25px] sm:text-[30px] 2xl:text-[40px] font-bold italic leading-[100%]">
          {title}
        </h2>
        <p className="text-[16px] sm:text-[20px] 2xl:text-[25px] 2xl:max-w-[435px] font-normal font-creato text-justify leading-tight">
          Gamadhira berasal dari kata "gamadi" yang berarti perjalanan dan kata
          "dhira" yang berarti kebijaksanaan, kecerdasan, dan keberagaman.
          "Gamadhira" layaknya burung merak yang identik dengan keberagaman,
          ketangguhan, dan keindahan. Dengan Gamadhira diharapkan Kesatria Muda
          memiliki perjalanan yang indah.
        </p>
        <Link
          href="/"
          className="block bg-neutral-100 w-fit font-bold italic text-green-400 font-creato rounded-[20px] text-[18px] sm:text-[20px] 2xl:text-[25px] px-7 py-3 mt-[10px]"
        >
          Baca Modul
        </Link>
      </div>
    </div>
  );
}
