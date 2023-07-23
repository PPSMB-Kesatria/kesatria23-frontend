'use client';

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname != "/tema")
    return (
      <footer className="w-full bg-pattern-green h-auto font-creato text-neutral-100 flex gap-3 lg:gap-9 flex-col :flex-row justify-evenly items-center  md:p-10 lg:p-20 !pt-[10%] relative">
        <img
          src="/TransitionFooter.png"
          alt=""
          className="absolute z-[2] top-0 translate-y-[-50%] left-0 !w-[105%]"
        /> 
        <div className="justify-between md:flex md:flex-row md:w-full lg:h-[250px]">
          <div className="px-2 place-content-center flex flex-row gap-4 items-center text-left">
            <img 
              className="p-0 max-xs:h-[108px] max-xs:w-auto w-[200px]"
              src="/logo_cream_lg.png"
              alt=""
            />
            <div className=" max-xs:text-[10px] md:w-[200px]">
              <p className=" max-xs:text-base font-creato italic font-bold text-lg md:mb-4">PPSMB Kesatria 2023</p>
              <p className="md:mb-4 font-medium">Fakultas Teknik</p>
              <p className="md:mb-4">Jalan Grafika <br />
                Mlati, Yogyakarta, 55281, ID</p>
              <p className="">https://ppsmb.ft.ugm.ac.id</p>
            </div>
          </div>
          <div className=" py-4 px-8 items-center justify-center md:w-[200px] lg:w-auto lg:h-[172px]">
            
            <p className=" font-creato font-bold italic text-lg pt-3 my-2 text-left max-md:hidden">Official Account:</p>
            <div className="mb-10 gap-1 flex justify-between  place-items-center md:gap-10 md:w-[100px] md:grid grid-cols-3 lg:grid-cols-2 lg:gap-2 lg:gap-x-10 lg:w-fit lg:place-items-start">
              <div className="flex items-center gap-1">
                <div className="bg-neutral-100 w-[40px] max-xs:w-[30px] rounded-[5px] aspect-square"></div>
                <p className="font-creato font-normal italic text-base  max-lg:hidden ">ppsmb_kesatria</p>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="bg-neutral-100 w-[40px] max-xs:w-[30px] rounded-[5px] aspect-square"></div>
                <p className="font-creato font-normal italic text-base max-lg:hidden">ppsmb_kesatria</p>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="bg-neutral-100 w-[40px] max-xs:w-[30px] rounded-[5px] aspect-square"></div>
                <p className="font-creato font-normal italic text-base max-lg:hidden">ppsmb_kesatria</p>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="bg-neutral-100 w-[40px] max-xs:w-[30px] rounded-[5px] aspect-square"></div>
                <p className="font-creato font-normal italic text-base max-lg:hidden">ppsmb_kesatria</p>
              </div>
              <div className="flex items-center gap-1 ">
                <div className="bg-neutral-100 w-[40px] max-xs:w-[30px] rounded-[5px] aspect-square"></div>
                <p className="font-creato font-normal italic text-base max-lg:hidden">ppsmb_kesatria</p>
              </div>
              
            </div>
            
          </div>
        </div>
      </footer>
      /*
      <footer className="w-full bg-pattern-green h-auto font-creato text-neutral-100 flex gap-3 lg:gap-9 flex-col :flex-row justify-evenly items-center md:p-10 lg:p-20 !pt-[10%] relative">
        <img
          src="/TransitionFooter.png"
          alt=""
          className="absolute z-[2] top-0 translate-y-[-50%] left-0 !w-[105%]"
        />
        <div className="flex flex-col justify-between w-full px-20">
          <div className="flex justify-between flex-col md:gap-4 lg:gap-20 lg:flex-row place-items-center">
            <div className="flex flex-col sm:flex-row items-center lg:w-auto md:gap-10 lg:gap-20 place-items-center">
              <img 
              className="p-10 sm:p-0 w-[200px] "
              src="/logo_cream_lg.png"
              alt=""
              />
              <div className="flex flex-col gap-9">
                <h1 className="text-center md:text-left font-creato font-black italic text-[14px] md:text-[22px] 2xl:text-[30px] leading-[100%]">PPSMB Kesatria 2023</h1>
                <h2 className="font-creato font-bold italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%] text-left">Fakultas Teknik</h2>
                <p className="font-creato font-normal italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%] text-left">
                Jalan Grafika <br />
                Mlati, Yogyakarta, 55281, ID
                </p>
                <a
                  className="font-creato font-normal italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%] text-left"
                  href="https://ppsmb.ft.ugm.ac.id"
                >
                  https://ppsmb.ft.ugm.ac.id
                </a>
            </div>
            
                  </div>
                  <div className="mt-12 2xl:mt-0 flex-col">
              <p className="font-creato font-semibold italic text-[14px] md:text-[22px] 2xl:text-[30px] leading-[100%] text-center lg:text-left">
                Official Accounts:
              </p>
              <div className="mb-10 grid  md:grid-cols-2 gap-5 lg:gap-x-8 mt-5 place-items-center lg:place-items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                </div>
                <div className="flex items-center px-0 gap-3">
                  <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                  <p className="font-creato font-normal italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%]">
                    ppsmb_kesatria
                  </p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                    <p className="font-creato font-normal italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%]">
                    ppsmb_kesatria
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-neutral-100 w-[40px] rounded-[5px] aspect-square"></div>
                    <p className="font-creato font-normal italic text-[12px] md:text-[16px] 2xl:text-[20px] leading-[100%]">
                      ppsmb_kesatria
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    */
    );
}
