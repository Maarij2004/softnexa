import React from 'react';
import SectorTemplate from './SectorTemplate';

const Manufacturing = () => {
  const data = {
    title: 'Manufacturing',
    description: 'Industry 4.0 solutions and smart manufacturing technologies to optimize production and operations.',
    overview: 'SoftNexa helps manufacturing companies embrace digital transformation through IoT, AI, and automation solutions. Our platforms enable real-time monitoring, predictive maintenance, and intelligent manufacturing processes that drive efficiency and reduce costs.',
    services: [
      {
        icon: 'fas fa-industry',
        title: 'Production Management',
        description: 'Manufacturing execution systems and production planning tools.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'IoT Integration',
        description: 'IoT solutions for connected machines and smart factories.'
      },
      {
        icon: 'fas fa-robot',
        title: 'Automation Systems',
        description: 'Automated workflows and robotic process automation.'
      },
      {
        icon: 'fas fa-tools',
        title: 'Maintenance Management',
        description: 'Predictive maintenance and asset management systems.'
      },
      {
        icon: 'fas fa-boxes',
        title: 'Inventory Control',
        description: 'Real-time inventory tracking and warehouse management.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Quality Control',
        description: 'Quality management and inspection systems.'
      }
    ],
    solutions: [
      'Manufacturing Execution Systems (MES)',
      'Enterprise Resource Planning (ERP) integration',
      'IoT and Industry 4.0 solutions',
      'Supply chain management systems',
      'Quality management systems',
      'Asset tracking and management',
      'Production monitoring dashboards',
      'Predictive analytics for maintenance'
    ],
    benefits: [
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Increased Efficiency',
        description: 'Optimized production processes and reduced downtime.'
      },
      {
        icon: 'fas fa-dollar-sign',
        title: 'Cost Reduction',
        description: 'Lower operational costs through automation and optimization.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Quality Improvement',
        description: 'Better quality control and reduced defect rates.'
      },
      {
        icon: 'fas fa-eye',
        title: 'Real-time Visibility',
        description: 'Complete visibility into production and operations.'
      }
    ],
    caseStudy: {
      description: 'We implemented an IoT-based smart manufacturing solution for an automotive parts manufacturer, resulting in significant productivity gains.',
      results: [
        { number: '25%', label: 'Efficiency Gain' },
        { number: '30%', label: 'Downtime Reduction' },
        { number: '20%', label: 'Cost Savings' }
      ]
    },
    project: {
      title: 'Smart Factory Automation System',
      description: 'AI-powered manufacturing automation system with IoT integration, real-time monitoring, and predictive maintenance. Features production scheduling, quality control dashboards, and supply chain optimization for Industry 4.0 operations.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
      tags: ['Manufacturing', 'IoT', 'AI', 'Automation'],
      demo: 'https://smart-factory-demo.herokuapp.com',
      details: 'https://github.com/example/smart-factory'
    }
  };

  return <SectorTemplate {...data} />;
};

export default Manufacturing;

