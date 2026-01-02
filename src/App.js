import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import DigitalMarketing from './pages/services/DigitalMarketing';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileApp from './pages/services/MobileApp';
import AIAutomation from './pages/services/AIAutomation';
import SEO from './pages/services/SEO';
import Shopify from './pages/services/Shopify';
import Finance from './pages/sectors/Finance';
import Ecommerce from './pages/sectors/Ecommerce';
import Education from './pages/sectors/Education';
import Manufacturing from './pages/sectors/Manufacturing';
import RealEstate from './pages/sectors/RealEstate';
import Retail from './pages/sectors/Retail';
import Technology from './pages/sectors/Technology';
import './App.css';
// Suppress React Router v7 deprecation warnings (v6 is still fully supported)
if (process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0]?.includes?.('reactrouter.com/v6/upgrading/future')) {
      return; // Suppress React Router v7 deprecation warnings
    }
    originalWarn.apply(console, args);
  };
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-app" element={<MobileApp />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/shopify" element={<Shopify />} />
          <Route path="/sectors/finance" element={<Finance />} />
          <Route path="/sectors/ecommerce" element={<Ecommerce />} />
          <Route path="/sectors/education" element={<Education />} />
          <Route path="/sectors/manufacturing" element={<Manufacturing />} />
          <Route path="/sectors/real-estate" element={<RealEstate />} />
          <Route path="/sectors/retail" element={<Retail />} />
          <Route path="/sectors/technology" element={<Technology />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

