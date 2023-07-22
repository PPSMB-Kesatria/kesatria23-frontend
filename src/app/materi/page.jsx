"use client"
import { useState } from 'react'
import { PersonalBranding } from "./contents/PersonalBranding"
import { FasilitasFakultas } from "./contents/FasilitasFakultas"
import { DummyContent } from './contents/DummyContent'

export default function Materi() {
  const [activeIndex, setActiveIndex] = useState(0)
  const MATERI_NAVIGATION = [
    {
      title: "Personal Branding",
      content: <PersonalBranding />
    },
    {
      title: "Fasilitas Fakultas",
      content: <FasilitasFakultas />
    },
    {
      title: "Dummy Content",
      content: <DummyContent />
    },
  ]

  const ButtonClicked = ({title}) => {
    return(
      <div className="border flex cursor-pointer">
        <div className={"relative z-[10] px-10 py-2.5 rounded-2xl font-creato font-bold "+
        "shadow-md shadow-black/30 text-neutral-100 outline outline-[6px] outline-neutral-100"}>
          {title}
        </div>
        <div className={"absolute z-[9] mt-[5px] ml-[3px] px-10 py-2.5 rounded-2xl font-creato text-transparent font-bold shadow-md shadow-black/30 outline outline-[6px] outline-red-100"}>
          {title}
        </div>
      </div>
    )
  }

  const ButtonNotClicked = ({onClick, title}) => {
    return(
      <div onClick={onClick} className="border flex cursor-pointer">
        <div className={"relative z-[10] px-10 py-2.5 rounded-2xl font-creato font-bold shadow-md shadow-black/30 text-green-400 bg-neutral-100"}>
          {title}
        </div>
        <div className={"absolute z-[9] mt-[5px] ml-[3px] px-10 py-2.5 rounded-2xl font-creato text-transparent font-bold shadow-md shadow-black/30 bg-red-100"}>
          {title}
        </div>
      </div>
    )
  }

  return(
    <main className="bg-pattern-green min-h-screen bg-repeat bg-contain gap-4 flex flex-col items-center py-36">
      <h1 className="font-alstoria text-6xl text-neutral-100">Materi</h1>
      <div className="flex flex-row gap-10 justify-center w-4/5">
        <aside className="space-y-8 min-w-fit flex flex-col items-center border w-1/5">
          {
            activeIndex === 0 ? <ButtonClicked title={MATERI_NAVIGATION[0].title} /> : <ButtonNotClicked onClick={()=>{setActiveIndex(0)}} title={MATERI_NAVIGATION[0].title}/>
          }
          {
            activeIndex === 1 ? <ButtonClicked title={MATERI_NAVIGATION[1].title} /> : <ButtonNotClicked onClick={()=>{setActiveIndex(1)}} title={MATERI_NAVIGATION[1].title}/>
          }
          {
            activeIndex === 2 ? <ButtonClicked title={MATERI_NAVIGATION[2].title} /> : <ButtonNotClicked onClick={()=>{setActiveIndex(2)}} title={MATERI_NAVIGATION[2].title}/>
          }
        </aside>
        <content className="min-h-screen border max-w-6xl border-red-500 space-y-4 w-4/5">
          {MATERI_NAVIGATION[activeIndex].content}
        </content>
      </div>
    </main>
  )
}