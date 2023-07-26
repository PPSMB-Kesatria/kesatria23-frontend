"use client";
import { useState } from "react";

export const Day2 = () => {
  const RUNDOWN = [
    {
      time: "06.45",
      agenda: "Pengecekan Atribut",
      deskripsi:
        "Kesatria Muda akan melakukan pengecekan atribut sebelum memulai melaksanakan kegiatan.",
    },
    {
      time: "07.45",
      agenda: "Pameran Karya",
      deskripsi:
        "Pengenalan karya-karya yang ada di Fakultas Teknik.",
    },
    {
      time: "09.25",
      agenda: "Talkshow",
      deskripsi: "Kegiatan bincang-bincang yang akan diberikan oleh tamu undangan kepada Kesatria Muda.",
    },
    {
      time: "10.50",
      agenda: "Kepemanduan",
      deskripsi:
        "Kegiatan dan materi yang akan diberikan oleh pemandu kepada Kesatria Muda.",
    },
    {
      time: "11.25",
      agenda: "Ishoma",
      deskripsi:"Kesatria Muda dapat melakukan Istirahat, Sholat, dan Makan.",
    },
    {
      time: "12.40",
      agenda: "Karya Aplikatif",
      deskripsi:
        "Kesatria Muda menciptakan karya yang dapat diaplikasikan di Fakultas Teknik.",
    },
    {
      time: "13.50",
      agenda: "Formasi Angkatan",
      deskripsi:
        "-",
    },
    {
      time: "13.50",
      agenda: "Upacara Penutuban PPSMB Kesatria 2023",
      deskripsi:
        "Rangkaian Upacara Penutupan Kesatria yang dilakukan oleh Kesatria Muda.",
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
