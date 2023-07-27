import { useState } from "react";
export const JelajahLembaga = () => {
    const [isLoading, setIsLoading] = useState(true);
    return(
        <div className="space-y-5">
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Jelajah Lembaga</h1>
            <p className="text-neutral-100 font-creato text-base text-justify">
                Fakultas Teknik tidak hanya bergerak dan berprestasi di bidang akademik saja, 
                namun terdapat berbagai macam lembaga yang dapat menunjang skill mahasiswanya.
                Wah, lembaga mana nih yang diminati Kesatria Muda? Mari pahami modul berikut 
                sebagai bekal bagi Kesatria Muda!</p>
             <div className="flex justify-center">
             <iframe 
             onLoad={() => setIsLoading(false)}
             src="https://drive.google.com/file/d/1UBm6mIpnXBwYKPQz2wjO5O8t9qZE_pej/preview"
             allow="autoplay"
             className="w-full md:w-3/4 aspect-[.75] relative z-[2]"/>
             {isLoading && (<div className="w-full md:w-3/4 aspect-[.75] bg-neutral-100/70 animate-pulse absolute"></div>)}
            </div> 
            
        </div>
    )
}