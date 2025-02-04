import { useEffect } from "react";
import { canvasDots } from "../utils/Utils";
const Hero = () => {
  useEffect(() => {
    canvasDots();
  }, []);

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral-900 min-h-[95vh] flex items-center relative overflow-hidden">
      <div className="canvas">
        <canvas className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"></canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="items-center">
          <div className="text-center md:text-left">
            <div className="typewriter">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hi, I&apos;m{" "}
                <span className="text-cyan-400">Siddharth Holankar</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Business Analyst
            </p>
            <p className="text-gray-400 mb-8">
            Optimizing business decisions with data-driven insights.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button
                onClick={() => handleScroll("contact")}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contact Me
              </button>
              <a
              href="https://drive.google.com/file/d/1fTGzJgQ77a6zilJBxfYiotSDgl3lxDtv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
                            <button
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                View my resume
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
