import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const Achievements = ({ achievements }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({});
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

  useEffect(() => {
    if (isVisible) {
      // Animate numbers counting up
      achievements.forEach((achievement, index) => {
        const numStr = achievement.number.replace(/[^0-9.]/g, '');
        const targetNum = parseFloat(numStr);
        
        if (!isNaN(targetNum)) {
          let current = 0;
          const increment = targetNum / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetNum) {
              current = targetNum;
              clearInterval(timer);
            }
            setCounts(prev => ({
              ...prev,
              [index]: achievement.number.replace(numStr, current.toFixed(current < 10 ? 1 : 0))
            }));
          }, 30);
        } else {
          setCounts(prev => ({
            ...prev,
            [index]: achievement.number
          }));
        }
      });
    }
  }, [isVisible, achievements]);

  return (
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 py-20" ref={componentRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate__animated animate__fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key Achievements & Impact
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering measurable results through data-driven financial analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative group ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-neutral-900 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-cyan-500 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={achievement.icon}
                    />
                  </svg>
                </div>

                {/* Number - Animated */}
                <div className="mb-2">
                  <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {counts[index] || achievement.number}
                  </h3>
                </div>

                {/* Label */}
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                  {achievement.label}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Bar */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 ${isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}`}>
          <div className="text-center p-4 bg-neutral-900 rounded-lg border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">GAAP & IFRS</p>
            <p className="text-gray-400 text-sm mt-1">Compliant</p>
          </div>
          <div className="text-center p-4 bg-neutral-900 rounded-lg border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">Real-time</p>
            <p className="text-gray-400 text-sm mt-1">Dashboards</p>
          </div>
          <div className="text-center p-4 bg-neutral-900 rounded-lg border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">Automated</p>
            <p className="text-gray-400 text-sm mt-1">Reporting</p>
          </div>
          <div className="text-center p-4 bg-neutral-900 rounded-lg border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">Cross-functional</p>
            <p className="text-gray-400 text-sm mt-1">Collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Achievements.propTypes = {
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Achievements;

