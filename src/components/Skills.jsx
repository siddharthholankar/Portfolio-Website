import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Skills = ({ visibleSkills, hiddenSkills }) => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const toggleShowAll = () => setShowAll(!showAll);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderSkillsList = (skills, category) => {
    const isExpanded = expandedCategories[category];
    const displaySkills = isExpanded ? skills : skills.slice(0, 3);
    const showExpandButton = skills.length > 3;

    return (
      <div className="space-y-4">
        {displaySkills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-neutral-700 rounded-full">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-1000
                  relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
                  before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                  before:animate-shimmer hover:bg-cyan-400 animate-load-progress"
                style={{
                  width: `${skill.level}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
        {showExpandButton && (
          <button
            onClick={() => toggleCategory(category)}
            className="text-cyan-500 hover:text-cyan-400 flex items-center gap-1 text-sm"
          >
            {isExpanded ? (
              <>
                Show Less <span className="transform rotate-180">↓</span>
              </>
            ) : (
              <>
                Show More <span>↓</span>
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <div id="skills" className="bg-neutral-900 py-0" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleSkills.map((section, index) => (
            <div
              key={index}
              className={`bg-neutral-800 p-6 rounded-xl transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-cyan-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={section.icon}
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {section.category}
              </h3>
              {renderSkillsList(section.skills, section.category)}
            </div>
          ))}

          {showAll &&
            hiddenSkills.map((section, index) => (
              <div
                key={index}
                className={`bg-neutral-800 p-6 rounded-xl transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${(visibleSkills.length + index) * 200}ms`,
                }}
              >
                <div className="text-cyan-500 mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={section.icon}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {section.category}
                </h3>
                {renderSkillsList(section.skills, section.category)}
              </div>
            ))}
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less Skills" : "Show More Skills"}
          </button>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  visibleSkills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          level: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  hiddenSkills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          level: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Skills;
