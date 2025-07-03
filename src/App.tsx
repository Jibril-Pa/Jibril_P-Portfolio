import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import HobbiesPage from "@/pages/Hobbies";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import { Tabs, Tab,} from "@heroui/react";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<HobbiesPage />} path="/Hobbies" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
