export default function Footer() {
    return (
      <footer className=" w-full bg-pattern-green h-auto items-center font-creato text-neutral-100 flex justify-between p-4">
        <div className="">
        <img src="logo.png" width="204px" alt="" />
        </div>
        <div>
            <h1 className=" text-3xl font-extrabold"><i>PPSMB Kesatria 2023</i></h1>
            <p className=" font-thin">
                <br />
                Fakultas Teknik <br />
                <br />
                Jalan Grafika <br />
                Mlati, Yogyakarta 55281, ID <br />
                <br />
                <a href="https://ppsmb.ftugm.ac.id">https://ppsmb.ftugm.ac.id</a>
            </p>
        </div>
        <div>
            <h1 className=" text-xl">Official Account:</h1>
            <div className="flex gap-16">
              <div>
                <ul>
                  <li className="flex items-center text-xs"><img src="/logo.png" width="50px" alt="" />ppsmb_kesatria</li>
                  <li className="flex items-center text-xs"><img src="/logo.png" width="50px" alt="" />ppsmb_kesatria</li>
                  <li className="flex items-center text-xs"><img src="/logo.png" width="50px" alt="" />@NRB2565A</li>
                </ul>
              </div> 
              <div>
                <li className="flex items-center text-xs"><img src="/logo.png" width="50px" alt="" />ppsmb_kesatria</li>
                <li className="flex items-center text-xs"><img src="/logo.png" width="50px" alt="" />PPSMB KESATRIA</li>
              </div>
            </div>
        </div>
      </footer>
    );
  }
  