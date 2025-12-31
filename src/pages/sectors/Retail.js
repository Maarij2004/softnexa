import React from 'react';
import SectorTemplate from './SectorTemplate';

const Retail = () => {
  const data = {
    title: 'Retail',
    description: 'Omnichannel retail solutions to help retailers enhance customer experiences and drive sales.',
    overview: 'SoftNexa delivers comprehensive retail technology solutions that help businesses create seamless shopping experiences across all channels. From point-of-sale systems to inventory management, we help retailers stay competitive in the digital age.',
    services: [
      {
        icon: 'fas fa-cash-register',
        title: 'POS Systems',
        description: 'Modern point-of-sale systems with inventory integration.'
      },
      {
        icon: 'fas fa-boxes',
        title: 'Inventory Management',
        description: 'Real-time inventory tracking and stock management systems.'
      },
      {
        icon: 'fas fa-user-tag',
        title: 'Customer Loyalty',
        description: 'Loyalty programs and customer engagement platforms.'
      },
      {
        icon: 'fas fa-shopping-bag',
        title: 'Omnichannel Retail',
        description: 'Unified commerce solutions across online and offline channels.'
      },
      {
        icon: 'fas fa-qrcode',
        title: 'Digital Wallets',
        description: 'Mobile payment and digital wallet integration.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Retail Analytics',
        description: 'Advanced analytics for sales, inventory, and customer insights.'
      }
    ],
    solutions: [
      'Point of Sale (POS) systems',
      'Inventory management software',
      'E-commerce integration',
      'Customer loyalty programs',
      'Retail mobile applications',
      'Omnichannel commerce platforms',
      'Supply chain management',
      'Retail analytics dashboards'
    ],
    benefits: [
      {
        icon: 'fas fa-sync',
        title: 'Unified Experience',
        description: 'Seamless shopping experience across all channels.'
      },
      {
        icon: 'fas fa-warehouse',
        title: 'Inventory Optimization',
        description: 'Real-time inventory visibility and optimization.'
      },
      {
        icon: 'fas fa-heart',
        title: 'Customer Loyalty',
        description: 'Enhanced customer engagement and retention programs.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Data-Driven Decisions',
        description: 'Actionable insights for better business decisions.'
      }
    ],
    caseStudy: {
      description: 'We helped a retail chain implement an omnichannel solution, resulting in increased sales and improved customer satisfaction.',
      results: [
        { number: '35%', label: 'Sales Increase' },
        { number: '60%', label: 'Customer Retention' },
        { number: '25%', label: 'Cost Reduction' }
      ]
    }
  };

  return <SectorTemplate {...data} />;
};

export default Retail;

