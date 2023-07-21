import Image from "next/image";
import Topbar from "../../../public/topbar_hero.svg";

export const metadata = {
  title: "Gamadhira · PPSMB Kesatria 2023",
};

export default function Tema() {
  return (
    <main className="min-h-screen pt-[15vh] pb-[20vh] bg-pattern-green text-neutral-100 relative overflow-x-hidden flex gap-10 justify-center items-start flex-col xl:flex-row">
      <Image
        src={Topbar}
        className=" top-[20px] sm:top-0 absolute w-[100%] min-w-[920px] right-0"
        alt=""
        width={1920}
      />
      <img
        src="/TemaBottom1.png"
        className="w-[105%] absolute bottom-0 left-0 min-w-[920px] z-[2] animate-translate-bnf"
      />
      <img
        src="/TemaBottom2.png"
        className="w-[105%] absolute bottom-0 left-0 min-w-[920px] z-[3] animate-translate-bnf-inv"
      />

      <div className="relative z-[1] flex-shrink-0 flex flex-col justify-center w-full xl:w-fit">
        <h1 className="font-alstoria text-[45px] sm:text-[60px] 2xl:text-[90px] text-center mb-7 mt-5 md:mt-10 leading-[100%]">
          <span className="font-alstoria text-[35px] sm:text-[50px] 2xl:text-[60px] text-center mb-7 mt-5 md:mt-10">
            Selamat Datang <br />
          </span>
          Kesatria Muda{" "}
          <span className="font-creato font-extrabold">2023!</span>
        </h1>
        <div className="grid place-items-center px-5 sm:px-0">
          <div className="bg-green-100 p-2 xs:p-4 rounded-[30px] sm:rounded-[40px] aspect-[56/31.5] w-full max-w-[700px] xl:min-w-[600px] xl:max-w-[650px] 2xl:max-w-[900px]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FUFzqaS0CHQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-[20px] w-full h-full !bg-green-100"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="relative z-[4] text-green-400 w-full md:w-fit md:mx-auto xl:mx-0 px-5 sm:px-0 flex flex-col">
        <div className="bg-neutral-100 rounded-[30px] xs:rounded-[40px] py-10 w-full xs:w-fit xs:mx-auto">
          <h1 className="font-creato text-[14px] sm:text-[16px] 2xl:text-[20px] text-center mb-7 font-black text-shadow-tema">
            Mengenal PPSMB KESATRIA 2023
          </h1>
          <div className="relative w-max xs:w-[90%] max-w-[500px] mx-auto flex items-center justify-between bg-green-400 rounded-full px-2 xs:px-3">
            <div className="h-[45px] sm:h-[50px] 2xl:h-[60px] relative rounded-full aspect-square bg-green-100 after:absolute after:h-full after:bg-green-400 after:aspect-square after:top-0 after:left-0 after:translate-x-[50%]"></div>
            <h1 className="text-center relative z-[2] py-3 text-[24px] xs:text-[27px] sm:text-[35px] 2xl:text-[40px] text-shadow-tema font-creato font-black text-neutral-100">
              GAMADHIRA
            </h1>
            <div className="h-[45px] sm:h-[50px] 2xl:h-[60px] relative rounded-full aspect-square bg-green-100 after:absolute after:h-full after:bg-green-400 after:aspect-square after:top-0 after:left-0 after:translate-x-[-50%]"></div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <div className="bg-white aspect-square rounded-[20px] w-fit grid place-items-center mx-5 shadow-[inset_0_4px_8px_rgba(0,0,0,.3)] mt-10">
              <img
                src="/Logo2022.png"
                alt="Logo Kesatria 2022"
                className="w-[90%] max-w-[200px]"
              />
            </div>
            <div className="grid grid-cols-3 xs:grid-cols-5 xl:grid-cols-5 gap-3 mx-5">
              <div className="bg-white w-[70px] lg:w-[100px] aspect-square rounded-[20px] grid place-items-center p-2 lg:p-0 relative shadow-[inset_0_2px_5px_rgba(0,0,0,.3)]">
                <img src="/Kesatria17.png" alt="Logo 2017" className="absolute h-[70%] lg:h-[75%]" />
              </div>
              <div className="bg-white w-[70px] lg:w-[100px] aspect-square rounded-[20px] grid place-items-center p-2 lg:p-0 relative shadow-[inset_0_2px_5px_rgba(0,0,0,.3)]">
                <img src="/Kesatria18.png" alt="Logo 2018" className="absolute h-[70%] lg:h-[75%]" />
              </div>
              <div className="bg-white w-[70px] lg:w-[100px] aspect-square rounded-[20px] grid place-items-center p-2 lg:p-0 relative shadow-[inset_0_2px_5px_rgba(0,0,0,.3)]">
                <img src="/Kesatria19.png" alt="Logo 2019" className="absolute h-[70%] lg:h-[75%]" />
              </div>
              <div className="bg-white w-[70px] lg:w-[100px] aspect-square rounded-[20px] grid place-items-center p-2 lg:p-0 relative shadow-[inset_0_2px_5px_rgba(0,0,0,.3)]">
                <img src="/Kesatria20.png" alt="Logo 2020" className="absolute h-[80%] lg:h-[90%]" />
              </div>
              <div className="bg-white w-[70px] lg:w-[100px] aspect-square rounded-[20px] grid place-items-center p-2 lg:p-0 relative shadow-[inset_0_2px_5px_rgba(0,0,0,.3)]">
                <img src="/Kesatria21.png" alt="Logo 2021" className="absolute h-[80%] lg:h-[90%]" />
              </div>
            </div>
          </div>

          <p className="w-full mt-5 max-w-[530px] sm:max-w-[560px] md:max-w-[600px] font-creato font-medium text-[16px] sm:text-[18px] 2xl:text-[20px] text-justify mx-auto px-5 md:px-10">
            Antachandra (terbang ke bulan) diawali dengan lepas landas dari
            permukaan bumi yang menggambarkan perjuangan awal atau titik awal
            para Kesatria Muda untuk mengawali kesaksian dan kegiatan mereka di
            lingkungan sivitas akademika UGM. Tidak pernah berhenti terbang
            sebelum sampai ke tujuan, kesatria dapat diartikan sebagai seorang
            pejuang yang tangguh, tetap dalam pendirian, dan konsisten dalam
            segala tindakan yang harus siap sedia bertanggung jawab atas segala
            tindakannya.
          </p>
        </div>
      </div>
    </main>
  );
}
