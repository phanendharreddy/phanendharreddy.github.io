import './App.css';
import React from "react";
import "./index.css";
import Home from "./routes/home";
import Projects from "./routes/projects";
import About from "./routes/about";
import Contact from "./routes/contact";
import Blogs from "./routes/Blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
  );

}

export default App;
