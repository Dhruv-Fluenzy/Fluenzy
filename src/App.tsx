import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseGrid from './components/ShowcaseGrid'; 
import About from './components/About';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Fluencers from './components/Fluencers';
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Disclaimer from "./components/Disclaimer";
import CookiePolicy from "./components/CookiePolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
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
          
          <Route path="/fluencers" element={<Fluencers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer/>}/>
          <Route path="/cookie-policy" element={<CookiePolicy/>}/>

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
