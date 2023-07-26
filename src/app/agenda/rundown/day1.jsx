"use client";
import { useState } from "react";

export const Day1 = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const RUNDOWN = [
    {
      time: "07.30",
      agenda: "Upacara Pembukaan PPSMB 2023",
      deskripsi:
        "Pemberian sambutan oleh koordinator umum dan pihak dekanat kepada Kesatria Muda.",
    },
    {
      time: "09.55",
      agenda: "Kepemanduan",
      deskripsi: "Kegiatan dan materi yang akan diberikan oleh pemandu kepada Kesatria Muda.",
    },
    {
      time: "11.25",
      agenda: "ISHOMA",
      deskripsi:
        "Kesatria Muda dapat melakukan Istirahat, Sholat, dan Makan.",
    },
    {
      time: "13.05",
      agenda: "Jelajah Lembaga",
      deskripsi:
        "Kegiatan pengenalan fasilitas yang ada di Fakultas Teknik.",
    },
    {
      time: "15.30",
      agenda: "Penutupan Hari Pertama",
      deskripsi:
        "Upacara penutupan kegiatan hari pertama PPSMB Kesatria 2023.",
    },
    
  ];
  

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-3 w-[90%] sm:w-[70%] mx-auto lg:max-w-[700px] xl:max-w-[900px] items-center"
    >
        {RUNDOWN.map((item, index) => {
          return (
            <AgendaItem
              key={index}
              time={item.time}
              agenda={item.agenda}
              desc={item.deskripsi}
            />
          );
        })}
    </div>
  );
};

const AgendaItem = ({ time, agenda, desc }) => {
  const [state, setstate] = useState(false);
  return (
    <div
      className="flex w-full flex-col sm:flex-row font-creato items-center xs:justify-start xs:items-start sm:gap-3 cursor-pointer"
      // data-aos="fade-right"
    >
      <div className="p-2 text-center flex-shrink-0 bg-red-200 h-[40px] w-full sm:w-[150px] md:w-[173px] text-neutral-100 rounded-t-xl sm:rounded-xl drop-shadow-lg">
        {time}
      </div>

      <div
        className="w-full"
        onClick={() => {
          setstate(!state);
        }}
      >
        <div className=" bg-red-100 w-full text-neutral-100 rounded-b-xl sm:rounded-xl xs:flex xs:flex-col relative z-[1]">
          <div className="relative w-full p-2 flex xs:flex-row justify-between font-normal items-center select-none">
            <p className="w-max">{agenda}</p>
            <img
              className={
                "h-[10px] duration-200 flex-shrink-0 " + (state ? "rotate-0" : "rotate-180")
              }
              src="/icon-up.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={
            "bg-neutral-100 rounded-b-xl text-red-100 p-2 pt-5 transition-[grid-template-rows] duration-200 translate-y-[-15px] drop-shadow-lg grid select-none " +
            (state ? "grid-rows-[1fr]" : "grid-rows-[0fr] !p-0 !pt-0")
          }
        >
          <p className="overflow-hidden w-full text-justify">{desc}</p>
        </div>
      </div>
    </div>
  );
};
