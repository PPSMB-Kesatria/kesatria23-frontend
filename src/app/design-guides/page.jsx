import ColorPalettes from "./components/ColorPalettes";
import Fonts from "./components/Fonts";

export default function DesignGuidePage() {
  return (
    <main className="flex flex-col gap-20 py-10">
      <Fonts />
      <ColorPalettes />
    </main>
  );
}
