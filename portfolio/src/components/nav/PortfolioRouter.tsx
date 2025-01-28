import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "../Portfolio";
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CourseGuidePage";
import ProjectPage from "./pages/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage";

export default function PortfolioRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />}>
          <Route index element={<AboutPage />}></Route>
          <Route path="courses" element={<CoursePage />}></Route>
          <Route path="projects" element={<ProjectPage />}></Route>
          <Route path="experience" element={<ExperiencePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
