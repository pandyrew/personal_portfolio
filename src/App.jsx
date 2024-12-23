import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Involvement from "./pages/Involvement";
import Skills from "./pages/Skills";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutandrew" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectsandawards" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/involvement" element={<Involvement />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
