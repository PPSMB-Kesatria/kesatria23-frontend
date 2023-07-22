"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Hero from "./components/Hero";
import KesatriaMuda from "./components/KesatriaMuda";
import KontribusiMasaDepan from "./components/KontribusiMasaDepan";
import VideoSejarah from "./components/VideoSejarah";

export const metadata = {
  title: "Beranda · PPSMB Kesatria 2023",
  description:
    "PPSMB Kesatria merupakan masa orientasi kepada Mahasiswa Baru Teknik UGM 2023 yang bertujuan untuk memperkenalkan lingkungan Teknik UGM kepada para Mahasiswa Baru",
};

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  });
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <VideoSejarah />
      <KesatriaMuda />
      <KontribusiMasaDepan />
    </main>
  );
}
