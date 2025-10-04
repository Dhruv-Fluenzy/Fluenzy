
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fluencers from "./pages/Fluencers";
import AllWork from "./pages/AllWork";
import BrandOnboarding from "./pages/BrandOnboarding";
import FluencerOnboarding from "./pages/FluencerOnboarding";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import Layout from "./pages/Dasboard/Layout";
import { PrivacyPolicy, TermsOfService, CookiePolicy, Disclaimer } from "./pages/Legal";
import VideoTest from "./components/VideoTest";
import ScrollToTop from "./components/ScrollToTop";
// import NotFound from "./pages/NotFound";


const App = () => (

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fluencers" element={<Fluencers />} />
          <Route path="/all-work" element={<AllWork />} />
          <Route path="/brand-onboarding" element={<BrandOnboarding />} />
          <Route path="/fluencer-onboarding" element={<FluencerOnboarding />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/video-test" element={<VideoTest />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>

);

export default App;