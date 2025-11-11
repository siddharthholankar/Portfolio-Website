import { useState } from "react";
import PropTypes from "prop-types";

const ProfileSelector = ({ profiles, onSelectProfile }) => {
  const [hoveredProfile, setHoveredProfile] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-5xl animate-fade-in">
        {/* Title with better styling */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Who's watching?
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Select a profile to view tailored portfolio content
          </p>
        </div>

        {/* Profile Cards with improved styling */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProfile(profile.id)}
              onMouseLeave={() => setHoveredProfile(null)}
              onClick={() => onSelectProfile(profile.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative transition-all duration-500 ease-out ${
                  hoveredProfile === profile.id
                    ? "scale-110 transform translate-y-[-10px]"
                    : "scale-100"
                }`}
              >
                {/* Profile Avatar with glow effect */}
                <div className="relative mb-6">
                  <div
                    className={`w-36 h-36 md:w-44 md:h-44 rounded-xl mb-4 flex items-center justify-center text-7xl md:text-8xl transition-all duration-500 ${
                      hoveredProfile === profile.id
                        ? "ring-4 ring-white shadow-2xl shadow-white/30"
                        : "ring-2 ring-gray-600/50 hover:ring-gray-500"
                    }`}
                    style={{
                      background: profile.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <span className="drop-shadow-lg">{profile.icon}</span>
                  </div>
                  
                  {/* Hover glow effect */}
                  {hoveredProfile === profile.id && (
                    <div 
                      className="absolute inset-0 rounded-xl blur-xl opacity-50 -z-10 transition-all duration-500"
                      style={{
                        background: profile.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        transform: 'scale(1.2)',
                      }}
                    ></div>
                  )}
                </div>

                {/* Profile Name with better typography */}
                <p
                  className={`font-semibold text-lg md:text-xl transition-all duration-300 ${
                    hoveredProfile === profile.id 
                      ? "text-white scale-105" 
                      : "text-gray-400"
                  }`}
                >
                  {profile.name}
                </p>
                
                {/* Description on hover */}
                {hoveredProfile === profile.id && (
                  <p className="text-gray-500 text-sm mt-2 max-w-[200px] mx-auto animate-fade-in">
                    {profile.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Manage Profiles Button - removed for cleaner look */}
      </div>
    </div>
  );
};

ProfileSelector.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      gradient: PropTypes.string,
    })
  ).isRequired,
  onSelectProfile: PropTypes.func.isRequired,
};

export default ProfileSelector;

