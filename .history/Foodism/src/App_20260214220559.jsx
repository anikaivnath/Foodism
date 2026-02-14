import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import FoodRecipes from "./Components/FoodRecipes";
import AboutSection from "./Components/AboutSection";
import Menu from "./Components/Menu";
import ReviewSection from "./Components/ReviewSection";
import JourneySection from "./Components/JourneySection";
import Footer from "./Components/Footer"; // ✅ Capitalized

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <ReviewSection />
              <JourneySection />
              <Footer /> {/* ✅ Use component properly */}
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/food/:foodName"
          element={<FoodRecipes cart={cart} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
