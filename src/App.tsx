import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./demo.css/base.css";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Menu />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
