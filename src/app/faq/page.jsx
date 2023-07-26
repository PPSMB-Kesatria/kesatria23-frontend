"use client";

import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { listPertanyaanUmum, listPertanyaanMateri } from "./listPertanyaan";
import AOS from "aos";
import Image from "next/image";

export default function Faq() {
  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  })

  const checkSearchResult = () => {
    let questionUmum = [];
    let questionMateri = [];
    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionUmum.push(item);
      }
    });
    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionMateri.push(item);
      }
    });
    setFoundPertanyaanUmum(questionUmum);
    setFoundPertanyaanMateri(questionMateri);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
    } else {
      checkSearchResult();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative py-36 min-h-screen bg-pattern-cream-2 bg-repeat bg-contain flex flex-col items-center justify-center">
        <h1
          data-aos="fade-up"
          className="relative z-[30] font-alstoria text-4xl text-green-400 text-center"
        >
          Frequently Asked Questions
        </h1>
        <main className="w-[90%] md:w-2/3 mt-10 space-y-16">
          {/*Search input*/}
          <form
            data-aos="fade-up"
            data-aos-delay="200"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-neutral-100 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => handleChange(e)}
                value={userInput}
                type="search"
                id="default-search"
                className="relative z-[80] block w-full p-4 pl-10 text-base text-neutral-100 font-creato border border-green-400 rounded-lg bg-green-400 focus:outline-none focus:ring-green-200 focus:border-green-200"
                placeholder="Cari di sini..."
              />
              <button
                type="submit"
                className="text-green-400 hidden md:block absolute z-[81] right-2.5 bottom-2.5 bg-neutral-100 hover:bg-red-100 hover:text-neutral-100 focus:outline-none active:scale-95 font-creato font-medium rounded-lg text-base px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>

          {/*Accordions group*/}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            about="Pertanyaan umum"
            className="bg-green-400 w-full rounded-lg flex relative z-[100] flex-col items-center pt-5 pb-16 px-10"
          >
            <h1 className="font-creato font-extrabold text-xl text-neutral-100">
              Pertanyaan umum
            </h1>
            <div className="w-full space-y-5 mt-5">
              {foundPertanyaanUmum.map((item, i) => {
                return (
                  <QAPlaceholder
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </div>
          </div>
          {/* <div
            about="Pertanyaan Materi"
            className="bg-green-400 w-full rounded-lg flex flex-col items-center pt-5 pb-16 px-10"
          >
            <h1 className="font-creato font-extrabold text-xl text-neutral-100">
              Seputar Materi
            </h1>
            <div className="w-full space-y-5 mt-5">
              {foundPertanyaanMateri.map((item, i) => {
                return (
                  <QAPlaceholder
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </div>
          </div> */}
        </main>
      </div>
      <div className="absolute h-full z-[3] w-28 md:w-48 -mt-[12rem] sm:-mt-[15rem] md:-mt-96 lg:-mt-48 self-start">
        <Image
          src="/buwong_merah.svg"
          fill
        />
      </div>
      <div className="absolute h-full w-20 mt-4 md:mt-0 md:w-28 z-[5] self-end">
        <Image
          src="/Bunga_kanan.svg"
          fill />
      </div>
      <div className="absolute h-full w-20 flex flex-row items-end mt-[50rem] md:mt-96 md:w-28 z-[0] self-start">
        <Image
          src="/bunga_kiri.svg"
          fill />
      </div>
    </div>
  );
}

const QAPlaceholder = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="flex flex-col cursor-pointer"
    >
      <div
        className={
          "flex flex-row gap-4 items-center px-5 py-2 text-green-400 font-creato bg-neutral-100 relative z-[10] rounded-lg"
        }
      >
        <div className="font-bold">Q:</div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-[90%] text-justify select-none">{question}</div>
          <RiArrowDownSLine
            size={24}
            className={"duration-200 " + (isActive ? "rotate-180" : "rotate-0")}
          />
        </div>
      </div>
      <div
        className={
          "grid duration-200 " +
          (isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
        }
      >
        <div
          className={
            "select-none flex flex-row gap-4 bg-green-100 rounded-lg pt-5 mt-[-15px] text-green-400 font-creato text-base px-5 py-2 overflow-hidden " +
            (isActive ? "" : " !py-0")
          }
        >
          <div className="font-bold overflow-hidden">A:</div>
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};
