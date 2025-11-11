import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ selectedProfile, onSwitchProfile, onSelectProfile, profiles = [] }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navbarRef = useRef(null);
  const profileMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef, profileMenuRef]);

  const currentProfile = profiles.find(p => p.id === selectedProfile);
  return (
    <div className="bg-neutral-900 fixed w-full z-50 top-0" ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-4">
            <a href="#" className="text-white text-xl font-bold "></a>
            {selectedProfile && (
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <span className="text-2xl">{currentProfile?.icon}</span>
                  <span className="text-white text-sm font-medium hidden sm:block">{currentProfile?.name}</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showProfileMenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50">
                    <div className="p-2">
                      <div className="text-xs text-gray-400 px-3 py-2 mb-1">Switch Profile</div>
                      {profiles.map((profile) => (
                        <button
                          key={profile.id}
                          onClick={() => {
                            if (selectedProfile === profile.id) {
                              onSwitchProfile();
                            } else {
                              onSelectProfile(profile.id);
                            }
                            setShowProfileMenu(false);
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-left"
                        >
                          <span className="text-2xl">{profile.icon}</span>
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">{profile.name}</div>
                            <div className="text-gray-400 text-xs">{profile.description}</div>
                          </div>
                          {selectedProfile === profile.id && (
                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Work Experience
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Skills
              </a>
              <a
                href="#education"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Education
              </a>
              <Link
                to="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Blog
              </Link>
              <a
                href="#hire-me"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-500/50 whitespace-nowrap"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              id="mobile-menu-button"
              aria-label="Open main menu"
              onClick={() => {
                console.log("clicked");
                setIsOpen(!isOpen);
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Work Experience
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Education
            </a>
            <Link
              to="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <a
              href="#hire-me"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              Hire Me
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  selectedProfile: PropTypes.string,
  onSwitchProfile: PropTypes.func,
  onSelectProfile: PropTypes.func,
  profiles: PropTypes.array,
};

export default Navbar;
