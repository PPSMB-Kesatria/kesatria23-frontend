"use client";
import { useState } from "react";
import { PersonalBranding } from "./contents/PersonalBranding";
import { FasilitasFakultas } from "./contents/FasilitasFakultas";
import { DummyContent } from "./contents/DummyContent";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Materi() {
  const [activeIndex, setActiveIndex] = useState(0);
  const MATERI_NAVIGATION = [
    {
      title: "Personal Branding",
      content: <PersonalBranding />,
    },
    {
      title: "Fasilitas Fakultas",
      content: <FasilitasFakultas />,
    },
    {
      title: "Dummy Content",
      content: <DummyContent />,
    },
  ];
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("materi"))
    if (searchParams.get("materi")) setActiveIndex(parseInt(searchParams.get("materi")));
  }, [])

  return (
    <div className="relative overflow-hidden">
      <main className="bg-pattern-green min-h-screen bg-repeat bg-contain gap-4 flex flex-col items-center pt-36 pb-36 md:pb-28 lg:pb-64">
        <h1 className="font-alstoria text-6xl text-neutral-100">Materi</h1>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 justify-center w-4/5">
          <aside className="flex flex-col items-center w-1/5 space-y-8 min-w-fit ">
            <Button
              title="Personal Branding"
              activeIndex={activeIndex}
              ownIndex={0}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title="Fasilitas Fakultas"
              activeIndex={activeIndex}
              ownIndex={1}
              setActiveIndex={setActiveIndex}
            />
            <Button
              title="Dummy Content"
              activeIndex={activeIndex}
              ownIndex={2}
              setActiveIndex={setActiveIndex}
            />
            {/* <Button title="Test" ownIndex={3} /> */}
          </aside>
          <content className="min-h-screen max-w-6xl space-y-4 md:w-4/5">
            {MATERI_NAVIGATION[activeIndex].content}
          </content>
        </div>
      </main>
      <img
        src="/materi_bottom_ornament.png"
        className="-mt-[5.5rem] sm:mt-0 z-[2] absolute w-screen min-w-[560px] sm:min-w-[1000px] overflow-hidden left-0 md:right-0 sm:bottom-0"
      />
      <img
        src="/tugu_teknik_materi.svg"
        className="hidden md:block w-screen absolute md:h-[36rem] lg:h-[50rem] z-[1] bottom-0 md:-ml-72 lg:-ml-96"
      />
    </div>
  );
}

const Button = ({ title, ownIndex, activeIndex, setActiveIndex }) => {
  return (
    <div
      className={
        "w-full relative flex justify-center items-center py-3.5 rounded-2xl font-creato font-bold shadow-md shadow-black/30 cursor-pointer transition-[background-color,color] duration-200 after:transition-colors after:duration-300 before:transition-colors before:duration-300 after:box-border text-green-400 after:w-full after:absolute after:bg-red-100 after:top-[5px] after:left-[3px] after:h-full after:rounded-2xl z-[2] preserve-3d after-z " +
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
          "px-10 select-none"
        }
      >
        {title}
      </h1>
    </div>
  );
};
