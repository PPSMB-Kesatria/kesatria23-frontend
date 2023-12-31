import { useState } from "react";

export const PersonalBranding = () => {
    const [isLoading, setIsLoading] = useState(true);
    return(
        <div className="space-y-5">
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Modul 1 - Personal Branding dan SWOT</h1>
            <p className="text-neutral-100 font-creato text-base text-justify"><i>Personal Branding</i> merupakan salah satu hal krusial bagi mahasiswa
                baru karena dapat menjadi salah satu alat pemasaran kemampuan yang
                dimiliki. <i>Personal branding</i> dapat dilakukan dengan membuat CV, resume,
                dan Linkedin. Sebelum membuat <i>personal branding</i> diperlukan kemampuan untuk
                menganalisis diri sendiri melalui SWOT (Strength, Weakness, Opportunities, Threats).</p>
            <div className="flex justify-center relative">
                <iframe
                onLoad={() => setIsLoading(false)}
                src="https://drive.google.com/file/d/1UEFKRJTcsF7Qgw2x644u0F56IzFaCidL/preview"
                allow="autoplay"
                className="w-full md:w-3/4 aspect-[.75] relative z-[2]"/>
                {isLoading && (<div className="w-full md:w-3/4 aspect-[.75] bg-neutral-100/70 animate-pulse absolute"></div>)}
            </div>
        </div>
    )
}