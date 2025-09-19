import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseGrid from './components/ShowcaseGrid';
import About from './components/About';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-fluenzy-white font-inter">
      <Navbar />
      <Hero />
      <ShowcaseGrid />
      <About />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;