import Image from "next/image"
import Nala from "../../../public/nala_hero.png"
import Topbar from "../../../public/topbar_hero.svg"
import Botbar_1 from "../../../public/bot_hero_1.svg"
import Botbar_2 from "../../../public/bot_hero_2.svg"
import Silhouette from "../../../public/silhouette_tugu_teknik_hero.svg"


export default function Hero() {
  return (
      <section className="min-h-screen bg-pattern-green bg-repeat z-[0] flex">
          <Image src={Topbar} className="w-[100%] -top-[20px] absolute" width={1920}/>
        <div className="flex flex-row flex-wrap justify-center items-center content-center">
          <Image src={Nala} width={1400} alt="Nala" className="sm:w-[50%] w-[70%] h-fit min-w-[200px]" />
          <div className="flex justify-center flex-col text-white mb-[10%] z-[100]">
            <div className="font-alstoria lg:text-[54px] sm:text-[32px] text-[16px] text-neutral-100 drop-shadow-lg">Selamat Datang </div>
            <div className="font-alstoria lg:text-[102px] sm:text-[61px] text-[30px] text-neutral-100 drop-shadow-lg"> Kesatria Muda</div>
            <div className="font-creato lg:text-[54px] font-[1000] sm:text-[32px] text-[16px] text-neutral-100 drop-shadow-lg">2023 !</div>
          </div>
        </div>
        <div className="self-end flex absolute left-0 right-0 w-[100%]">
          <Image src={Silhouette} width={1920} height={220} className="absolute self-end w-[100%]"/>
          <Image src={Botbar_1} width={1920} height={220} className="absolute self-end w-[100%]"/>
          <Image src={Botbar_2} width={1920} height={165} className="absolute self-end w-[100%]"/>
        </div>

      </section>
    )
  }