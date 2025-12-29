import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import MenuHighlights from './components/MenuHighlights';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <MenuHighlights />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;