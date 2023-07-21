"use client"
import { useEffect, useState } from 'react'
import { CustomButton } from './components/CustomButton'
import { PersonalBranding } from "./contents/PersonalBranding"
import { FasilitasFakultas } from "./contents/FasilitasFakultas"

export default function Materi() {
  
  const MATERI_NAVIGATION = [
    {
      title: 'Personal Branding',
      content: <PersonalBranding />,
      isClicked: true,
    },
    {
      title: 'Fasilitas Fakultas',
      content: <FasilitasFakultas />,
      isClicked: false,
    },
  ]

  const [currentPage, setCurrentPage] = useState(MATERI_NAVIGATION[0])

  const handlePageChange = (idx) => {
    setCurrentPage(MATERI_NAVIGATION[idx])
  }


  return(
    <main className="bg-pattern-green min-h-screen bg-repeat bg-contain gap-4 flex flex-col items-center py-36">
      <h1 className="font-alstoria text-6xl text-neutral-100">Materi</h1>
      <div className="flex flex-row gap-10 justify-center w-4/5">
        <aside className="space-y-8 min-w-fit flex flex-col items-center border w-1/5">
          <button onClick={()=>{handlePageChange(0)}}>
            <CustomButton isClicked={MATERI_NAVIGATION[0].isClicked}>Personal Branding</CustomButton>
          </button>
          <button onClick={()=>{handlePageChange(1)}}>
            <CustomButton isClicked={MATERI_NAVIGATION[1].isClicked}>Fasilitas Fakultas</CustomButton>
          </button>
        </aside>
        <content className="min-h-screen border max-w-6xl border-red-500 space-y-4 w-4/5">
          <div id="content">
            {currentPage.content}
          </div>
        </content>
      </div>
    </main>
  )
}