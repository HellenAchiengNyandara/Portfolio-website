import Image from "next/image";
import {HeroSection}from "./Components/HeroSection";

import {AboutSection} from "./Components/AboutSection";
import {HomePage} from "./Components/ProjectSection";
import {ContactMe} from "./Components/Contactme";
import {Footer} from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <HomePage />
        <ContactMe/>
      </div>
      <Footer/>
    </main>
  );
}
