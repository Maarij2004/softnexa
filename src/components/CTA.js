import React from 'react';
import Button from './Button';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's work together to bring your digital vision to life. Get in touch with us today and discover how Softnexa can help you achieve your goals.</p>
        <Button to="/contact" variant="white">Get Started Today</Button>
      </div>
    </section>
  );
};

export default CTA;

