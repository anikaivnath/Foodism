import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";

import Menu from "./Components/Menu";  // Import Menu Component

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Home Route with HeroSection */}
        <Route path="/" element={<><HeroSection /></>} />  
        
        {/* Menu Route without HeroSection */}
        <Route path="/menu" element={<Menu />} />  
      </Routes>
    </Router>
  );
};

export default App;
