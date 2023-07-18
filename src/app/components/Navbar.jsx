export default function Navbar() {
  return (
    <navbar className="bg-green-400 w-full h-auto text-orange-100 flex items-center justify-between px-12 font-creato drop-shadow-2xl relative z-[200]">
      <a className=" ml-4 items-center flex" href="">
        <img src="/logo.png" alt="" />
        <span className=" font-extrabold text-lg">PPSMB KESATRIA 2023</span>
      </a>
      <div>
        <ul className="items-center justify-between flex">
          <li className=" px-8 py-6 block">
            <a href="">Beranda</a>
          </li>
          <li className="px-8 py-6 block">
            <a href="">Dokumentasi</a>
          </li>
          <li className="px-8 py-6 block">
            <a href="">Agenda</a>
          </li>
          <li className="px-8 py-6 block">
            <a href="">Materi</a>
          </li>
          <li className="px-8 py-6 block">
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
    </navbar>
  );
}
