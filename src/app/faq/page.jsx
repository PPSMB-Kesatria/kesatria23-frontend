"use client"

import { RiArrowDownSLine } from "react-icons/ri"
import { useState } from "react"
import { listPertanyaanUmum, listPertanyaanMateri } from "./listPertanyaan"

export default function Faq() {
  const [userInput, setUserInput] = useState("")
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] = useState(listPertanyaanUmum)
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] = useState(listPertanyaanMateri)

  const checkSearchResult = () => {
    let questionUmum = []
    let questionMateri = []
    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase()
      if (_question.includes(userInput.toUpperCase())){
        questionUmum.push(item)
      }
    })
    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase()
      if (_question.includes(userInput.toUpperCase())){
        questionMateri.push(item)
      }
    })
    setFoundPertanyaanUmum(questionUmum)
    setFoundPertanyaanMateri(questionMateri)
  }

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum)
      setFoundPertanyaanMateri(listPertanyaanMateri)
    }else{
      checkSearchResult()
    }
    
  }

  const QAPlaceholder = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false)

    return (
      <div onClick={() => {
        setIsActive(!isActive)
        }} className="flex flex-col border cursor-pointer">
        <div className={"flex flex-row gap-4 items-center px-5 py-2 text-green-400 font-creato bg-neutral-100 " + 
        (
          isActive ? "rounded-t-lg" : "rounded-lg"
        )}>
          <div className="font-bold">Q:</div>
          <div className="flex flex-row justify-between border w-full">
            <div className="w-[90%] text-justify">{question}</div>
            <RiArrowDownSLine size={24}/>
          </div>
        </div>
        <div className={"flex flex-row gap-4 bg-green-100 text-green-400 font-creato text-base px-5 py-2 " +
      (
        isActive ? "rounded-b-lg":"hidden"
      )}>
        <div className="font-bold">A:</div>
        <div>{answer}</div>
        </div>
      </div>
    )
  }

  return(
    <div className="py-36 min-h-screen bg-pattern-cream-2 bg-repeat bg-contain flex flex-col items-center justify-center border border-red-500">
      <h1 className="font-alstoria text-4xl text-green-400 text-center">Frequently Asked Questions</h1>
      <main className="w-[90%] md:w-2/3 mt-10 space-y-16">
        {/*Search input*/}
        <form onSubmit={e => handleSubmit(e)}>   
          <label for="default-search" class="mb-2 text-sm font-medium text-neutral-100 sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input onChange={(e)=>handleChange(e)} value={userInput} type="search" id="default-search" class="block w-full p-4 pl-10 text-base text-neutral-100 font-creato border border-green-400 rounded-lg bg-green-400 focus:outline-none focus:ring-green-200 focus:border-green-200" placeholder="Silakan ketik pertanyaanmu di sini..." />
            <button type="submit" class="text-green-400 absolute right-2.5 bottom-2.5 bg-neutral-100 hover:bg-red-100 hover:text-neutral-100 focus:outline-none active:scale-95 font-creato font-medium rounded-lg text-base px-4 py-2">Search</button>
          </div>
        </form>

        {/*Accordions group*/}
        <div about="Pertanyaan umum" className="bg-green-400 w-full rounded-lg flex flex-col items-center pt-5 pb-16 px-10">
          <h1 className="font-creato font-extrabold text-xl text-neutral-100">Pertanyaan umum</h1>
          <div className="w-full space-y-5 mt-5">
            {
              foundPertanyaanUmum.map((item, i) => {
                return (
                  <QAPlaceholder key={i} question={item.question} answer={item.answer}/>
                )
              })
            }
          </div>
        </div>
        <div about="Pertanyaan Materi" className="bg-green-400 w-full rounded-lg flex flex-col items-center pt-5 pb-16 px-10">
          <h1 className="font-creato font-extrabold text-xl text-neutral-100">Seputar Materi</h1>
          <div className="w-full space-y-5 mt-5">
            {
              foundPertanyaanMateri.map((item, i) => {
                return (
                  <QAPlaceholder key={i} question={item.question} answer={item.answer}/>
                )
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}