"use client";
import Image from "next/image";
import Nala from "../../../public/nala_hero.png";
import Topbar from "../../../public/topbar_hero.svg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  });
  return (
    <section className="min-h-screen bg-pattern-green bg-repeat z-[1] flex">
      <Image
        src={Topbar}
        className=" -top-[20px] absolute w-[100%] min-w-[1100px] right-0"
        alt=""
        width={1920}
        data-aos="fade-down"
      />
      <div className="flex flex-col lg:flex-row justify-center items-center content-center relative z-[3] w-full gap-8 xl:gap-10 md:px-5">
        <Image
          src={Nala}
          width={1400}
          alt="Nala"
          className="w-[85%] flex-shrink-[80%] sm:w-[50%] sm:p-0 md:w-[75%] lg:w-[50%] h-fit min-w-[200px] max-w-[480px] 2xl:max-w-[600px] relative z-[2]"
          data-aos="fade-up"
        />
        <div data-aos="fade-up" className="flex w-fit justify-center //bg-red-500/60 flex-col text-white z-[100]">
          <div className="font-alstoria lg:text-[54px] mb-[10px] md:text-[49px] sm:text-[45px] text-[40px] text-neutral-100 drop-shadow-lg text-center lg:text-left leading-[100%]">
            Selamat Datang{" "}
          </div>
          <div className="md:w-max font-alstoria xl:text-[96px] lg:text-[85px] sm:text-[80px] text-[58px] text-neutral-100 drop-shadow-lg text-center lg:text-left leading-[100%]">
            {" "}
            Kesatria Muda
          </div>
          <div className="font-creato lg:text-[54px] font-[1000] md:text-[40px] text-[32px] text-neutral-100 drop-shadow-lg text-center lg:text-left">
            2023 !
          </div>
        </div>
      </div>
    </section>
  );
}
