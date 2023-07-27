import { useState } from "react";
export const PameranKarya = () => {
    const [isLoading, setIsLoading] = useState(true);
    return(
        <div className="space-y-5">
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Pameran Karya</h1>
            <p className="text-neutral-100 font-creato text-base text-justify">
                Fakultas Teknik tidak terlepas dari segudang prestasinya. 
                Penasaran siapa saja tim-tim yang bergerak di belakang untuk 
                mengharumkan nama Fakultas Teknik? Yuk, simak modul berikut ini!</p>
            <div className="flex justify-center">
             <iframe 
             onLoad={() => setIsLoading(false)}
             src="https://drive.google.com/file/d/1P6XEGJM0RIJqADe8Yg2ydErJnR3tqmth/preview"
             allow="autoplay"
             className="w-full md:w-3/4 aspect-[.75] relative z-[2]"/>
             {isLoading && (<div className="w-full md:w-3/4 aspect-[.75] bg-neutral-100/70 animate-pulse absolute"></div>)}
            </div> 
        </div>
    )
}