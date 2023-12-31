import { useState } from "react";

export const FasilitasTeknik = () => {
    const [isLoading, setIsLoading] = useState(true);
    return(
        <div className="space-y-5">
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Fasilitas Fakultas Teknik</h1>
            <p className="text-neutral-100 font-creato text-base text-justify">
                Fakultas Teknik sebagai fakultas terbesar di Universitas Gadjah Mada memiliki 
                beragam fasilitas yang menunjang kegiatan mahasiswanya. Mau tahu apa saja 
                fasilitas yang ada di Fakultas Teknik? Mari simak modul berikut!</p>
            <div className="flex justify-center relative">
                <iframe
                onLoad={() => setIsLoading(false)}
                src="https://drive.google.com/file/d/185KwZqQdqkTOFrO-fRMi3okCl7g2hIDh/preview"
                allow="autoplay"
                className="w-full md:w-3/4 aspect-[.75] relative z-[2]"/>
                {isLoading && (<div className="w-full md:w-3/4 aspect-[.75] bg-neutral-100/70 animate-pulse absolute"></div>)}
            </div>
        </div>
    )
}
