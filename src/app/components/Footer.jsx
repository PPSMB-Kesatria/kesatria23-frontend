import Link from "next/link";

export default function Footer() {
    return (
      <footer className=" w-full bg-pattern-green h-auto items-center font-creato text-neutral-100 flex justify-between p-20">
        <div>
        <img src="/logo_cream.png" width="300px" alt="" />
        </div>
        <div>
            <h1 className="text-[50px] font-extrabold"><i>PPSMB Kesatria 2023</i></h1>
            <p className=" text-[30px] font-medium">
                <br />
                Fakultas Teknik <br />
                Jalan Grafika <br />
                Mlati, Yogyakarta 55281, ID <br />
                <Link href="https://ppsmb.ft.ugm.ac.id">https://ppsmb.ftugm.ac.id</Link>
            </p>
        </div>
        <div>
            <h1 className=" text-[30px]">Official Account:</h1>
            <div className="flex gap-16">
              <div>
                <ul>
                  <li className="flex items-center text-xs font-medium">
                    <span className=" w-[32px] h-[32px] bg-neutral-100 rounded-lg"><img src="/logo_cream.png" width="32px" alt="" /></span>ppsmb_kesatria</li>
                  <li className="flex items-center text-xs"><img src="/logo_cream.png" width="50px" alt="" />ppsmb_kesatria</li>
                  <li className="flex items-center text-xs"><img src="/logo_cream.png" width="50px" alt="" />@NRB2565A</li>
                </ul>
              </div> 
              <div>
                <li className="flex items-center text-xs"><img src="/logo_cream.png" width="50px" alt="" />ppsmb_kesatria</li>
                <li className="flex items-center text-xs"><img src="/logo_cream.png" width="50px" alt="" />PPSMB KESATRIA</li>
              </div>
            </div>
        </div>
      </footer>
    );
  }
  