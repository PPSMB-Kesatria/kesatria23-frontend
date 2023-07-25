import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Hero from "./components/Hero";
import KesatriaMuda from "./components/KesatriaMuda";
import KontribusiMasaDepan from "./components/KontribusiMasaDepan";
import VideoSejarah from "./components/VideoSejarah";
import SelamatDatang from "./components/SelamatDatang";

export default function Home() {
  return (
    <main className="overflow-y-hidden overflow-x-hidden">
      <Hero />
      <SelamatDatang />
      <VideoSejarah />
      <KesatriaMuda />
      <KontribusiMasaDepan />
    </main>
  );
}
