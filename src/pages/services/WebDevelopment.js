import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';

const WebDevelopment = () => {
  const data = {
    title: 'Web Development',
    description: 'Custom web applications and responsive websites built with the latest technologies.',
    overview: 'We create stunning, high-performance websites and web applications that provide exceptional user experiences. Our development team uses the latest technologies and best practices to build scalable, secure, and maintainable web solutions tailored to your business needs.',
    features: [
      {
        icon: 'fas fa-laptop-code',
        title: 'Custom Web Development',
        description: 'Bespoke web applications built from scratch to meet your specific business requirements and goals.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Responsive Design',
        description: 'Mobile-first, responsive designs that look and function perfectly on all devices and screen sizes.'
      },
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Performance Optimization',
        description: 'Optimized code and architecture for fast load times, improved SEO, and better user experience.'
      },
      {
        icon: 'fas fa-shopping-cart',
        title: 'E-commerce Solutions',
        description: 'Full-featured e-commerce platforms with payment gateways, inventory management, and admin dashboards.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'CMS Integration',
        description: 'Content management systems that make it easy to update and manage your website content.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Security & Maintenance',
        description: 'Secure code, regular updates, and ongoing maintenance to keep your website safe and running smoothly.'
      }
    ],
    benefits: [
      'Enhanced user experience',
      'Improved search engine visibility',
      'Increased conversion rates',
      'Scalable and maintainable code',
      'Mobile-friendly design',
      'Fast loading times'
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We gather requirements, define project scope, and create a detailed development plan.'
      },
      {
        title: 'Design & Prototyping',
        description: 'We create wireframes and designs that align with your brand and user expectations.'
      },
      {
        title: 'Development',
        description: 'Our developers build your website using modern frameworks and best coding practices.'
      },
      {
        title: 'Testing & QA',
        description: 'Comprehensive testing ensures your website works flawlessly across all browsers and devices.'
      },
      {
        title: 'Launch & Support',
        description: 'We launch your website and provide ongoing support and maintenance to ensure optimal performance.'
      }
    ],
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify']
  };

  return <ServiceDetailTemplate {...data} />;
};

export default WebDevelopment;

