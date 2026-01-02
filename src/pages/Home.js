import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Automation from '../components/Automation';
import About from '../components/About';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Automation />
      <About />
      <CTA />
    </main>
  );
};

export default Home;

