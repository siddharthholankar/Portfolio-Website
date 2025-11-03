import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Skills = ({ visibleSkills, hiddenSkills }) => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("grid"); // "grid" or "radar"
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

  // Prepare data for radar chart - top skills from each category
  const getRadarData = () => {
    const allCategories = [...visibleSkills, ...(showAll ? hiddenSkills : [])];
    return allCategories.map(section => ({
      category: section.category.split(' &')[0].split(' ')[0], // Shorten names
      value: Math.round(section.skills.reduce((acc, skill) => acc + skill.level, 0) / section.skills.length),
      fullName: section.category
    }));
  };

  // Get proficiency level label and color
  const getProficiencyInfo = (level) => {
    if (level >= 90) return { label: "Expert", color: "from-green-500 to-emerald-500", textColor: "text-green-400", borderColor: "border-green-500/30" };
    if (level >= 80) return { label: "Advanced", color: "from-blue-500 to-cyan-500", textColor: "text-blue-400", borderColor: "border-blue-500/30" };
    if (level >= 70) return { label: "Proficient", color: "from-purple-500 to-pink-500", textColor: "text-purple-400", borderColor: "border-purple-500/30" };
    return { label: "Intermediate", color: "from-orange-500 to-yellow-500", textColor: "text-orange-400", borderColor: "border-orange-500/30" };
  };

  const renderSkillsList = (skills, category) => {
    const isExpanded = expandedCategories[category];
    const displaySkills = isExpanded ? skills : skills.slice(0, 3);
    const showExpandButton = skills.length > 3;

    return (
      <div className="space-y-4">
        {displaySkills.map((skill, skillIndex) => {
          const profInfo = getProficiencyInfo(skill.level);
          return (
            <div key={skillIndex} className="group">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${profInfo.textColor} bg-${profInfo.color.split('-')[1]}-500/10 border ${profInfo.borderColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {profInfo.label}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-3 bg-[#1e293b] rounded-full overflow-hidden">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${profInfo.color} opacity-20 blur-sm`}></div>
                {/* Progress bar */}
                <div
                  className={`relative h-full bg-gradient-to-r ${profInfo.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${skillIndex * 100}ms`
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          );
        })}
        {showExpandButton && (
          <button
            onClick={() => toggleCategory(category)}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 group"
          >
            {isExpanded ? (
              <>
                Show Less
                <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                Show More ({skills.length - 3} more)
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <div id="skills" className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 overflow-hidden" ref={skillsRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, rgba(59, 130, 246, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.1) 87.5%, rgba(59, 130, 246, 0.1)),
                           linear-gradient(150deg, rgba(59, 130, 246, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(59, 130, 246, 0.1) 87.5%, rgba(59, 130, 246, 0.1))`,
          backgroundSize: '80px 140px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🛠️ Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Proficiency</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical skill set across financial analysis, data analytics, and business intelligence
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("grid")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "grid"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                : "bg-[#1e293b] text-gray-300 hover:bg-[#334155] border border-gray-700"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Grid View
          </button>
          <button
            onClick={() => setActiveTab("radar")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "radar"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50"
                : "bg-[#1e293b] text-gray-300 hover:bg-[#334155] border border-gray-700"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Radar View
          </button>
        </div>

        {/* Radar Chart View */}
        {activeTab === "radar" && (
          <div className="mb-12 animate-fade-in">
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Skills Proficiency Radar
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={getRadarData()}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis 
                    dataKey="category" 
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]}
                    tick={{ fill: '#9ca3af' }}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="value"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.5}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                    formatter={(value, name, props) => [
                      `${value}%`,
                      props.payload.fullName
                    ]}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-center text-gray-400 text-sm mt-4">
                Average proficiency across all skills in each category
              </p>
            </div>
          </div>
        )}

        {/* Grid View */}
        {activeTab === "grid" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {visibleSkills.map((section, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
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
                {/* Skill Count Badge */}
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20">
                  {section.skills.length} skills
                </span>
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                {section.category}
              </h3>

              {/* Skills List */}
              {renderSkillsList(section.skills, section.category)}
            </div>
          ))}

          {showAll &&
            hiddenSkills.map((section, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${(visibleSkills.length + index) * 150}ms`,
                }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
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
                  {/* Skill Count Badge */}
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20">
                    {section.skills.length} skills
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                  {section.category}
                </h3>

                {/* Skills List */}
                {renderSkillsList(section.skills, section.category)}
              </div>
            ))}
        </div>
        )}

        {/* Show More/Less Button */}
        {activeTab === "grid" && (
          <div className="text-center mt-12">
            <button
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              onClick={toggleShowAll}
            >
              {showAll ? (
                <>
                  <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                  </svg>
                  Show Less Skills
                </>
              ) : (
                <>
                  Show All Skills ({hiddenSkills.length} more)
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
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
