"use client";
import { useState } from "react";
import { Day1 } from "./rundown/day1";
import { Day2 } from "./rundown/day2";
import { useEffect } from "react";
import AOS from "aos";

export default function Agenda() {
  const [activeIndex, setActiveIndex] = useState(0);

  const RUNDOWN_NAVIGATION = [
    {
      title: "Hari Pertama",
      content: <Day1 />,
    },
    {
      title: "Hari Kedua",
      content: <Day2 />,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

  return (
    <main className=" bg-pattern-cream bg-repeat py-32 lg:pb-40">
      <img src="/ornament-agenda.svg" className=" absolute w-[50px] left-0 top-[15%]" alt="" />
      <img src="/ornament-agenda2.svg" className=" absolute w-[50px] right-0 bottom-[5%] sm:bottom-[10%]" alt="" />

      <h1
        data-aos="fade-up"
        className=" font-alstoria text-center text-[48px] text-green-400 mb-7 "
      >
        Agenda
      </h1>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex w-full flex-col sm:flex-row items-center sm:justify-center gap-[1%] mb-12"
      >
        <Button
          title="Hari Pertama"
          ownIndex={0}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Button
          title="Hari Kedua"
          ownIndex={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        {RUNDOWN_NAVIGATION[activeIndex].content}
      </div>
    </main>
  );
}

const Button = ({ title, ownIndex, activeIndex, setActiveIndex }) => {
  return (
    <button
      className={
        "cursor-pointer my-2 py-2 transition-all min-w-[250px] max-w-[300px] xs:w-[20%] lg:w-[204.8px] rounded-xl drop-shadow-xl font-creato font-medium " +
        (ownIndex == activeIndex
          ? "bg-red-200 text-neutral-100"
          : "bg-neutral-100 text-red-200 hover:shadow-[0_0_10px_#F34B4C]")
      }
      onClick={() => {
        setActiveIndex(ownIndex);
      }}
    >
      {title}
    </button>
  );
};
