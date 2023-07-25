import Link from "next/link"

const Button = ({title}) => {
    return <button className="text-neutral-100 bg-red-100 px-5 py-2.5 text-xs md:text-base rounded-md shadow-md active:scale-95">{title}</button>
}

export const PengenalanJurusan = () => {

    return (
        <div>
            <h1 className="text-neutral-100 font-creato font-bold text-4xl">Pengenalan Jurusan</h1>
            <p className="text-neutral-100 font-creato text-base text-justify">
                Fakultas Teknik terdiri dari 8 Departemen yang di dalamnya terdapat 15 
                Program Studi atau yang biasa dikenal dengan jurusan. Sebelum masuk ke 
                jurusan masing-masing, yuk kita sama-sama kenali jurusan Kesatria Muda 
                melalui modul berikut!</p>
            <p className="italic text-neutral-100">Klik salah satu tombol untuk mengakses file pdf modul</p>
            <div className="space-y-8 mt-10">
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Arsitektur dan Perencanaan (DTAP)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/1UO-USI33-76T0YbdpojFR4VnD4qetitO/view"}>
                            <Button title={'Arsitektur'} />
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/file/d/1uBLlrDWy0ewEbnvColJ4NWen1Ch_V8e8/view"}>
                            <Button title={'Perencanaan Wilayah dan Kota'} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Elektro dan Teknologi Informasi (DTETI)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/16zxjc_FM06rZJ_g2ECsPLdV7y4Xzh8FN/view"}>
                            <Button title={'Teknik Elektro'} />
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/file/d/1m2NqgSbbv_Ti0K9UnBrrSHwckkdnAkH6/view"}>
                            <Button title={'Teknologi Informasi'} />
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/file/d/1_4rsLx7Tqd6jrPHsk5Vr7aw5HS-My_hJ/view"}>
                            <Button title={'Teknik Biomedis'} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Nuklir dan Teknik Fisika (DTNTF)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/1TQPG48041SAbViZBlbeRjdXBR9_BUJ1_/view"}>
                            <Button title={'Teknik Nuklir'} />
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/file/d/1cDsim0sbhbSzshf7FgkpIRZ57mSbbaDX/view"}>
                            <Button title={'Teknik Fisika'} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Geodesi (DTGD)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/1j4o6hCN6VllBI17MbYPT5ikebftLnrXD/view"}>
                            <Button title={'Teknik Geodesi'} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Geologi (DTGL)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/1k0zRBpVH99qUODm0E8jXY0jQtciWZvPs/view"}>
                            <Button title={'Teknik Geologi'} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Kimia (DTK)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/1_XxdUwaf37kpZ32ZuLPhPNU2vqQr6S4f/view"}>
                            <Button title={'Teknik Kimia'} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Mesin dan Industri (DTMI)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/1Ey16lkyeFWLt2rmEihcZwp2Xa_qOIApf/view"}>
                            <Button title={'Teknik Mesin'} />
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/file/d/132Mb6LZFv7LwiLX7dbomh3t_L3ywC5wh/view"}>
                            <Button title={'Teknik Industri'} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2 border-neutral-100">Departemen Teknik Sipil dan Lingkungan (DTSL)</h1>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link target="_blank" href={"https://drive.google.com/file/d/1spWxoNPsaXECcWKkjDyNcgqDoGjiClwz/view"}>
                            <Button title={'Teknik Sipil'} />
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/file/d/1JiK1BkYnF6rG3KEiFtlrP6oz0dzPTSzd/view"}>
                            <Button title={'Teknik Infrastruktur Lingkungan'} />
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/file/d/1k4O4fQnGX3uJ_j9--bJ0JoLoeZJhoYJw/view"}>
                            <Button title={'Teknik Sumber Daya Air'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}