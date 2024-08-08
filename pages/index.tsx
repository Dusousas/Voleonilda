import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Production from "@/components/Production";
import Galery from "@/components/Galery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <NavBar />
    <Main />
    <About />
    <Production />
    <Galery />   
    <Contact />
    <Footer />
     </>
  );
}
