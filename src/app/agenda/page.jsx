"use client"
import { useState } from "react";
import { Day1 } from "./rundown/day1";
import { Day2 } from "./rundown/day2";


export default function Agenda() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const RUNDOWN_NAVIGATION = [
    {
      title: "Hari Pertama",
      content: <Day1 />
    },
    {
      title: "Hari Kedua",
      content: <Day2 />
    },
  ]
  const ButtonClicked = ({title}) =>{
    return(
      <button className=" my-2 py-2 w-[85px] xs:w-[20%] lg:w-[204.8px] bg-red-200 text-neutral-100 rounded-xl drop-shadow-xl font-creato font-medium">{title}</button>
    )
  }
  const ButtonNotClicked = ({onClick,title})=>{
    return(
      <button onClick={onClick} className="my-2 p-2 w-[85px] xs:w-[20%] lg:w-[204.8px] bg-neutral-100 text-red-200 rounded-xl drop-shadow-xl font-creato">{title}</button>
    )
  }
  return(
    <main className=" bg-pattern-cream bg-repeat py-32 lg:pb-40">
      <h1 className=" font-alstoria text-center text-[48px] text-green-400 mb-7 ">Agenda</h1>
      <div className="flex flex-row place-content-center gap-[1%] mb-12">
      {
            activeIndex === 0 ? <ButtonClicked title={RUNDOWN_NAVIGATION[0].title} /> : <ButtonNotClicked onClick={()=>{setActiveIndex(0)}} title={RUNDOWN_NAVIGATION[0].title}/>
          }
          {
            activeIndex === 1 ? <ButtonClicked title={RUNDOWN_NAVIGATION[1].title} /> : <ButtonNotClicked onClick={()=>{setActiveIndex(1)}} title={RUNDOWN_NAVIGATION[1].title}/>
          }
      </div>
      {RUNDOWN_NAVIGATION[activeIndex].content}

      
    </main>
  );
}
