import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Digital Transformation with <span>Softnexa</span></h1>
          <p>We deliver cutting-edge software solutions in digital marketing, web & mobile development, AI automation, and Shopify solutions to propel your business into the future.</p>
          <div className="hero-btns">
            <Button to="/projects" variant="primary">View Our Work</Button>
            <Button to="/contact" variant="outline">Get In Touch</Button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Softnexa Digital Solutions" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

