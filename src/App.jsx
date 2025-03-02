import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Slideshow />
      <Features />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;