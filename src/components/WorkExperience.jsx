import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const WorkExperience = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
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

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 overflow-hidden" ref={componentRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.1) 0px, transparent 1px, transparent 40px, rgba(59, 130, 246, 0.1) 41px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              💼 Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            4+ years of driving financial strategies and delivering measurable business impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2 sm:-translate-y-0 z-10">
                    <div className="relative">
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 bg-cyan-500 rounded-full animate-pulse opacity-40"></div>
                      {/* Logo Container */}
                      <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-2xl md:text-3xl border-4 border-[#0f172a] shadow-lg shadow-blue-500/50">
                        {exp.logo}
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full">
                        <span className="bg-[#1e293b] border border-blue-500/30 text-blue-400 text-xs px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 sm:ml-24 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
                      
                      <div className="relative p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h4 className="text-lg text-cyan-400 font-semibold">
                                {exp.company}
                              </h4>
                              <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20">
                                {exp.type}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {exp.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Key Metrics */}
                        {exp.keyMetrics && (
                          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                            {exp.keyMetrics.map((metric, idx) => (
                              <div key={idx} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-2 sm:p-3 text-center">
                                <div className="text-sm sm:text-lg md:text-xl font-bold text-blue-400 break-words">{metric.value}</div>
                                <div className="text-[10px] sm:text-xs text-gray-400 break-words leading-tight">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Stack */}
                        {exp.techStack && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.techStack.slice(0, isExpanded ? exp.techStack.length : 4).map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                                {tech}
                              </span>
                            ))}
                            {!isExpanded && exp.techStack.length > 4 && (
                              <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-xs font-medium">
                                +{exp.techStack.length - 4} more
                              </span>
                            )}
                          </div>
                        )}

                        {/* Accomplishments (Expandable) */}
                        <div className={`space-y-3 overflow-hidden transition-all duration-500 ${
                          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-[200px] opacity-70'
                        }`}>
                          <ul className="text-gray-400 space-y-2 text-sm">
                            {exp.points.slice(0, isExpanded ? exp.points.length : 2).map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span dangerouslySetInnerHTML={{ __html: point }} />
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expand/Collapse Button */}
                        {exp.points.length > 2 && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className="mt-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium group/btn"
                          >
                            {isExpanded ? (
                              <>
                                Show Less
                                <svg className="w-4 h-4 transition-transform group-hover/btn:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                </svg>
                              </>
                            ) : (
                              <>
                                View All Responsibilities ({exp.points.length})
                                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Connection Line to Timeline */}
                      <div className={`hidden md:block absolute top-8 ${isLeft ? 'left-full' : 'right-full'} w-12 h-0.5 bg-gradient-to-r ${isLeft ? 'from-blue-500/50 to-transparent' : 'from-transparent to-blue-500/50'}`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End Cap */}
          <div className="relative mt-12 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center border-4 border-[#0f172a] shadow-lg shadow-blue-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
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
      duration: PropTypes.string,
      location: PropTypes.string,
      logo: PropTypes.string,
      type: PropTypes.string,
      techStack: PropTypes.arrayOf(PropTypes.string),
      keyMetrics: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        })
      ),
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default WorkExperience;
