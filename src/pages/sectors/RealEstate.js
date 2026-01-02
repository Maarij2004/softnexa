import React from 'react';
import SectorTemplate from './SectorTemplate';

const RealEstate = () => {
  const data = {
    title: 'Real Estate',
    description: 'Digital solutions for real estate agencies, property management, and real estate technology companies.',
    overview: 'SoftNexa provides comprehensive technology solutions for the real estate industry, helping agencies, property managers, and developers streamline operations, enhance customer experiences, and drive business growth through innovative digital platforms.',
    services: [
      {
        icon: 'fas fa-home',
        title: 'Property Listings',
        description: 'Advanced property listing and search platforms with virtual tours.'
      },
      {
        icon: 'fas fa-key',
        title: 'Property Management',
        description: 'Comprehensive property management and tenant management systems.'
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Booking Systems',
        description: 'Property viewing and appointment scheduling platforms.'
      },
      {
        icon: 'fas fa-file-contract',
        title: 'CRM Solutions',
        description: 'Customer relationship management for real estate agencies.'
      },
      {
        icon: 'fas fa-calculator',
        title: 'Financial Tools',
        description: 'Mortgage calculators and financial planning tools.'
      },
      {
        icon: 'fas fa-vr-cardboard',
        title: 'Virtual Tours',
        description: '360° virtual property tours and augmented reality solutions.'
      }
    ],
    solutions: [
      'Real estate listing websites',
      'Property management software',
      'Real estate CRM systems',
      'Virtual tour platforms',
      'Lead generation and management',
      'Document management systems',
      'Mobile real estate applications',
      'Market analytics platforms'
    ],
    benefits: [
      {
        icon: 'fas fa-search',
        title: 'Better Discovery',
        description: 'Advanced search and filtering for faster property discovery.'
      },
      {
        icon: 'fas fa-user-tie',
        title: 'Lead Management',
        description: 'Efficient lead capture and nurturing systems.'
      },
      {
        icon: 'fas fa-clock',
        title: 'Time Savings',
        description: 'Automated workflows that save time and reduce manual work.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Access',
        description: 'Mobile-first platforms accessible on-the-go.'
      }
    ],
    caseStudy: {
      description: 'We developed a comprehensive property management platform for a real estate agency, streamlining operations and improving customer service.',
      results: [
        { number: '50%', label: 'Time Saved' },
        { number: '3x', label: 'Lead Generation' },
        { number: '95%', label: 'Client Satisfaction' }
      ]
    },
    project: {
      title: 'AI 3D Architecture Visualization Platform',
      description: 'A cutting-edge 3D architecture visualization platform powered by AI. Create stunning architectural designs, 3D models, and immersive virtual tours with real-time rendering, collaborative design tools, and photorealistic visualization for real estate and architectural projects.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
      tags: ['Real Estate', 'AI', '3D', 'Architecture'],
      demo: 'https://main.d3awubmtb8cr63.amplifyapp.com/',
      details: 'https://main.d3awubmtb8cr63.amplifyapp.com/'
    }
  };

  return <SectorTemplate {...data} />;
};

export default RealEstate;

