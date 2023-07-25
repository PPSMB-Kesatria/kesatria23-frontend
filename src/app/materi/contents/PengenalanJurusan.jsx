import Link from "next/link"

export const PengenalanJurusan = () => {

    return (
        <div>
            <h1 className="font-creato text-3xl font-bold text-green-200 border-b-2">DTSL</h1>
            <div className="flex flex-row justify-center items-center gap-4">
                <Link href={"#"}>
                    <button>Teknik Sipil</button>
                </Link>
            </div>
        </div>
    )
}