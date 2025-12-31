import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-chart-line',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, social media, PPC, and content marketing to boost your online presence.',
    link: '/services/digital-marketing'
  },
  {
    id: 2,
    icon: 'fas fa-laptop-code',
    title: 'Web Development',
    description: 'Custom web applications and responsive websites built with the latest technologies to deliver exceptional user experiences.',
    link: '/services/web-development'
  },
  {
    id: 3,
    icon: 'fas fa-mobile-alt',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.',
    link: '/services/mobile-app'
  },
  {
    id: 4,
    icon: 'fas fa-robot',
    title: 'AI & Advanced Automation',
    description: 'Intelligent automation solutions and AI-powered systems to optimize processes and enhance decision-making capabilities.',
    link: '/services/ai-automation'
  },
  {
    id: 5,
    icon: 'fas fa-search',
    title: 'Search Engine Optimization',
    description: 'Strategic SEO services to improve your website\'s visibility, drive organic traffic, and increase conversion rates.',
    link: '/services/seo'
  },
  {
    id: 6,
    icon: 'fas fa-shopping-cart',
    title: 'Shopify Solutions',
    description: 'Custom Shopify store development, theme customization, and app integration to create powerful e-commerce experiences.',
    link: '/services/shopify'
  }
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer a comprehensive suite of digital solutions designed to elevate your business in the digital landscape."
        />
        
        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

