import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata = {
  title: "PPSMB Kesatria 2023",
  description:
    "PPSMB Kesatria merupakan masa orientasi kepada Mahasiswa Baru Teknik UGM 2023 yang bertujuan untuk memperkenalkan lingkungan Teknik UGM kepada para Mahasiswa Baru",
};

export default function RootLayout({ children }) {
  AOS.init();

  return (
    <html className="!overflow-x-hidden" lang="en">
      <head>
        <link rel="icon" href="/logo_cream.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
