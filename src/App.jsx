import { useState, useEffect } from "react";
import MarketStatusBar from "./components/MarketStatusBar";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImpactMetrics from "./components/ImpactMetrics";
import Achievements from "./components/Achievements";
import FinancialDashboard from "./components/FinancialDashboard";
import CaseStudy from "./components/CaseStudy";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import CurrentlyLearning from "./components/CurrentlyLearning";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { canvasDotsBg } from "./utils/Utils";
import {
  skills,
  projects,
  visibleSkills,
  hiddenSkills,
  experiences,
  education,
  certifications,
  achievements,
  testimonials,
} from "./utils/data";
import Footer from "./components/Footer";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    canvasDotsBg();
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
      <MarketStatusBar />
      <Hero />
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none">
        <canvas className="canvas-2"></canvas>
      </div>
      <Navbar />
      <About skills={skills} />
      <ImpactMetrics />
      <Achievements achievements={achievements} />
      <FinancialDashboard />
      <CaseStudy />
      <Projects projects={projects} />
      <TechStack />
      <Skills visibleSkills={visibleSkills} hiddenSkills={hiddenSkills} />
      <WorkExperience experiences={experiences} />
      <Education education={education} certifications={certifications} />
      <CurrentlyLearning />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer/>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-xl"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
