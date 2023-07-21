import Image from "next/image"

export default function Materi() {
  return(
    <main className="bg-pattern-green min-h-screen bg-repeat bg-contain gap-4 flex flex-col items-center py-36">
      <h1 className="font-alstoria text-6xl text-neutral-100">Materi</h1>
      <div className="flex flex-row gap-10 justify-center w-4/5">
        <aside className="space-y-4 min-w-fit flex flex-col items-center border w-1/5">
          <button className="px-5 py-2.5 rounded-full border-[4px] border-neutral-100 text-neutral-100">Personal Branding</button>
          <button className="px-5 py-2.5 rounded-full border-[4px] border-neutral-100 text-neutral-100">Personal Branding</button>
          <button className="px-5 py-2.5 rounded-full border-[4px] border-neutral-100 text-neutral-100">Personal Branding</button>
          <button className="px-5 py-2.5 rounded-full border-[4px] border-neutral-100 text-neutral-100">Personal Branding</button>

        </aside>
        <content className="min-h-screen border max-w-6xl border-red-500 space-y-4 w-4/5">
          <h1 className="text-neutral-100 font-creato font-bold text-4xl">Personal Branding</h1>
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
        </content>
      </div>
    </main>
  )
}