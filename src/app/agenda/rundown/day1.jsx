"use client"
import { useState } from "react";

export const Day1 = () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const RUNDOWN = [
    {
      time: "00.01",
      agenda: "Upacara Pembukaan",
      deskripsi:"Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy"
    },
    {
      time: "00.02",
      agenda: "Kepemanduan",
      deskripsi:"lorem100"
    },
    {
      time: "00.03",
      agenda: "Jalan-Jalan Teknik",
      deskripsi:"Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy"
    },
    {
      time: "00.04",
      agenda: "ISHOMA",
      deskripsi:"Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy"
    },
    {
      time: "00.05",
      agenda: "Jelajah Lembaga",
      deskripsi:"Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy"
    },
    {
      time: "00.06",
      agenda: "Games Angkatan",
      deskripsi:"Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy.<br/>Apa lagi ya."
    },
    {
      time: "00.07",
      agenda: "Penutupuan Hari Pertama",
      deskripsi:"Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy"
    },
  ];
  const ButtonClicked = ({time,agenda,deskripsi})=>{
    return(
      <div className="flex font-creato gap-3 place-content-center">
        <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">
          {time}
        </div>
        <div className=" w-[175px] xs:w-[66.7939%]">
        <div className=" bg-red-100  text-neutral-100 rounded-t-xl xs:flex xs:flex-col">
          <div className=" p-2 xs:flex xs:flex-row xs:justify-between font-normal">
            <p>{agenda}</p>
            <button className="max-xs:hidden"><img className="h-[10px]" src="/icon-up.png" alt="" /></button>
          </div>
        </div>
        <div className="bg-neutral-100 rounded-b-xl text-red-100 p-2 drop-shadow-lg">{deskripsi}
          </div>
        </div>
        
      </div>
    );
  };
  const ButtonNotClicked = ({onClick,time,agenda})=>{
    return(
      <div onClick={onClick} className="flex font-creato gap-3 place-content-center">
        <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-l">
          {time}
        </div>
        <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg xs:flex xs:flex-col">
          <div className="xs:flex xs:flex-row xs:justify-between">
            <p>{agenda}</p>
            <button className="max-xs:hidden"><img className="h-[10px]" src="/icon-down.png" alt="" /></button>
          </div>
          
        </div>
      </div>
    )
  };
  
  return(
    <div data-aos="fade-up" className="flex flex-col gap-3 xs:w-full xs:px-[81.5px]">
      {
            activeIndex === 0 ? <ButtonClicked time={RUNDOWN[0].time} agenda={RUNDOWN[0].agenda} deskripsi={RUNDOWN[0].deskripsi}/> : <ButtonNotClicked onClick={()=>{setActiveIndex(0)}} time={RUNDOWN[0].time} agenda={RUNDOWN[0].agenda}/>
      }
      {
            activeIndex === 1 ? <ButtonClicked time={RUNDOWN[1].time} agenda={RUNDOWN[1].agenda} deskripsi={RUNDOWN[1].deskripsi}/> : <ButtonNotClicked onClick={()=>{setActiveIndex(1)}} time={RUNDOWN[1].time} agenda={RUNDOWN[1].agenda}/>
      }
      {
            activeIndex === 2 ? <ButtonClicked time={RUNDOWN[2].time} agenda={RUNDOWN[2].agenda} deskripsi={RUNDOWN[2].deskripsi}/> : <ButtonNotClicked onClick={()=>{setActiveIndex(2)}} time={RUNDOWN[2].time} agenda={RUNDOWN[2].agenda}/>
      }
      {
            activeIndex === 3 ? <ButtonClicked time={RUNDOWN[3].time} agenda={RUNDOWN[3].agenda} deskripsi={RUNDOWN[3].deskripsi}/> : <ButtonNotClicked onClick={()=>{setActiveIndex(3)}} time={RUNDOWN[3].time} agenda={RUNDOWN[3].agenda}/>
      }
      {
            activeIndex === 4 ? <ButtonClicked time={RUNDOWN[4].time} agenda={RUNDOWN[4].agenda} deskripsi={RUNDOWN[4].deskripsi}/> : <ButtonNotClicked onClick={()=>{setActiveIndex(4)}} time={RUNDOWN[4].time} agenda={RUNDOWN[4].agenda}/>
      }
      {
            activeIndex === 5 ? <ButtonClicked time={RUNDOWN[5].time} agenda={RUNDOWN[5].agenda} deskripsi={RUNDOWN[5].deskripsi}/> : <ButtonNotClicked onClick={()=>{setActiveIndex(5)}} time={RUNDOWN[5].time} agenda={RUNDOWN[5].agenda}/>
      }
      {
            activeIndex === 6 ? <ButtonClicked time={RUNDOWN[6].time} agenda={RUNDOWN[6].agenda} deskripsi={RUNDOWN[6].deskripsi}/> : <ButtonNotClicked onClick={()=>{setActiveIndex(6)}} time={RUNDOWN[6].time} agenda={RUNDOWN[6].agenda}/>
      }
    </div>
    /* 
        <div className="flex flex-col gap-3 xs:w-full xs:px-[81.5px]">
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.00</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg xs:flex xs:flex-col">
            <div className="xs:flex xs:flex-row xs:justify-between">
              <p>Upacara Pembukaan</p>
              <button className="max-xs:hidden" onClick={toogle}>V</button>
            </div>
            <div className="bg-neutral-100 rounded-b-xl text-red-100">Rincian / Deskripsi Kegiatan, Keperluan yang perlu di bawa. Tempat Kegiata, dsb jika perlu ygy</div>
          </div>
        </div>
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.01</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg">Kepemanduan</div>
        </div>
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.02</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg">Jalan-Jalan Teknik</div>
        </div>
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.03</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg">Jalan-Jalan Teknik Lagi</div>
        </div>
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.04</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg">ISHOMA</div>
        </div>
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.05</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg">Jelajah Lembaga</div>
        </div>
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.06</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg">Games Angkatan</div>
        </div>
        <div className="flex font-creato gap-3 place-content-center">
          <div className="p-2 text-center bg-red-200 h-[40px] w-[75px] xs:w-[28.626%] md:w-[173px] text-neutral-100 rounded-xl drop-shadow-lg">00.07</div>
          <div className="p-2 bg-red-100 w-[175px] xs:w-[66.7939%] text-neutral-100 rounded-xl drop-shadow-lg">Penutupan Hari Pertama</div>
        </div>
      </div>
      */
    )
}