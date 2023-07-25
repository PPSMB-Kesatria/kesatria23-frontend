"use client";
import { useState } from "react";
import { PersonalBranding } from "./contents/PersonalBranding";
import { SoftSkill } from "./contents/SoftSkill";
import { LifePlan } from "./contents/LifePlan";
import { FasilitasTeknik } from "./contents/FasilitasTeknik";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PengenalanJurusan } from "./contents/PengenalanJurusan";
import { Guidebook } from "./contents/Guidebook";
import { JelajahLembaga } from "./contents/JelajahLembaga";
import { PameranKarya } from "./contents/PameranKarya";
import { KaryaAplikatif } from "./contents/KaryaAplikatif";
import AOS from "aos";

export default function Materi() {
  const [activeIndex, setActiveIndex] = useState(5);

  useEffect(() => {
    AOS.init({
      duration: 500
    })
  })
  const MATERI_NAVIGATION = [
    {
      title: "Pengenalan Jurusan",
      content: <PengenalanJurusan />
    },
    {
      title: "Jelajah Lembaga",
      content: <JelajahLembaga />,
    },
    {
      title: "Pameran Karya",
      content: <PameranKarya />,
    },
    {
      title: "Fasilitas Teknik",
      content: <FasilitasTeknik />,
    },
    {
      title: "Modul 3",
      content: <LifePlan />,
    },
    {
      title: "Guidebook",
      content: <Guidebook />
    },
    {
      title: "Modul 1",
      content: <PersonalBranding />,
    },
    {
      title: "Modul 2",
      content: <SoftSkill />,
    },
    {
      title: "Karya Aplikatif",
      content: <KaryaAplikatif />,
    },
  ];
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("materi")) setActiveIndex(parseInt(searchParams.get("materi")));
  }, [])

  return (
    <div className="relative overflow-hidden">
      <main className="bg-pattern-green min-h-screen bg-repeat bg-contain gap-4 flex flex-col items-center pt-36 pb-28 md:pb-28 lg:pb-64">
        <h1 data-aos="fade-up" className="font-alstoria text-6xl text-neutral-100">Materi</h1>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 justify-center w-4/5">
          <aside data-aos="fade-right" data-aos-delay="200" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 items-center md:w-[15%] lg:w-1/5 gap-4 sm:gap-3 md:gap-5 lg:gap-8 w-max md:min-w-fit ">
            <Button
              title={MATERI_NAVIGATION[5].title}
              activeIndex={activeIndex}
              ownIndex={5}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[6].title}
              activeIndex={activeIndex}
              ownIndex={6}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[7].title}
              activeIndex={activeIndex}
              ownIndex={7}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[4].title}
              activeIndex={activeIndex}
              ownIndex={4}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[8].title}
              activeIndex={activeIndex}
              ownIndex={8}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[0].title}
              activeIndex={activeIndex}
              ownIndex={0}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[1].title}
              activeIndex={activeIndex}
              ownIndex={1}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[2].title}
              activeIndex={activeIndex}
              ownIndex={2}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title={MATERI_NAVIGATION[3].title}
              activeIndex={activeIndex}
              ownIndex={3}
              setActiveIndex={setActiveIndex}
            />
          </aside>
          <main data-aos="fade-left" data-aos-delay="300" data-aos-offset="-500" className="relative z-[100] min-h-screen max-w-6xl space-y-4 px-5 sm:px-0 md:w-4/5">
            {MATERI_NAVIGATION[activeIndex].content}
          </main>
        </div>
      </main>
      <img
        src="/materi_bottom_ornament.png"
        className="-mt-[5.5rem] sm:mt-0 z-[2] absolute w-screen min-w-[560px] sm:min-w-[1000px] overflow-hidden left-0 md:right-0 sm:bottom-0"
      />
      <img
        src="/tugu_teknik_materi.svg"
        className="select-none hidden md:block w-screen absolute md:h-[36rem] lg:h-[50rem] z-[0] bottom-0 md:-ml-72 lg:-ml-96"
      />
    </div>
  );
}

const Button = ({ title, ownIndex, activeIndex, setActiveIndex }) => {
  return (
    <div
      className={
        "w-full relative h-full md:h-fit flex justify-center items-center py-3.5 rounded-2xl font-creato font-bold shadow-md shadow-black/30 cursor-pointer transition-[background-color,color] duration-200 after:transition-colors after:duration-300 before:transition-colors before:duration-300 after:box-border text-green-400 after:w-full after:absolute after:bg-red-100 after:top-[5px] after:left-[3px] after:h-full after:rounded-2xl z-[2] preserve-3d after-z " +
        (ownIndex == activeIndex
          ? " shadow-none after:bg-transparent text-neutral-100 after:!border-red-100 after:border-[6px] outline-neutral-100 outline-[6px] before:absolute before:w-full before:h-full before:border-neutral-100 before:border-[6px] before:rounded-2xl"
          : "bg-neutral-100")
      }
      onClick={() => {
        setActiveIndex(ownIndex);
      }}
    >
      <h1
        className={
          "px-[10px] md:px-5 lg:px-10 select-none text-center"
        }
      >
        {title}
      </h1>
    </div>
  );
};
