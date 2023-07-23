import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Hero from "./components/Hero";
import KesatriaMuda from "./components/KesatriaMuda";
import KontribusiMasaDepan from "./components/KontribusiMasaDepan";
import VideoSejarah from "./components/VideoSejarah";

export const metadata = {
  title: "Beranda · PPSMB Kesatria 2023",
};

export default function Home() {
  return (
    <main className="overflow-y-hidden">
      <Hero />
      <VideoSejarah />
      <KesatriaMuda />
      <KontribusiMasaDepan />
    </main>
  );
}
