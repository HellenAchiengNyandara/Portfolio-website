import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import Footer from "./Components/Footer"
export default function Home() {
  return (<main className="flex max-h-screen flex-col bg-black ">
    <Navbar/>
  <div className="container  mx-auto px-12items-center justify-between p-24"><HeroSection/>

  </div> 
  <AboutSection/>
  <ProjectSection/>
  <Footer/>
  </main>
)
}
