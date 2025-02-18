
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Marquee from "./components/Marquee"; 


import "./styles.scss";


import "./styles.scss";

function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
   
      </Routes>
      <Marquee/>
      <Footer />
    
    </Router>
  );
}

export default App;
