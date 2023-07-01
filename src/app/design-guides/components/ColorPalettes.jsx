export default function ColorPalettes() {
  return (
    <section className="flex flex-col justify-center items-center text-[30px] font-creato">
      <h1 className="font-alstoria text-[40px]">Color Palletes</h1>
      <div>
        <h1 className="text-center font-alstoria mt-10">Greens</h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-green-100 w-[100px] rounded-full aspect-square"></div>
            <div>#6DD5B5</div>
            <div>.bg-green-100</div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-green-200 w-[100px] rounded-full aspect-square"></div>
            <div>#54BB9C</div>
            <div>.bg-green-200</div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-green-300 w-[100px] rounded-full aspect-square"></div>
            <div>#439179</div>
            <div>.bg-green-300</div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-green-400 w-[100px] rounded-full aspect-square"></div>
            <div>#004B47</div>
            <div>.bg-green-400</div>
          </div>
        </div>
        <h1 className="text-center font-alstoria mt-10">Reds</h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-red-100 w-[100px] rounded-full aspect-square"></div>
            <div>#F17471</div>
            <div>.bg-red-100</div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-red-200 w-[100px] rounded-full aspect-square"></div>
            <div>#F34B4C</div>
            <div>.bg-red-200</div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-red-300 w-[100px] rounded-full aspect-square"></div>
            <div>#A51D1E</div>
            <div>.bg-red-300</div>
          </div>
        </div>
        <h1 className="text-center font-alstoria mt-10">Neutrals</h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 justify-center items-center">
            <div className="bg-neutral-100 w-[100px] rounded-full aspect-square"></div>
            <div>#FFEAD2</div>
            <div>.bg-neutral-100</div>
          </div>
        </div>
      </div>
    </section>
  );
}
