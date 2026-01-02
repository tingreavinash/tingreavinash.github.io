import './App.css';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Metrics from "./Metrics/Metrics";
import Experience from "./Experience/Experience";
import TechStack from "./TechStack/TechStack";
import Footer from "./Footer/Footer";
import About from './About/About';

export default function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("nav");
    const offset = navbar ? navbar.offsetHeight + 10 : 90;

    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-slate-900 font-sans selection:bg-blue-100">
      <Navbar scrollTo={scrollToSection} />

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        <Hero scrollTo={scrollToSection} />
        <About />
        <Metrics />
        <Experience />
        <TechStack />
      </main>

      <Footer scrollTo={scrollToSection} />
    </div>
  );
}
