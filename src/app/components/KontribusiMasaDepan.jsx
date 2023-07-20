export default function KontribusiMasaDepan() {
  return (
    <section className="bg-pattern-cream min-h-screen relative flex flex-col justify-center items-center text-green-400">
      <img
        src="/TransitionGreenEnd.png"
        alt=""
        className="w-full absolute top-0 translate-y-[-50%] drop-shadow-[0_10px_10px_rgba(0,0,0,.5)]"
      />
      <img
            className="max-lg:hidden opacity-50 absolute bottom-0 left-[-100px] h-[30%]"
            src="/silhouette_crane.svg"
            width="40%"
            alt=""
          />
      <h1 className="font-alstoria text-[45px] 2xl:text-[60px] text-center mb-7 mt-5 pt-16 md:mt-10">
        Kontribusi Di Masa Depan
      </h1>
      <p className="text-[18px] sm:text-[20px] 2xl:text-[25px] px-5 font-creato font-normal max-w-[923px] text-center">
        Gamadhira berasal dari kata "gamadi" yang berarti perjalanan dan kata
        "dhira" yang berarti kebijaksanaan, kecerdasan, dan keberagaman.
        "Gamadhira" layaknya burung merak yang identik dengan keberagaman,
        ketangguhan, dan keindahan. Dengan Gamadhira diharapkan Kesatria Muda
        memiliki perjalanan yang indah.
      </p>

      <div className="mt-[50px] lg:mt-[30px] flex flex-col-reverse lg:flex-row w-full items-center 2xl:justify-center mb-[50px] lg:mb-[30px]">
        <div className="p-0 sm:p-5 lg:p-20 2xl:p-10 w-[90%] lg:w-1/2 max-w-[600px] lg:max-w-[825px] flex-shrink-0">
          <div className="aspect-[76.7/48] bg-green-400 p-[15px] md:p-[25px] rounded-[40px]">
            <div className="w-full h-full border-box bg-red-500 border-[#6DD5B5] border-[15px] rounded-[20px]"></div>
          </div>
        </div>
        <div className="bg-green-400 text-left max-w-[940px] mb-5 lg:mb-0 p-10 lg:pl-20 w-[90%] lg:w-1/2 h-fit rounded-r-[40px] lg:rounded-r-none 2xl:rounded-r-[40px] rounded-l-[40px] text-neutral-100">
          <h2 className="font-creato text-[40px] 2xl:text-[60px] italic font-bold leading-[100%]">
            Pengenalan Karya Aplikatif
          </h2>
          <p className="text-[18px] mt-3 sm:text-[20px] 2xl:text-[25px] font-creato text-justify">
            Gamadhira berasal dari kata "gamadi" yang berarti perjalanan dan
            kata "dhira" yang berarti kebijaksanaan, kecerdasan, dan
            keberagaman. "Gamadhira" layaknya burung merak yang identik dengan
            keberagaman, ketangguhan, dan keindahan. Dengan Gamadhira diharapkan
            Kesatria Muda memiliki perjalanan yang indah.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start 2xl:justify-center mb-[100px] md:mb-[10%]">
        <div>
          <div className="max-w-[940px] px-10 text-green-400 sm:w-[90%] h-fit rounded-l-[40px] xl:rounded-l-none 2xl:rounded-l-[40px] rounded-r-[40px]">
            <h2 className="font-creato text-[40px] 2xl:text-[60px] italic font-bold leading-[100%] mb-5">
              Modul 3 - Karya Aplikatif
            </h2>
            <p className="text-[18px] sm:text-[20px] 2xl:text-[25px] text-justify">
              Dalam materi Karya Aplikatif ini, Kesatria Muda akan mempelajari
              tentang bagaimana cara membuat abstrak, poster, dan presentasi
              yang benar dalam menyampaikan ide karya yang dimiliki. Melalui
              modul ini, Kesatria Muda juga akan dikenalkan dengan kegiatan
              PKM-PIMNAS (Program Kreativitas Mahasiswa - Pekan Ilmiah Mahasiswa
              Nasional).
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-5 lg:px-20 2xl:px-10 w-[90%] lg:w-1/2 max-w-[825px] flex-shrink-0">
          <div className="aspect-[210/297] bg-black p-[18px] ">
            <div className="w-full h-full border-box bg-green-400 "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
