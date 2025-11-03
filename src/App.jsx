import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
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
} from "./utils/data";

function AppContent() {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  return (
    <>
      {!isBlogPage && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              skills={skills}
              projects={projects}
              visibleSkills={visibleSkills}
              hiddenSkills={hiddenSkills}
              experiences={experiences}
              education={education}
              certifications={certifications}
              achievements={achievements}
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
