import React from 'react';
import About from '../components/About';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Leading the digital transformation journey</p>
        </div>
      </section>
      <About showTitle={false} />
      <CTA />
    </main>
  );
};

export default AboutPage;

