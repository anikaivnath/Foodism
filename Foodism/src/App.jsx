import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import FoodRecipes from "./Components/FoodRecipes";
import AboutSection from "./Components/AboutSection";
import Menu from "./Components/Menu"; 
import ReviewSection from "./Components/ReviewSection";

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
      <AboutSection/>
      <ReviewSection/>
    </Router>
  );
};

export default App;
