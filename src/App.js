import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Error from "./_utils/Error";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
