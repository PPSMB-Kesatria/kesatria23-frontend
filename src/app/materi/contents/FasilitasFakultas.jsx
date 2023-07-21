import Image from "next/image"

export const FasilitasFakultas = () => {
    return(
        <div>
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Fasilitas Fakultas</h1>
                <p className="text-neutral-100 text-justify font-creato">
                Personal Branding adalah suatu proses pembentukan persepsi
                masyarakat terhadap aspek yang dimiliki individu. Dalam materi
                Personal Branding ini, Kesatria Muda akan mempelajari tentang
                bagaimana cara melakukan Personal Branding yang baik, seperti membuat
                CV dan resume yang benar. Selain itu, Kesatria juga akan dikenalkan 
                dengan Applicant Tracking System (ATS) dan aplikasi LinkedIn.</p>
            <div className="flex flex-col justify-center">
                <Image src="/ats-cv-sample.jpg"
                alt="Contoh CV ATS Friendly"
                title="Contoh CV ATS Friendly"
                height={200} width={1920} />
                <p className="text-neutral-100 text-center italic font-creato">Gambar: Contoh CV ATS Friendly</p>
            </div>
        </div>
    )
}