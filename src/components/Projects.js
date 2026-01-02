import React from 'react';
import SectionTitle from './SectionTitle';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Code Tutor - Learning Platform',
    description: 'An interactive coding education platform with real-time code execution, personalized learning paths, and comprehensive course management. Features live coding sessions, progress tracking, and AI-powered code review.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    tags: ['Education', 'Learning', 'React', 'Web App'],
    demo: 'https://code-tutorfrontend.vercel.app/',
    details: 'https://code-tutorfrontend.vercel.app/'
  },
  {
    id: 2,
    title: 'PromptToStory - AI Story Book',
    description: 'An AI-powered storytelling platform that creates magical, personalized stories for children. Features multilingual support, custom illustrations, PDF generation, and interactive story creation with vibrant animations.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    tags: ['AI', 'Education', 'Storytelling', 'React'],
    demo: 'https://prompttostory.com/',
    details: 'https://prompttostory.com/'
  },
  {
    id: 3,
    title: 'AI 3D Architecture Platform',
    description: 'A cutting-edge 3D architecture visualization platform powered by AI. Create stunning architectural designs, 3D models, and immersive virtual tours with real-time rendering and collaborative design tools.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    tags: ['AI', '3D', 'Architecture', 'WebGL'],
    demo: 'https://main.d3awubmtb8cr63.amplifyapp.com/',
    details: 'https://main.d3awubmtb8cr63.amplifyapp.com/'
  },
  {
    id: 4,
    title: 'Royal Shine Jewels - Shopify Store',
    description: 'A premium e-commerce jewelry store built on Shopify with elegant design, seamless shopping experience, and advanced inventory management. Features product customization, secure checkout, and mobile-optimized browsing.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    tags: ['Shopify', 'E-commerce', 'Jewelry', 'Retail'],
    demo: 'https://royalshinejewels.com/',
    details: 'https://royalshinejewels.com/'
  },
  {
    id: 5,
    title: 'SideChef - Recipe & Meal Planning',
    description: 'A comprehensive recipe platform with meal planning, grocery shopping integration, and step-by-step cooking instructions. Features personalized meal plans, ingredient management, and seamless Walmart integration for one-click ordering.',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    tags: ['Food', 'Recipes', 'E-commerce', 'React'],
    demo: 'https://www.sidechef.com/',
    details: 'https://www.sidechef.com/'
  },
  {
    id: 6,
    title: 'Softnexa - Digital Solutions',
    description: 'A comprehensive digital transformation platform showcasing services in web development, mobile apps, AI automation, and digital marketing. Features modern design, responsive layout, and integrated project portfolio.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
    tags: ['Technology', 'SaaS', 'Web Development', 'React'],
    demo: 'https://softnexa.vercel.app/',
    details: 'https://softnexa.vercel.app/'
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

