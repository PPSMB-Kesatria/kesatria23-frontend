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
  const imageUrls = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image10.jpg",
    "/image11.jpg",
    "/image12.jpg",
    "/image13.jpg",
    "/image14.jpg",
    "/image15.jpg",
    "/image16.jpg",
    "/image17.jpg",
    "/image18.jpg",
    "/image19.jpg",
    "/image20.jpg",
    "/image21.jpg",
    "/image22.jpg",
    "/image23.jpg",
    "/image24.jpg",
  ];

  const [swiper, setSwiper] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setShowModal(true);
  };

  const allImages = Array.from({ length: 24 });
  // split allImages into 2d arrays of 6 images each
  const images2DArray = imageUrls.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / 6);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

      <div
        className="w-[90%] max-w-full sm:max-w-[600px] lg:max-w-[920px] 2xl:max-w-[1020px]"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="-1000"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          className="w-full !overflow-y-visible !px-[10px] bg-green-100 rounded-[30px] sm:rounded-[50px]"
          grabCursor={true}
          onSwiper={setSwiper}
          // breakpoints={breakpoints}
        >
          {images2DArray.map((images, i) => (
            <SwiperSlide key={i} className="self-center">
              <Imagecard
                array={images2DArray[i]}
                onImageClick={handleImageClick}
              />
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

      {showModal && (
        <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />
      )}
    </section>
  );
}

function Imagecard({ array, onImageClick }) {
  return (
    <div className="grid place-items-center gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-3 mx-0 p-[5%] xs:p-5 sm:p-8 md:p-12 w-full overflow-x-hidden overflow-y-hidden">
      {array.map((imageUrl, i) => (
        <div
          key={i}
          className="w-full aspect-[16/9]"
          onClick={() => onImageClick(imageUrl)}
        >
          <div className="bg-gray-300 w-full h-full grid place-items-center relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={`Image ${i}`}
              width={1200}
              height={800}
              className="absolute"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Modal({ imageUrl, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-[1000]">
      <div className="absolute w-fit bg-neutral-100 p-4 rounded-lg md:mx-[50px] my-[100px] max-h-[90vh] overflow-y-hidden mx-[10px] min-w-[50%]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:bg-green-200 hover:text-green-400 focus:outline-none font-creato text-neutral-100 rounded-lg bg-green-400 p-2"
          onClick={onClose}
        >
          Close
        </button>
        <Image
          src={imageUrl}
          alt="Image Pop-up"
          className="max-w-[100%] w-auto max-h-[80vh]"
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
}
