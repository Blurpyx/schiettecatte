// imports
import Contactbar from "@/components/Contactbar";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import TopScroll from "@/components/TopScroll";

import Image from "next/image";
import BackgroundImage from "@/images/bg.jpg";

export default function App() {
  return (
    <>
      <TopScroll />
      <Image src={BackgroundImage} alt="Logo" className="-z-10 fixed" />
      <Contactbar />
      <Navbar />
      <Home className="bg-background" />
      <Info />
      <Footer />
    </>
  );
}
