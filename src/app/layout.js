import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

export const metadata = {
  icons: {
    icon: "/logo_cream.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html className="!overflow-x-hidden" lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
