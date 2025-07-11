import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/Projects";
import ExperiencePage from "@/pages/Experience";
import BlogPage from "@/pages/Resume";
import AboutPage from "@/pages/about";
import AnimatedRoute from "@/components/AnimatedRoute";

function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "auto"}}>
      <Routes>
        <Route 
          element={
            <AnimatedRoute>
              <IndexPage />
            </AnimatedRoute>
          } 
          path="/" 
        />
        <Route 
          element={
            <AnimatedRoute>
              <ProjectsPage />
            </AnimatedRoute>
          } 
          path="/Projects" 
        />
        <Route 
          element={
            <AnimatedRoute>
              <ExperiencePage />
            </AnimatedRoute>
          } 
          path="/Experience" 
        />
        <Route 
          element={
            <AnimatedRoute>
              <BlogPage />
            </AnimatedRoute>
          } 
          path="/Resume" 
        />
        <Route 
          element={
            <AnimatedRoute>
              <AboutPage />
            </AnimatedRoute>
          } 
          path="/about" 
        />
      </Routes>
    </div>
  );
}

export default App;
