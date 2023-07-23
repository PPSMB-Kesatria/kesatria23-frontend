"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
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
