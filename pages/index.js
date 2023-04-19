
import { Inter } from "next/font/google";
import Home from "../layout/Home";
import Welcome from "../layout/Welcome";
import Projects from "../layout/Projects";
import CardsSection from "../layout/CardsSection";
import Stickers from "../layout/Stickers";
import Footer from "./../layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <Home />
      <Welcome />
      <Projects />
      <CardsSection />
      <Stickers />
      <Footer />
    </>
  );
}
