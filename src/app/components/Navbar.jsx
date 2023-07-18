"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <navbar className="fixed top-0 bg-green-400 w-full h-auto text-neutral-100 flex items-center justify-between px-8 md:px-12 font-creato shadow-[0_10px_30px_rgba(0,75,71,.6)] z-[200]">
      <Link href="/" className="flex items-center gap-[10px]">
        <img src="/logo_cream.png" className="py-3" alt="Logo" />
        <h1 className="font-creato text-[18px] py-7 font-bold hidden sm:block">
          PPSMB KESATRIA 2023
        </h1>
      </Link>

      <div className="hidden lg:flex gap-[50px] font-creato font-bold text-[18px]">
        <Link
          href="/"
          className={
            "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
            (activePage == "/" ? "after:w-full" : "after:w-0")
          }
        >
          Beranda
        </Link>
        <Link
          href="/dokumentasi"
          className={
            "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
            (activePage == "/dokumentasi" ? "after:w-full" : "after:w-0")
          }
        >
          Dokumentasi
        </Link>
        <Link
          href="/agenda"
          className={
            "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
            (activePage == "/agenda" ? "after:w-full" : "after:w-0")
          }
        >
          Agenda
        </Link>
        <Link
          href="/materi"
          className={
            "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
            (activePage == "/materi" ? "after:w-full" : "after:w-0")
          }
        >
          Materi
        </Link>
        <Link
          href="/faq"
          className={
            "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
            (activePage == "/faq" ? "after:w-full" : "after:w-0")
          }
        >
          FAQ
        </Link>
      </div>

      <div className="relative">
        <div
          className="flex lg:hidden flex-col items-center justify-evenly aspect-square cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={
              "w-[25px] duration-300 h-[3px] bg-neutral-100 " +
              (isMenuOpen ? "w-0" : "w-full")
            }
          ></div>
          <div
            className={
              "w-[25px] duration-300 h-[3px] bg-neutral-100 " +
              (isMenuOpen ? "rotate-45" : "")
            }
          ></div>
          <div
            className={
              "w-[25px] duration-300 h-[3px] bg-neutral-100 absolute " +
              (isMenuOpen ? "-rotate-45" : "")
            }
          ></div>
          <div
            className={
              "w-[25px] duration-300 h-[3px] bg-neutral-100 " +
              (isMenuOpen ? "w-0" : "w-full")
            }
          ></div>
        </div>

        <div
          className={
            "absolute flex flex-col items-center gap-3 duration-300 font-bold top-[calc(100%+40px)] right-0 bg-green-400/90 outline outline-neutral-100 outline-1 px-8 py-5 rounded-[9px]" +
            (isMenuOpen ? " translate-x-0" : " translate-x-[200%]")
          }
        >
          <Link
            href="/"
            className={
              "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
              (activePage == "/" ? "after:w-full" : "after:w-0")
            }
          >
            Beranda
          </Link>
          <Link
            href="/dokumentasi"
            className={
              "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
              (activePage == "/dokumentasi" ? "after:w-full" : "after:w-0")
            }
          >
            Dokumentasi
          </Link>
          <Link
            href="/agenda"
            className={
              "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
              (activePage == "/agenda" ? "after:w-full" : "after:w-0")
            }
          >
            Agenda
          </Link>
          <Link
            href="/materi"
            className={
              "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
              (activePage == "/materi" ? "after:w-full" : "after:w-0")
            }
          >
            Materi
          </Link>
          <Link
            href="/faq"
            className={
              "flex flex-col after:bg-neutral-100 after:h-[2px] duration-200 " +
              (activePage == "/faq" ? "after:w-full" : "after:w-0")
            }
          >
            FAQ
          </Link>
        </div>
      </div>
    </navbar>
  );
}
