import { FaLinkedin, FaBriefcase, FaEnvelope, FaFileDownload } from "react-icons/fa";

const HireMe = () => {
  return (
    <div id="hire-me" className="relative bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-neutral-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0px, transparent 1px, transparent 20px, rgba(59, 130, 246, 0.1) 21px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              💼 Let&apos;s Work Together
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Services & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Collaboration</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Open to exciting opportunities in financial analysis, data analytics, and business intelligence
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-gray-800 overflow-hidden">
            {/* Full-Time Roles Section */}
            <div className="p-8 border-b border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg flex-shrink-0">
                  <FaBriefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Full-Time Opportunities</h3>
                  <p className="text-gray-400">Actively seeking positions in:</p>
                </div>
              </div>

              {/* Role Categories */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Financial Analysis",
                  "Data Analytics / BI",
                  "Financial Engineering",
                  "FP&A / Corporate Finance"
                ].map((role, index) => (
                  <div key={index} className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-cyan-400 font-semibold">{role}</h4>
                  </div>
                ))}
              </div>

              {/* Preferences */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm"><span className="font-semibold text-white">Work Style:</span> Remote or Hybrid</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm"><span className="font-semibold text-white">Industries:</span> Tech, Finance, Fintech</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm"><span className="font-semibold text-white">Start Date:</span> Immediate or flexible</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm"><span className="font-semibold text-white">Experience:</span> 4+ years in financial analysis</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://drive.google.com/file/d/1hRssQrhvvfjdmq6efz7YwgYIxj-qPmcH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
                >
                  <FaFileDownload className="w-5 h-5" />
                  <span>View My Resume</span>
                </a>
                <a
                  href="https://linkedin.com/in/siddharthhol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1e293b] border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              💡 <span className="font-semibold text-gray-300">Currently based in Arizona, USA</span> • Open to relocation for the right opportunity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
