"use client";
import Image from "next/image";
import Nala from "../../../public/nala_hero.png";
import Topbar from "../../../public/topbar_hero.svg";
import Botbar_1 from "../../../public/bot_hero_1.svg";
import Botbar_2 from "../../../public/bot_hero_2.svg";
import Silhouette from "../../../public/silhouette_tugu_teknik_hero.svg";
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
    <section className="min-h-screen bg-pattern-green bg-repeat z-[0] flex">
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
      <div data-aos="fade-up" data-aos-offset="-200" data-aos-delay="300" className="self-end flex absolute left-0 right-0 w-[100%]">
        <Image
          src={Silhouette}
          width={1920}
          height={220}
          alt=""
          className="absolute self-end min-w-[600px] w-[100%] right-0"
        />
        <Image
          src={Botbar_1}
          width={1920}
          height={220}
          alt=""
          className="absolute self-end min-w-[600px] w-[100%] right-0"
        />
        <Image
          src={Botbar_2}
          width={1920}
          height={165}
          alt=""
          className="absolute self-end min-w-[600px] w-[100%] right-0"
        />
      </div>
    </section>
  );
}
