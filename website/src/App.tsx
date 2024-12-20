import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import CourseDatabase from "./pages/CourseDatabase";
import Home from "./pages/Home";
import ProfessorDatabase from "./pages/ProfessorDatabase";
import ScheduleEvaluator from "./pages/ScheduleEvaluator";
import { preloadModel } from "./utils/PreloadModel";

function App() {
  useEffect(() => {
    preloadModel("/boston.gltf")
      .then(() => console.log("3D model preloaded"))
      .catch((error) => console.error("Error preloading 3D model:", error));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/professor-database" element={<ProfessorDatabase />} />
        <Route path="/course-database" element={<CourseDatabase />} />
        <Route path="/schedule-evaluator" element={<ScheduleEvaluator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
