import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stepbystep from "./components/Stepbystep";
import BentoGrid from "./components/BentoGrid";
import CompaniesLine from "./components/CompaniesLine";
import Stories from "./components/Stories";
import Plans from "./components/Plans";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stepbystep/>
        <BentoGrid />
        <CompaniesLine />
        <Stories />
        <Plans />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
