export default function KesatriaMuda() {
  return (
    <section className="min-h-screen bg-pattern-cream bg-repeat flex justify-center items-center flex-col">
      <h1 className="font-alstoria text-[60px] text-green-400 text-center">
        Aku Sebagai Kesatria Muda
      </h1>
      <p className="text-center font-creato text-[30px] w-1/2 text-green-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eaque
        placeat, similique ipsam officiis veritatis pariatur modi fugit quis
        blanditiis. Consequuntur pariatur praesentium eligendi tempora id
        dolorum ipsum laborum qui.
      </p>

      <div className="bg-green-400 rounded-[40px] mt-10 flex gap-10 p-10 items-start">
        <div className="bg-green-200 h-[400px] !aspect-[5/3] rounded-[20px] p-5">
          <div className="bg-neutral-100 w-full h-full rounded-[10px]"></div>
        </div>
        <div className="w-min">
          <h1 className="font-creato text-neutral-100 text-[50px] italic w-max">
            Jalan-Jalan Teknik
          </h1>
          <p className="text-neutral-100 text-[25px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus
            cum quia neque dolore commodi molestias debitis. Quisquam, quas quia
            voluptates, voluptatum, quibusdam quae voluptate quos quod.
          </p>
          <div className="flex gap-5 mt-5">
            <div className="bg-neutral-100 py-3 px-5 rounded-[20px] text-[30px] text-green-400 font-bold italic w-max">
              Baca Modul
            </div>
            <div className="bg-neutral-100 py-3 px-5 rounded-[20px] text-[30px] text-green-400 font-bold italic w-max">
              Putar Video
            </div>
          </div>
        </div>
      </div>

      <div className="w-[60%] mt-20">
        <div className="w-full bg-green-400 h-[10px] flex justify-between items-center">
          <div className="rounded-full bg-green-400 w-[40px] aspect-square"></div>
          <div className="rounded-full bg-green-400 w-[40px] aspect-square"></div>
          <div className="rounded-full bg-green-400 w-[40px] aspect-square"></div>
          <div className="rounded-full bg-green-400 w-[40px] aspect-square"></div>
        </div>
      </div>
    </section>
  );
}
