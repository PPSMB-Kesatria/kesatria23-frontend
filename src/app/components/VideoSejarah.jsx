import Image from "next/image";
import Link from "next/link";

export default function VideoSejarah() {
  return (
    <section className="relative">
      <div className="absolute h-20">
        <img
          src="/videosejarah_anyaman_atas.png"
          className="bottom-0 left-0 min-w-full z-[2] select-none"
        />
      </div>
      <div className="min-h-screen flex flex-col bg-pattern-cream-2 bg-contain bg-repeat justify-center items-center pt-[5.5rem] pb-36 md:pt-[7rem] lg:pt-36 lg:pb-48 gap-20 lg:gap-15">
        <div
          data-aos="fade-up"
          about="Intro to Section"
          className="text-center w-4/5 md:w-2/3 space-y-5 lg:pt-0"
        >
          <div className="font-alstoria text-green-400">
            <h1 className="text-[40px] leading-[1] md:text-6xl">
              Halo Kesatria Muda<span className="font-serif font-bold">!</span>
            </h1>
            <h2 className="text-[30px] leading-[1] md:text-3xl">
              Selamat datang di Chapter{" "}
              <span className="font-serif font-bold">1:</span> Aku yang dulu
            </h2>
          </div>
          <p className="font-creato font-medium text-[18px] sm:text-[20px] 2xl:text-[25px] text-green-400 text-center">
            Memasuki masa perkuliahan, personal branding merupakan hal yang
            wajib diketahui. Melalui chapter ini, Kesatria Muda akan mempelajari
            cara untuk membangun personal branding yang kuat melalui CV dan
            Analisis SWOT. Selain modul utama mengenai personal branding, disini
            juga terdapat 2 video menarik yaitu “Sejarah Teknik” dan “Sejarah
            Kesatria” yang wajib ditonton sebelum kita bertemu secara offline di
            PPSMB Kesatria nanti.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="bg-red-100 text-neutral-100 rounded-2xl p-2 w-[90%] md:w-4/5 lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1250px] flex flex-col items-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,.3)]"
        >
          <div className="flex flex-col h-max gap-4 md:flex-row items-center pb-5">
            <div className="bg-red-200 font-alstoria md:!h-full w-full rounded-3xl p-4 text-center text-[25px] items-center shadow-[inset_0_2px_5px_rgba(0,0,0,.3)] ">
              <div className="grid place-items-center h-[215px]">
                <h1>
                  Personal Branding{" "}
                  <span className="font-sans font-semibold">&</span> SWOT{" "}
                </h1>
              </div>
            </div>
            <p className="font-creato text-[18px] sm:text-[20px] 2xl:text-[25px] w-full md:w-[60%] flex-shrink-0 text-justify px-2">
              Personal Branding merupakan salah satu hal krusial bagi mahasiswa
              baru karena dapat menjadi salah satu alat pemasaran kemampuan yang
              dimiliki. Personal Branding dapat dilakukan dengan membuat CV,
              resume dan LinkedIn. Sebelum membuat personal branding diperlukan
              kemampuan untuk menganalisis diri sendiri melalui SWOT(strength,
              Weakness, Opportunities, Threats).
            </p>
          </div>
          <Link href="/materi?materi=6" className="absolute -my-4 bottom-0">
            <button className=" mt-4 bg-green-400 hover:bg-green-300 active:bg-green-300 active:scale-95 text-neutral-100 px-5 py-2 rounded-full font-creato font-bold">
              Lihat Modul
            </button>
          </Link>
        </div>
        {/*Sejarah Teknik*/}
        <div
          about="Sejarah Teknik"
          className="flex flex-col lg:flex-row w-4/5 gap-14 lg:gap-28 items-center justify-center"
        >
          <div data-aos="fade-up">
            <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center lg:text-left">
              Sejarah Teknik
            </h1>
            <p className="font-creato font-medium max-w-[700px] text-[18px] sm:text-[20px] 2xl:text-[25px] text-green-400 text-center lg:text-left">
              Fakultas teknik berdiri pada tahun 1949 ini menjadi salah satu
              fakultas tertua di Universitas Gadjah Mada. Sampai saat ini
              Fakultas Teknik terus mengalami berbagai penyesuaian dan
              perkembangan. Mari simak video berikut ini!
            </p>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-easing="ease-in"
            id="video-sejarah-teknik"
            className="relative flex justify-center items-center aspect-video bg-red-100 rounded-2xl min-w-[300px] md:min-w-[550px] lg:min-w-[400px]"
          >
            <div className="relative z-10 h-40 md:h-72 lg:h-52 aspect-video overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/kcElbm8VDy0"
                className="w-full h-full select-none"
                allowFullScreen
              />
            </div>
            <div className="absolute z-[11] w-32 sm:w-36 md:w-48 lg:w-36 h-full flex justify-end -mt-[11.5rem] ml-[10rem] sm:ml-[13rem] md:-mt-80 md:ml-[33rem] lg:-mt-60 lg:ml-[23rem] ">
              <Image
                src="/bird1.svg"
                alt="bird_img"
                fill
                className="select-none"
              />
            </div>
          </div>
        </div>

        {/*Sejarah Kesatria @media:lg*/}
        <div
          about="Sejarah Kesatria"
          className="hidden lg:flex flex-row w-4/5 gap-28 items-center justify-center"
        >
          <div
            data-aos="fade-right"
            id="video-sejarah-kesatria"
            className="relative flex justify-center items-center rounded-2xl min-w-[400px] aspect-video bg-red-100"
          >
            <div className="relative z-10 h-40 md:h-52 aspect-video overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/PRVEkq9dXF0"
                className="w-full h-full select-none"
                allowFullScreen
              />
            </div>
            <div
              data-aos="fade-right"
              className="absolute z-[11] w-48 h-full flex justify-end -mt-[7.5rem] mr-[23rem] "
            >
              <Image
                src="/bird2.svg"
                alt="bird_2_img"
                fill
                className="select-none"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col items-end">
            <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center md:text-right">
              Sejarah Kesatria
            </h1>
            <p className="font-creato font-medium max-w-[700px] text-[18px] sm:text-[20px] 2xl:text-[25px] text-green-400 text-center md:text-right">
              Tahukah kalian kalau PPSMB Kesatria pernah mengalami beberapa
              perubahan dari tahun ke tahun? PPSMB Kesatria sebagai PPSMB
              Fakultas terbesar di Universitas Gadjah Mada memiliki segudang
              filosofi di dalamnya. Penasaran bagaimana PPSMB Kesatria dapat
              mempertahankan esensinya? Yuk, simak video berikut untuk memahami
              lebih dalam!
            </p>
            <Link href={"/tema"}>
              <button className="mt-4 px-11 py-2 bg-red-200 rounded-full font-creato font-extrabold text-[20px] italic text-neutral-100 hover:bg-[#CB3231] active:bg-[#CB3231] active:scale-95">
                Lihat Selengkapnya
              </button>
            </Link>
          </div>
        </div>

        {/* Sejarah Kesatria @media: sm */}
        <div
          about="Sejarah Kesatria"
          className="flex flex-col lg:hidden w-4/5 gap-14 items-center"
        >
          <div data-aos="fade-up">
            <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center lg:text-left">
              Sejarah Kesatria
            </h1>
            <p className="font-creato font-medium max-w-[660px] text-[18px] sm:text-[20px] 2xl:text-[25px] text-green-400 text-center lg:text-left">
              Tahukah kalian kalau PPSMB Kesatria pernah mengalami beberapa
              perubahan dari tahun ke tahun? PPSMB Kesatria sebagai PPSMB
              Fakultas terbesar di Universitas Gadjah Mada memiliki segudang
              filosofi di dalamnya. Penasaran bagaimana PPSMB Kesatria dapat
              mempertahankan esensinya? Yuk, simak video berikut untuk memahami
              lebih dalam!
            </p>
          </div>
          <div
            data-aos="fade-right"
            id="video-sejarah-kesatria"
            className="relative flex justify-center items-center rounded-2xl min-w-[300px] md:min-w-[550px] aspect-video bg-red-100"
          >
            <div className="relative z-10 h-40 md:h-72 aspect-video overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/PRVEkq9dXF0"
                className="w-full h-full select-none"
                allowFullScreen
              />
            </div>
            <div
              data-aos="fade-right"
              className="absolute z-[11] w-48 h-full flex justify-end -mt-[5.5rem] mr-[18rem] md:w-40 md:-mt-[13rem] md:mr-[30rem]"
            >
              <Image
                alt="bird_img_2"
                src="/bird2.svg"
                fill
                className="select-none"
              />
            </div>
          </div>
          <Link data-aos="fade-up" data-aos-offset="-100" href={"/tema"}>
            <button className="px-11 py-2 bg-red-200 rounded-full font-creato font-extrabold text-[18px] sm:text-[20px] md:text-[25px] italic text-neutral-100 hover:bg-[#CB3231] active:bg-[#CB3231] active:scale-95">
              Lihat Selengkapnya
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
