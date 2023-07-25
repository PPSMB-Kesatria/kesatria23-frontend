import { useState } from "react";

export const LifePlan = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="space-y-5">
      <h1 className="text-neutral-100 font-creato font-bold text-4xl">
        Lifeplan
      </h1>
      <div className="flex justify-center relative">
        <iframe
          onLoad={() => setIsLoading(false)}
          src="https://drive.google.com/file/d/1PtFuLGvCmr-hXdWs-E6ei6M6BfoH1mf2/preview"
          allow="autoplay"
          className="w-full md:w-3/4 aspect-[.75] relative z-[2]"
        />
        {isLoading && (<div className="w-full md:w-3/4 aspect-[.75] bg-neutral-100/70 animate-pulse absolute"></div>)}
      </div>
    </div>
  );
};
