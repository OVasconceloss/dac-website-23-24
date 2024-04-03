import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};