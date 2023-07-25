"use client";
import { useState } from "react";

export const Day2 = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const RUNDOWN = [
    {
      time: "00.01",
      agenda: "Upacara Pembukaan Kedua",
      deskripsi:
        "Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy",
    },
    {
      time: "00.02",
      agenda: "Kepemanduan",
      deskripsi: "lorem100",
    },
    {
      time: "00.03",
      agenda: "Jalan-Jalan Teknik",
      deskripsi:
        "Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy",
    },
    {
      time: "00.04",
      agenda: "ISHOMA",
      deskripsi:
        "Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy",
    },
    {
      time: "00.05",
      agenda: "Jelajah Lembaga",
      deskripsi:
        "Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy",
    },
    {
      time: "00.06",
      agenda: "Games Angkatan",
      deskripsi:
        "Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy.<br/>Apa lagi ya.",
    },
    {
      time: "00.07",
      agenda: "Penutupuan Hari Pertama",
      deskripsi:
        "Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy",
    },
  ];
  const ButtonClicked = ({ time, agenda, deskripsi }) => {
    return (
      <div className="flex font-creato gap-3 place-content-center cursor-pointer">
        <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">
          {time}
        </div>
        <div className=" w-[175px] xs:w-[66.7939%]">
          <div className=" bg-red-100  text-neutral-100 rounded-t-xl xs:flex xs:flex-col">
            <div className=" p-2 xs:flex xs:flex-row xs:justify-between">
              <p>{agenda}</p>
              <button className="max-xs:hidden">
                <img className="h-[10px]" src="/icon-up.png" alt="" />
              </button>
            </div>
          </div>
          <div className="bg-neutral-100 rounded-b-xl text-red-100 p-2 drop-shadow-lg">
            {deskripsi}
          </div>
        </div>
      </div>
    );
  };
  const ButtonNotClicked = ({ onClick, time, agenda }) => {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer flex font-creato gap-3 place-content-center"
      >
        <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-l">
          {time}
        </div>
        <div className="p-2 bg-red-100 duration-100 hover:shadow-[0_0_10px_rgba(241,116,113)] w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg xs:flex xs:flex-col">
          <div className="xs:flex xs:flex-row xs:justify-between">
            <p>{agenda}</p>
            <button className="max-xs:hidden">
              <img className="h-[10px]" src="/icon-down.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  };

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
                "h-[10px] duration-200 flex-shrink-0 " +
                (state ? "rotate-0" : "rotate-180")
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
          <p className="overflow-hidden w-full">{desc}</p>
        </div>
      </div>
    </div>
  );
};
