import React from 'react';
import SectionTitle from './SectionTitle';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'NexaShop E-commerce',
    description: 'A fully customized Shopify Plus store with advanced inventory management and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Shopify', 'AI', 'E-commerce'],
    demo: '#',
    details: '#'
  },
  {
    id: 2,
    title: 'FinTrack Analytics Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization and predictive insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Web App', 'Analytics', 'Dashboard'],
    demo: '#',
    details: '#'
  },
  {
    id: 3,
    title: 'HealthCare Mobile App',
    description: 'A cross-platform mobile application for healthcare management with telemedicine capabilities.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Mobile', 'Healthcare', 'React Native'],
    demo: '#',
    details: '#'
  },
  {
    id: 4,
    title: 'Smart Factory Automation',
    description: 'AI-powered manufacturing automation system with IoT integration and real-time monitoring.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'IoT', 'Automation'],
    demo: '#',
    details: '#'
  },
  {
    id: 5,
    title: 'EduLearn Platform',
    description: 'An interactive e-learning platform with AI-driven personalized learning paths and analytics.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Web App', 'Education', 'AI'],
    demo: '#',
    details: '#'
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'A feature-rich food delivery application with real-time tracking and seamless payment integration.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Mobile', 'Food', 'Delivery'],
    demo: '#',
    details: '#'
  }
];

const Projects = ({ showTitle = true }) => {
  return (
    <section className="projects">
      <div className="container">
        {showTitle && (
          <SectionTitle 
            title="Our Projects" 
            subtitle="Explore some of our recent work delivering innovative solutions for clients across various industries."
          />
        )}
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.demo} title="Live Demo" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href={project.details} title="View Details">
                    <i className="fas fa-info-circle"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

