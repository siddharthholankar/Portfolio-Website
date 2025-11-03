import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const Education = ({ education, certifications }) => {
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

  return (
    <div id="education" className="bg-neutral-900 py-20" ref={componentRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-neutral-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 ${
                  isVisible
                    ? index % 2 === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                    : "opacity-0"
                }`}
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-cyan-400 text-lg mb-2">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-gray-400 text-sm">
                    <span>{edu.date}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
                <div className="bg-neutral-700 px-4 py-2 rounded-lg inline-block">
                  <span className="text-white font-semibold">GPA: </span>
                  <span className="text-cyan-400 font-bold">{edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
            Certifications
          </h3>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-neutral-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 ${
                    isVisible ? "animate-slide-in-left" : "opacity-0"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-8 h-8 text-cyan-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-cyan-400 mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      gpa: PropTypes.string.isRequired,
    })
  ).isRequired,
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      issuer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;

