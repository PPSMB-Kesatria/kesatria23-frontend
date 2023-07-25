import Link from "next/link";

export default function KontribusiMasaDepan() {
  return (
    <section className="bg-pattern-cream min-h-screen relative flex flex-col justify-center items-center text-green-400 pb-[100px]">
      <img
        src="/TransitionGreenEnd.png"
        alt=""
        className="w-full absolute top-0 translate-y-[-50%] drop-shadow-[0_10px_10px_rgba(0,0,0,.5)]"
      />
      <img
        data-aos="fade-up"
        className="max-lg:hidden !opacity-50 absolute bottom-0 left-[-100px] h-[30%]"
        src="/silhouette_crane.svg"
        width="40%"
        alt=""
      />
      <h1
        data-aos="fade-up"
        className="font-alstoria text-[45px] 2xl:text-[60px] text-center mt-5 md:mt-10 leading-[100%] pt-20"
      >
        Kontribusi di Masa Depan
      </h1>
      <h2
        data-aos="fade-up"
        className="text-[30px] leading-[1] md:text-3xl font-alstoria text-center mb-7"
      >
        Chapter{" "}
        <span className="font-serif font-bold">
          3: <br className="md:hidden" />
        </span>{" "}
        Aku di masa depan
      </h2>
      <p
        data-aos="fade-up"
        className="text-[18px] sm:text-[20px] 2xl:text-[25px] px-5 font-creato font-normal max-w-[923px] text-center"
      >
        Hallo Kesatria Muda! Tidak terasa kita sudah mencapai akhir dari
        perjalanan di PPSMB Kesatria ini, yaitu Chapter 3 : Aku di Masa Depan.
        <br />
        <br />
        Pada chapter 3 ini Kesatria Muda akan diajak untuk mengeksplorasi
        potensi diri dan merancang rencana yang dituangkan dalam bentuk Lifeplan
        singkat yang ingin dilakukan selama masa perkuliahan. Lifeplan ini
        berisi target-target yang ingin dicapai di berbagai aspek, juga
        identifikasi hambatan yang mungkin akan ditemui. Selain itu, untuk
        menunjang kemampuan berpikir kritis dan melatih problem solving, chapter
        ini juga berisi Modul Karya Aplikatif tentang berbagai study kasus dalam
        lingkungan teknik yang bisa dipelajari Kesatria Muda sebelum kita
        bertemu secara offline di PPSMB Kesatria.
      </p>

      <div className="pt-12 text-neutral-100 relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:justify-center lg:gap-8 xl:gap-20 items-center mx-[5%] lg:mx-0 mb-[100px]">
        <div data-aos="fade-right" className="bg-green-400 grid place-items-center h-full border-green-200 border-[12px] border-box rounded-[30px] gap-5 md:rounded-[35px] w-full sm:max-w-[600px] lg:max-w-[450px] xl:max-w-[500px] py-8">
          <h1 className="font-alstoria text-[30px] 2xl:text-[40px] text-center leading-[100%]">
            Pengenalan Life Plan
          </h1>
          <p className="font-creato text-[20px] 2xl:text-[24px] font-medium w-[90%] text-center">
            Setelah mengetahui skala prioritas selama perkuliahan, Kesatria Muda
            diajak untuk membuat life plan. Life plan adalah rencana atau
            strategi yang dijadikan patokan seseorang untuk mencapai tujuan
            dalam hidupnya. Life plan membantu seseorang menjaga fokus dan
            memberikan arah yang jelas dalam hidupnya.
          </p>
          <Link
            href="/materi?materi=4"
            className="block cursor-pointer bg-neutral-100 w-fit font-bold italic text-green-400 font-creato rounded-[20px] text-[18px] sm:text-[20px] 2xl:text-[25px] px-7 py-3"
          >
            Baca Modul
          </Link>
        </div>

        <div data-aos="fade-left" className="bg-green-400 grid place-items-center h-max border-green-200 border-[12px] border-box rounded-[30px] gap-5 md:rounded-[35px] w-full sm:max-w-[600px] lg:max-w-[450px] xl:max-w-[500px] py-8">
          <h1 className="font-alstoria text-[30px] 2xl:text-[40px] text-center leading-[100%]">
            Pengenalan Karya Aplikatif
          </h1>
          <p className="font-creato text-[20px] 2xl:text-[24px] font-medium w-[90%] text-center">
            Kesatria Muda diharapkan mampu mengaplikasikan pengetahuan yang
            didapat selama menempuh perkuliahan untuk menyelesaikan
            masalah-masalah yang ada di masyarakat. Oleh karena itu, Kesatria
            Muda akan diajak untuk berlatih, berdiskusi, dan berkolaborasi
            bersama untuk menyelesaikan studi kasus yang diberikan.
          </p>
          <Link
            href="/materi?materi=8"
            className="block cursor-pointer bg-neutral-100 w-fit font-bold italic text-green-400 font-creato rounded-[20px] text-[18px] sm:text-[20px] 2xl:text-[25px] px-7 py-3"
          >
            Baca Modul
          </Link>
        </div>
      </div>
    </section>
  );
}
