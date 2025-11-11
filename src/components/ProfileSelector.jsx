import { useState } from "react";
import PropTypes from "prop-types";

const ProfileSelector = ({ profiles, onSelectProfile }) => {
  const [hoveredProfile, setHoveredProfile] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Who's watching?
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Select a profile to view tailored portfolio content
        </p>

        {/* Profile Cards */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProfile(profile.id)}
              onMouseLeave={() => setHoveredProfile(null)}
              onClick={() => onSelectProfile(profile.id)}
            >
              <div
                className={`relative transition-all duration-300 ${
                  hoveredProfile === profile.id
                    ? "scale-110 transform"
                    : "scale-100"
                }`}
              >
                {/* Profile Avatar */}
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-lg mb-4 flex items-center justify-center text-6xl md:text-7xl transition-all duration-300 ${
                    hoveredProfile === profile.id
                      ? "ring-4 ring-blue-500 shadow-2xl shadow-blue-500/50"
                      : "ring-2 ring-gray-700 hover:ring-gray-600"
                  }`}
                  style={{
                    background: profile.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <span>{profile.icon}</span>
                </div>

                {/* Profile Name */}
                <p
                  className={`text-white font-semibold text-lg md:text-xl transition-colors duration-300 ${
                    hoveredProfile === profile.id ? "text-blue-400" : ""
                  }`}
                >
                  {profile.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Manage Profiles Button */}
        <button className="mt-8 px-6 py-3 border-2 border-gray-600 text-gray-400 hover:border-gray-500 hover:text-white transition-colors duration-300 rounded-lg">
          Manage Profiles
        </button>
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

