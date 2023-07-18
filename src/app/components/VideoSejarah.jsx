import { PlaceholderVideoSejarah1 } from "./ui/videoplaceholder";

export default function VideoSejarah() {
  return (
    <section className="min-h-screen flex flex-col bg-pattern-cream bg-repeat justify-center items-center py-10 md:py-0 gap-20 md:gap-4">
      <div about="Sejarah Teknik" className="flex flex-col md:flex-row w-4/5 gap-10 md:gap-28 items-center">
        <div>
          <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center md:text-left">
            Sejarah Teknik
          </h1>
          <p className="font-creato font-medium text-[15px] text-green-400 text-center md:text-left">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
        <PlaceholderVideoSejarah1 />
      </div>
      <div about="Sejarah Kesatria" className="hidden md:flex flex-row w-4/5 gap-28 items-center">
        <PlaceholderVideoSejarah1 />
        <div>
          <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center md:text-left">
            Sejarah Kesatria
          </h1>
          <p className="font-creato font-medium text-[15px] text-green-400 text-center md:text-left">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
      </div>
      {/* Mobile Display */}
      <div about="Sejarah Kesatria" className="flex flex-col md:hidden w-4/5 gap-10 items-center">
        <div>
          <h1 className="font-alstoria text-green-400 text-[40px] md:text-[60px] text-center md:text-left">
            Sejarah Kesatria
          </h1>
          <p className="font-creato font-medium text-[15px] text-green-400 text-center md:text-left">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
        <PlaceholderVideoSejarah1 />
      </div>

    </section>
  );
}
