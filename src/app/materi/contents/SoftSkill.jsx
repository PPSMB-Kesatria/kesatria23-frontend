import { useState } from "react";

export const SoftSkill = () => {
    const [isLoading, setIsLoading] = useState(true);
    return(
        <div className="space-y-5">
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Modul 2 - Softskill dan Skala Prioritas</h1>
            <p className="text-neutral-100 font-creato text-base text-justify">
                <i>Softskill</i> adalah keterampilan atau kemampuan non-teknis yang 
                melibatkan aspek interpersonal, sosial, dan kepemimpinan seseorang. 
                <i>Softskills</i> dapat dicapai dengan berbagai cara, salah satunya dengan 
                <i>roleplay game</i> yang akan dilakukan oleh Kesatria Muda pada PPSMB Kesatria. 
                <i>Roleplay game</i> tersebut juga akan membantu Kesatria Muda dalam menentukan 
                skala prioritasnya selama perkuliahan nanti.</p>
            <div className="flex justify-center relative">
                <iframe
                onLoad={() => setIsLoading(false)}
                src="https://drive.google.com/file/d/1mJkcoS-7zwcB4gpmUFvd5F3oSAIiSv5G/preview"
                allow="autoplay"
                className="w-full md:w-3/4 aspect-[.75] relative z-[2]"/>
                {isLoading && (<div className="w-full md:w-3/4 aspect-[.75] bg-neutral-100/70 animate-pulse absolute"></div>)}
            </div>
        </div>
    )
}