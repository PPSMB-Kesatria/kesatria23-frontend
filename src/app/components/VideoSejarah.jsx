import { PlaceholderVideoSejarah1 } from "./ui/videoplaceholder";

export default function VideoSejarah() {
  return (
    <section className="min-h-screen flex flex-col bg-pattern-cream bg-repeat justify-center items-center gap-4">
      <div about="Sejarah Teknik" className="flex flex-row w-4/5 gap-28 items-center">
        <div>
          <h1 className="font-alstoria text-[60px] text-green-400">
            Sejarah Teknik
          </h1>
          <p className="font-creato font-medium text-[15px] text-green-400">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
        <PlaceholderVideoSejarah1 />
      </div>
      <div about="Sejarah Kesatria" className="flex flex-row w-4/5 gap-28 items-center">
        <PlaceholderVideoSejarah1 />
        <div>
          <h1 className="font-alstoria text-[60px] text-green-400">
            Sejarah Kesatria
          </h1>
          <p className="font-creato font-medium text-[15px] text-green-400">
            Fakultas Teknik merupakan salah satu fakultas tertua di indonesia.
            Jadi kita harus belajar tentang sejarahnya! Fakultas teknik adalah
            yang terbaik. Senang bisa tembus  ke teknik hihi. Semoga IPK aman :D
          </p>
        </div>
      </div>

    </section>
  );
}
