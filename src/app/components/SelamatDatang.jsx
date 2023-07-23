import Botbar_1 from "../../../public/HeroBottomDeco.png";
import Silhouette from "../../../public/silhouette_tugu_teknik_hero.svg";
import Image from "next/image";

export default function SelamatDatang() {
  return (
    <section className="min-h-screen relative z-[0] bg-pattern-green text-neutral-100 flex flex-col justify-center items-center lg:py-40">
      <img
        src="/TemaBottom1.png"
        className="w-[105%] absolute bottom-0 left-0 min-w-[700px] z-[2]"
        data-aos="fade-up"
        data-aos-offset="-300"
      />
      <img
        src="/TemaBottom2.png"
        className="w-[105%] absolute bottom-0 left-0 min-w-[700px] z-[3]"
        data-aos="fade-up"
        data-aos-offset="-300"
      />
      <div
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="300"
        className="self-end top-0 flex absolute left-0 right-0 w-[100%] translate-y-[-50%]"
      >
        <Image
          src={Silhouette}
          width={1920}
          height={220}
          alt=""
          className="absolute self-end min-w-[700px] w-[100%] right-0"
        />
        <Image
          src={Botbar_1}
          width={1920}
          height={220}
          alt=""
          className="absolute self-end min-w-[700px] w-[100%] right-0 translate-y-[50%]"
        />
      </div>

      <div className="relative z-[4] flex-shrink-0 flex flex-col justify-center w-full xl:w-fit pb-[10vh] lg:pb-0">
        <h1
          data-aos="fade-up"
          className="font-alstoria text-[45px] sm:text-[60px] 2xl:text-[90px] text-center mb-7 leading-[100%]"
        >
          <span className="font-alstoria text-[35px] sm:text-[50px] 2xl:text-[60px] text-center mb-7 mt-5 md:mt-10">
            Selamat Datang <br />
          </span>
          Kesatria Muda{" "}
          <span className="font-creato font-extrabold">2023!</span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid place-items-center px-5 sm:px-0"
        >
          <div className="bg-[#F04C4B] p-2 xs:p-4 rounded-[30px] sm:rounded-[40px] aspect-[56/31.5] w-full max-w-[800px] xl:min-w-[900px] 2xl:min-w-[1000px]">
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
    </section>
  );
}
