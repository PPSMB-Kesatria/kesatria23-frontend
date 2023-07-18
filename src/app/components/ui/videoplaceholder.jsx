import Image from "next/image"

export const PlaceholderVideoSejarah1 = () => {
  return(
    <>
      <div className="relative flex justify-center items-center rounded-2xl min-w-[400px] aspect-video bg-red-100">
        <div className="absolute z-10">
          <div className="h-52 aspect-video overflow-hidden rounded-xl">
            <iframe
            src="https://www.youtube.com/embed/cAfRzKW-Tyw"
            className="w-full h-full"
            allowFullScreen />
          </div>
        </div>
        <div className="absolute z-[11] w-96 flex justify-end -mt-48 ml-64">
          <Image src="/bird1.svg" width={250} height={100}/>
        </div>
      </div>
    </>
  )
}