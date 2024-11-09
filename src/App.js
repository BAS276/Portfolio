
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/About";
import Skills from './component/skills';
import Projects from './component/project';
import Contact from './component/Contact';

<Contact />
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>

  );
}

export default App;
