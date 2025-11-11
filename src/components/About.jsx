import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { profileContent } from "../utils/data";

const About = ({ skills, selectedProfile = "financial-analyst" }) => {
  const content = profileContent[selectedProfile] || profileContent["financial-analyst"];
  const handleSkillClick = (e) => {
    e.currentTarget.querySelector("img").classList.remove("animate-coin-spin");
    void e.currentTarget.querySelector("img").offsetWidth;
    e.currentTarget.querySelector("img").classList.add("animate-coin-spin");
  };

  // Add useEffect and useRef hooks at the top of the component
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="bg-neutral-900 py-0" ref={aboutRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate_fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center space-y-6">
            <p
              className={`text-gray-300 text-lg ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              } font-poppins`}
            >
              {content.about}
            </p>
          </div>

          <div className="space-y-6">
            <div
              className={`flex flex-wrap justify-center items-center gap-8 max-w-[800px] mx-auto ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  onClick={handleSkillClick}
                  className={`group flex flex-col items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 cursor-pointer
                    ${
                      window.innerWidth >= 1300
                        ? `
                    ${index === 0 ? "ml-[25%]" : ""} 
                    ${index === 1 ? "mr-[25%]" : ""}
                    ${index === skills.length - 2 ? "ml-[25%]" : ""}
                    ${index === skills.length - 1 ? "mr-[25%]" : ""}
                    `
                        : ""
                    }
                  `}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 mb-3 transition-transform duration-500 group-hover:animate-coin-spin"
                  />
                  <span className="text-gray-300 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedProfile: PropTypes.string,
};

export default About;
