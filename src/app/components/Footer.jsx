'use client';

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname != "/tema")
    return (
      <footer className="w-full bg-pattern-green h-auto font-creato text-neutral-100 flex gap-3 lg:gap-9 flex-col lg:flex-row justify-evenly items-center lg:items-start p-10 lg:p-20 !pt-[10%] relative">
        <img
          src="/TransitionFooter.png"
          alt=""
          className="absolute z-[2] top-0 translate-y-[-50%] left-0 !w-[105%]"
        />
        <div className="flex-shrink-0">
          <img className="p-10 sm:p-0" src="/logo_cream_lg.png" alt="" />
        </div>
        <div className="flex flex-col gap-7 lg:gap-9">
          <h1 className="text-center md:text-left font-creato font-black italic text-[35px] md:text-[40px] 2xl:text-[50px] leading-[100%]">
            PPSMB Kesatria 2023
          </h1>

          <div className="flex justify-between flex-col 2xl:flex-row 2xl:gap-[250px]">
            <div className="flex flex-col gap-9">
              <h1 className="font-creato font-bold italic text-[20px] md:text-[25px] 2xl:text-[30px] leading-[100%] text-center lg:text-left">
                Fakultas Teknik
              </h1>
              <p className="font-creato font-normal italic text-[20px] md:text-[25px] 2xl:text-[30px] leading-[100%] text-center lg:text-left">
                Jalan Grafika <br />
                Mlati, Yogyakarta, 55281, ID
              </p>
              <a
                className="font-creato font-normal italic text-[20px] md:text-[25px] 2xl:text-[30px] leading-[100%] text-center lg:text-left"
                href="https://ppsmb.ft.ugm.ac.id"
              >
                https://ppsmb.ft.ugm.ac.id
              </a>
            </div>

            <div className="mt-12 2xl:mt-0">
              <p className="font-creato font-normal italic text-[20px] md:text-[25px] 2xl:text-[30px] leading-[100%] text-center lg:text-left">
                Official Accounts
              </p>
              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-x-8 mt-5 place-items-center lg:place-items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[15px] 2xl:text-[16px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[15px] 2xl:text-[16px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[15px] 2xl:text-[16px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[15px] 2xl:text-[16px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[15px] 2xl:text-[16px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
