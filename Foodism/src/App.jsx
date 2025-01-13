import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import FoodRecipes from "./Components/FoodRecipes";
import Menu from "./Components/Menu"; 

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<><HeroSection /></>} />  
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/services" element={<Services />} /> {/* Corrected the path */}
        <Route path="/food/:foodName" element={<FoodRecipes />} />
      </Routes>
    </Router>
  );
};

export default App;
