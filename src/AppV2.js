import './AppV2.css';
import React from "react";
import Navbar from "./components/V2/Navbar/Navbar";
import Hero from "./components/V2/Hero/Hero";
import Metrics from "./components/V2/Metrics/Metrics";
import Experience from "./components/V2/Experience/Experience";
import TechStack from "./components/V2/TechStack/TechStack";
import Footer from "./components/V2/Footer/Footer";
import About from './components/V2/About/About';

export default function AppV2() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-slate-900">
      <Navbar scrollTo={scrollToSection} />
      
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        <Hero scrollTo={scrollToSection}/>
        <About />
        <Metrics/>
        <Experience/>
        <TechStack/>
      </main>

      <Footer/>
    </div>
  );
}
