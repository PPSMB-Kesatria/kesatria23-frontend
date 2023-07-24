"use client";

import Top from "../../../public/top_dokumentasi.svg";
import Bot from "../../../public/bot_dokumentasi.svg";
import Silhouette from "../../../public/silhouette_tugu_teknik_hero.svg";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Dokumentasi() {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  const breakpoints = {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };

  const allImages = Array.from({ length: 24 });
  // split allImages into 2d arrays of 6 images each
  const images2DArray = allImages.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / 6);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  console.log(allImages);

  console.log(images2DArray);

  return (
    <section className="min-h-screen text-neutral-100 py-10 md:py-[100px] relative bg-pattern-green bg-contain bg-repeat flex gap-[35px] justify-center items-center flex-col">
      <Image
        src={Silhouette}
        width={1920}
        height={220}
        className="absolute bottom-0 right-0 min-w-[600px]"
        alt=""
        data-aos="fade-up"
      />
      <Image
        src={Top}
        className="absolute top-0 left-0 sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] max-w-[50%]"
        width={700}
        alt=""
        data-aos="fade-right"
        data-aos-delay="300"
      />
      <Image
        src={Bot}
        className="absolute bottom-0 right-[-5px] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%] max-w-[50%]"
        width={700}
        alt=""
        data-aos="fade-left"
        data-aos-delay="300"
      />

      <div className="z-[100]" data-aos="fade-up">
        <h1 className="font-alstoria text-[45px] 2xl:text-[60px] text-center ">
          Dokumentasi
        </h1>
      </div>

      <div className="w-[90%] max-w-full sm:max-w-[600px] lg:max-w-[920px] 2xl:max-w-[1020px]" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-1000">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          className="w-full !overflow-y-visible !px-[10px] bg-green-100 rounded-[30px] sm:rounded-[50px]"
          grabCursor={true}
          onSwiper={setSwiper}
          // breakpoints={breakpoints}
        >
          {images2DArray.map((images, i) => (
            <SwiperSlide key={i}>
              <Imagecard array={images2DArray[i]} />
            </SwiperSlide>
          ))}
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
      </div>
      <div className="flex lg:hidden gap-8 text-[35px] sm:text-[40px] z-[100]">
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

function Imagecard({ index, array }) {
  return (
    <div className="grid place-items-center gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-3 mx-0 p-[5%] xs:p-5 sm:p-8 md:p-12 w-full">
      {array.map((_, i) => (
        <div key={i} className=" w-full aspect-[16/9] animate-pulse">
          <div className="bg-gray-300 w-full h-full"></div>
        </div>
      ))}
    </div>
  );
}
