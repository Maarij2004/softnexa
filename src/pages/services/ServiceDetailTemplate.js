import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import './ServiceDetail.css';

const ServiceDetailTemplate = ({ 
  title, 
  description, 
  heroImage, 
  overview, 
  features, 
  benefits,
  process,
  technologies 
}) => {
  const location = useLocation();
  
  const serviceLinks = [
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app' },
    { name: 'AI & Automation', path: '/services/ai-automation' },
    { name: 'SEO Services', path: '/services/seo' },
    { name: 'Shopify Solutions', path: '/services/shopify' }
  ];

  return (
    <main>
      <section className="service-hero">
        <div className="container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="service-detail">
        <div className="container">
          <div className="service-detail-content">
            <div className="service-sidebar">
              <h3>Our Services</h3>
              <ul>
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path}
                      className={location.pathname === service.path ? 'active' : ''}
                    >
                      <i className="fas fa-chevron-right"></i>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-main">
              <h2>Overview</h2>
              <p>{overview}</p>

              {features && features.length > 0 && (
                <>
                  <h3>Key Features</h3>
                  <div className="service-features">
                    {features.map((feature, index) => (
                      <div key={index} className="service-feature">
                        <i className={feature.icon}></i>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {benefits && benefits.length > 0 && (
                <>
                  <h3>Benefits</h3>
                  <ul className="benefits-list">
                    {benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {process && process.length > 0 && (
                <>
                  <h3>Our Process</h3>
                  <div className="process-steps">
                    {process.map((step, index) => (
                      <div key={index} className="process-step">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {technologies && technologies.length > 0 && (
                <>
                  <h3>Technologies We Use</h3>
                  <div className="technologies-list">
                    {technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </>
              )}

              <div className="service-cta">
                <h3>Ready to Get Started?</h3>
                <p>Let's discuss how we can help transform your business with our {title} services.</p>
                <Button to="/contact" variant="primary">Contact Us Today</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailTemplate;

