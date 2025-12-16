import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Differentiators from './components/Differentiators';
import CtaSection from './components/CtaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UnderDevelopment from './components/UnderDevelopment';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Differentiators />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/em-desenvolvimento" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;