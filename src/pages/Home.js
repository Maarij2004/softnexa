import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <CTA />
    </main>
  );
};

export default Home;

