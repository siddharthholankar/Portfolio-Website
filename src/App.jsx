import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import ProfileSelector from "./components/ProfileSelector";
import {
  skills,
  projects,
  visibleSkills,
  hiddenSkills,
  experiences,
  education,
  certifications,
  achievements,
  blogPosts,
  profiles,
} from "./utils/data";

function AppContent() {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');
  const [selectedProfile, setSelectedProfile] = useState(() => {
    // Initialize from localStorage synchronously to prevent flash
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selectedProfile');
      return saved || null;
    }
    return null;
  });

  const handleSelectProfile = (profileId) => {
    setSelectedProfile(profileId);
    localStorage.setItem('selectedProfile', profileId);
  };

  const handleSwitchProfile = () => {
    setSelectedProfile(null);
    localStorage.removeItem('selectedProfile');
  };

  // Show profile selector if no profile is selected and not on blog page
  if (!selectedProfile && !isBlogPage) {
    return <ProfileSelector profiles={profiles} onSelectProfile={handleSelectProfile} />;
  }

  // Filter content based on selected profile
  const filteredProjects = selectedProfile 
    ? projects.filter(project => project.profiles?.includes(selectedProfile))
    : projects;

  return (
    <>
      {!isBlogPage && <Navbar selectedProfile={selectedProfile} onSwitchProfile={handleSwitchProfile} onSelectProfile={handleSelectProfile} profiles={profiles} />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              skills={skills}
              projects={filteredProjects}
              visibleSkills={visibleSkills}
              hiddenSkills={hiddenSkills}
              experiences={experiences}
              education={education}
              certifications={certifications}
              achievements={achievements}
              selectedProfile={selectedProfile}
            />
          }
        />
        <Route
          path="/blog"
          element={<Blog posts={blogPosts} />}
        />
        <Route
          path="/blog/:slug"
          element={<BlogPost posts={blogPosts} />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
