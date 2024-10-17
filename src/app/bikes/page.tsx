import Contactbar from "@/components/Contactbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopScroll from "@/components/TopScroll";
import Sales from "@/components/bikes/Sales";

export default function Bikes() {
  return (
    <>
      <TopScroll />
      <Contactbar />
      <Navbar />
      <Sales />
      <Footer />
    </>
  );
}