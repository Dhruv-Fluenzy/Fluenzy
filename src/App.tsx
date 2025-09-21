import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseGrid from './components/ShowcaseGrid'; // ✅ import here
import About from './components/About';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Fluencers from './components/Fluencers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-fluenzy-white font-inter">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ShowcaseGrid />  
                <About />
                <CTASection />
              </>
            }
          />
          {/* Removed separate /work route */}
          <Route path="/fluencers" element={<Fluencers />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
