import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/Button';
import './Sector.css';

const SectorTemplate = ({
  title,
  description,
  heroImage,
  overview,
  services,
  solutions,
  benefits,
  caseStudy,
  project
}) => {
  const location = useLocation();
  
  const allSectors = [
    { name: 'Finance', path: '/sectors/finance' },
    { name: 'E-commerce', path: '/sectors/ecommerce' },
    { name: 'Education', path: '/sectors/education' },
    { name: 'Manufacturing', path: '/sectors/manufacturing' },
    { name: 'Real Estate', path: '/sectors/real-estate' },
    { name: 'Retail', path: '/sectors/retail' },
    { name: 'Technology', path: '/sectors/technology' }
  ];

  return (
    <main>
      <section className="sector-hero">
        <div className="container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="sector-content">
        <div className="container">
          <div className="sector-layout">
            <div className="sector-sidebar">
              <h3>Industries We Serve</h3>
              <ul>
                {allSectors.map((sector, index) => (
                  <li key={index}>
                    <Link to={sector.path} className={location.pathname === sector.path ? 'active' : ''}>
                      <i className="fas fa-chevron-right"></i>
                      {sector.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sector-main">
              <div className="sector-overview">
                <h2>Overview</h2>
                <p>{overview}</p>
              </div>

              {services && services.length > 0 && (
                <div className="sector-services">
                  <h3>Our Services for {title}</h3>
                  <div className="services-grid">
                    {services.map((service, index) => (
                      <div key={index} className="service-item">
                        <i className={service.icon}></i>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {solutions && solutions.length > 0 && (
                <div className="sector-solutions">
                  <h3>Solutions We Offer</h3>
                  <ul className="solutions-list">
                    {solutions.map((solution, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {benefits && benefits.length > 0 && (
                <div className="sector-benefits">
                  <h3>Key Benefits</h3>
                  <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="benefit-card">
                        <i className={benefit.icon}></i>
                        <h4>{benefit.title}</h4>
                        <p>{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy && (
                <div className="sector-case-study">
                  <h3>Case Study</h3>
                  <div className="case-study-content">
                    <p>{caseStudy.description}</p>
                    {caseStudy.results && (
                      <div className="case-study-results">
                        {caseStudy.results.map((result, index) => (
                          <div key={index} className="result-item">
                            <div className="result-number">{result.number}</div>
                            <div className="result-label">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {project && (
                <div className="sector-project">
                  <h3>Featured Project</h3>
                  <div className="project-showcase">
                    <div className="project-showcase-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-showcase-overlay">
                        <a href={project.demo} title="Live Demo" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          <i className="fas fa-external-link-alt"></i> View Live Demo
                        </a>
                      </div>
                    </div>
                    <div className="project-showcase-content">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="project-showcase-tags">
                        {project.tags && project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">{tag}</span>
                        ))}
                      </div>
                      <div className="project-showcase-links">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="sector-cta">
                <h3>Ready to Transform Your {title} Business?</h3>
                <p>Let's discuss how our specialized solutions can help you achieve your goals.</p>
                <Button to="/contact" variant="primary">Get Started Today</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SectorTemplate;

