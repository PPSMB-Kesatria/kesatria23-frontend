import { useState } from "react";

export const KaryaAplikatif = () => {
    const [isLoading, setIsLoading] = useState(true);
    return(
        <div className="space-y-5">
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Modul Karya Aplikatif</h1>
            <p className="text-neutral-100 font-creato text-base text-justify">
                Kesatria Muda diharapkan mampu mengaplikasikan pengetahuan yang 
                didapat selama menempuh perkuliahan untuk menyelesaikan masalah-masalah 
                yang ada di masyarakat. Oleh karena itu, Kesatria Muda akan diajak untuk 
                berlatih, berdiskusi, dan berkolaborasi bersama untuk menyelesaikan studi 
                kasus yang diberikan.</p>
            <div className="flex justify-center relative">
                <iframe
                onLoad={() => setIsLoading(false)}
                src="https://drive.google.com/file/d/19S0gXuiutX_C0KT0vJ9QDKkAxGsXZsCZ/preview"
                allow="autoplay"
                className="w-full md:w-3/4 aspect-[.75] relative z-[2]"/>
                {isLoading && (<div className="w-full md:w-3/4 aspect-[.75] bg-neutral-100/70 animate-pulse absolute"></div>)}
            </div>
        </div>
    )
}