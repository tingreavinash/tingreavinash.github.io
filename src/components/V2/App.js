import "./App.css";
import { ThemeProvider } from "./hooks/useTheme";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Metrics from "./Metrics/Metrics";
import Experience from "./Experience/Experience";
import TechStack from "./TechStack/TechStack";
import Footer from "./Footer/Footer";
import BackToTop from "./ui/BackToTop";

function Portfolio() {
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
    <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/50 dark:selection:text-blue-200 transition-colors duration-300">
      <Navbar scrollTo={scrollToSection} />

      <main className="max-w-7xl mx-auto px-6 py-8 sm:py-12 space-y-24 sm:space-y-32">
        <Hero scrollTo={scrollToSection} />
        <About />
        <Metrics />
        <Experience />
        <TechStack />
      </main>

      <Footer scrollTo={scrollToSection} />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
