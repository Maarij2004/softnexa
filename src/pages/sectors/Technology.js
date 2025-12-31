import React from 'react';
import SectorTemplate from './SectorTemplate';

const Technology = () => {
  const data = {
    title: 'Technology',
    description: 'Cutting-edge software solutions for tech companies, startups, and SaaS businesses.',
    overview: 'SoftNexa partners with technology companies to build scalable, innovative software solutions. We help tech startups and established companies develop products, improve existing platforms, and leverage emerging technologies to stay ahead of the competition.',
    services: [
      {
        icon: 'fas fa-cloud',
        title: 'Cloud Solutions',
        description: 'Cloud-native applications and infrastructure solutions.'
      },
      {
        icon: 'fas fa-microchip',
        title: 'Software Development',
        description: 'Custom software and application development services.'
      },
      {
        icon: 'fas fa-server',
        title: 'DevOps & Infrastructure',
        description: 'CI/CD pipelines and cloud infrastructure management.'
      },
      {
        icon: 'fas fa-lock',
        title: 'Security Solutions',
        description: 'Cybersecurity and application security services.'
      },
      {
        icon: 'fas fa-robot',
        title: 'AI & ML Integration',
        description: 'Artificial intelligence and machine learning solutions.'
      },
      {
        icon: 'fas fa-puzzle-piece',
        title: 'API Development',
        description: 'RESTful APIs and microservices architecture.'
      }
    ],
    solutions: [
      'SaaS platform development',
      'Cloud application development',
      'API development and integration',
      'DevOps and infrastructure automation',
      'Microservices architecture',
      'Software modernization',
      'Legacy system migration',
      'Technology consulting'
    ],
    benefits: [
      {
        icon: 'fas fa-rocket',
        title: 'Scalability',
        description: 'Solutions that scale with your business growth.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Security',
        description: 'Enterprise-grade security and compliance standards.'
      },
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Performance',
        description: 'High-performance applications optimized for speed.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'Innovation',
        description: 'Latest technologies and best practices implementation.'
      }
    ],
    caseStudy: {
      description: 'We helped a SaaS startup build a scalable platform from scratch, enabling rapid growth and successful funding rounds.',
      results: [
        { number: '10x', label: 'User Growth' },
        { number: '99.9%', label: 'Uptime' },
        { number: '$5M', label: 'Series A Funding' }
      ]
    }
  };

  return <SectorTemplate {...data} />;
};

export default Technology;

