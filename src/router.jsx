import Home from "./pages/home";
import About from "./pages/about";
import Content from "./pages/content";
import Project from "./pages/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/projects" element={ <Project /> } />
      </Routes>
    </BrowserRouter>
  );
};