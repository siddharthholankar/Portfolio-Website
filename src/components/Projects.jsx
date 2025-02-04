import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Projects = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleProjects]);

  const showMoreProjects = () => {
    console.log(projects.length);
    setVisibleProjects(projects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <div id="projects" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectsRef.current[index] = el)}
              className="group bg-white rounded-xl shadow-lg overflow-hidden opacity-0"
            >
              <div className="relative h-64 bg-neutral-200 group-hover:cursor-pointer">
                {project.comingSoon && (
                  <div className="absolute -left-12 top-6 bg-green-500 text-white px-12 py-1 rotate-[-45deg] z-10 shadow-lg shadow-green-500/50  text-center">
                    Coming Soon....
                  </div>
                )}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 object-center w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    {!project.comingSoon && (
                      <div className="flex space-x-4 mb-4 justify-center">
                        {project.liveLink !== "" && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                          >
                            View Live
                          </a>
                        )}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          className="bg-neutral-700 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300"
                        >
                          GitHub
                        </a>
                      </div>
                    )}
                    <p className="text-white">{project.techStack}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-justify">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleProjects < projects.length ? (
            <button
              onClick={showMoreProjects}
              className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-colors duration-300"
            >
              View More Projects
            </button>
          ) : (
            <button
              onClick={showLessProjects}
              className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-colors duration-300"
            >
              Show Less Projects
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      techStack: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      liveLink: PropTypes.string.isRequired,
      comingSoon: PropTypes.bool,
    })
  ).isRequired,
};

export default Projects;
