import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const WorkExperience = ({ experiences }) => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div id="experience" className="bg-neutral-900 py-20" ref={componentRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-800 hidden md:block"
            style={{ height: "calc(100% - 5rem)" }}
          ></div>

          <div className="space-y-16">
            {displayedExperiences.map((exp, index) => (
              <div className="relative" key={index}>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden md:block">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-neutral-900"></div>
                </div>
                <div
                  className={`w-full md:w-1/2 px-4 md:px-8 ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } ${
                    isVisible
                      ? index % 2 === 0
                        ? "animate-slide-in-left"
                        : "animate-slide-in-right"
                      : "opacity-0"
                  }`}
                >
                  <div className="bg-neutral-800 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">
                        {exp.title}
                      </h3>
                      <span className="text-cyan-500">{exp.date}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <h4 className="text-lg text-cyan-400 mb-2 sm:mb-0">
                        {exp.company}
                      </h4>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    <ul className="text-gray-400 space-y-2 text-justify">
                      {exp.points.map((point, i) => (
                        <li key={i}>
                          • <span dangerouslySetInnerHTML={{ __html: point }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {experiences.length > 2 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default WorkExperience;
