import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Softnexa</h3>
            <p>Transforming businesses through innovative digital solutions. We deliver cutting-edge software solutions to propel your business into the future.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/mobile-app">Mobile App Development</Link></li>
              <li><Link to="/services/ai-automation">AI & Automation</Link></li>
              <li><Link to="/services/seo">SEO Services</Link></li>
              <li><Link to="/services/shopify">Shopify Solutions</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Industries</h3>
            <ul className="footer-links">
              <li><Link to="/sectors/healthcare">Healthcare</Link></li>
              <li><Link to="/sectors/finance">Finance</Link></li>
              <li><Link to="/sectors/ecommerce">E-commerce</Link></li>
              <li><Link to="/sectors/education">Education</Link></li>
              <li><Link to="/sectors/manufacturing">Manufacturing</Link></li>
              <li><Link to="/sectors/real-estate">Real Estate</Link></li>
              <li><Link to="/sectors/retail">Retail</Link></li>
              <li><Link to="/sectors/technology">Technology</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@softnexa.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Business St, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SoftNexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

