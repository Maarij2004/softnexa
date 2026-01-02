import React from 'react';
import SectorTemplate from './SectorTemplate';

const Ecommerce = () => {
  const data = {
    title: 'E-commerce',
    description: 'Complete e-commerce solutions to help businesses sell online and grow their digital presence.',
    overview: 'SoftNexa provides end-to-end e-commerce solutions that help businesses establish a strong online presence, drive sales, and deliver exceptional shopping experiences. From custom store development to marketplace integration, we have the expertise to help your e-commerce business thrive.',
    services: [
      {
        icon: 'fas fa-store',
        title: 'E-commerce Platforms',
        description: 'Custom online stores built on Shopify, WooCommerce, or custom solutions.'
      },
      {
        icon: 'fas fa-shopping-cart',
        title: 'Shopping Cart Solutions',
        description: 'Advanced cart functionality with wishlist and saved items.'
      },
      {
        icon: 'fas fa-credit-card',
        title: 'Payment Integration',
        description: 'Multiple payment gateway integrations for seamless transactions.'
      },
      {
        icon: 'fas fa-truck',
        title: 'Order Management',
        description: 'Comprehensive order processing and inventory management systems.'
      },
      {
        icon: 'fas fa-search',
        title: 'Product Search',
        description: 'AI-powered search and recommendation engines.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Analytics & Insights',
        description: 'Detailed analytics and reporting for business intelligence.'
      }
    ],
    solutions: [
      'Custom e-commerce website development',
      'Shopify store setup and customization',
      'Marketplace integration (Amazon, eBay, etc.)',
      'Mobile commerce applications',
      'Inventory management systems',
      'Multi-vendor marketplace platforms',
      'Subscription-based e-commerce',
      'B2B e-commerce solutions'
    ],
    benefits: [
      {
        icon: 'fas fa-rocket',
        title: 'Scalable Growth',
        description: 'Platforms that scale with your business as it grows.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Optimized',
        description: 'Responsive designs that work seamlessly on all devices.'
      },
      {
        icon: 'fas fa-percent',
        title: 'Higher Conversions',
        description: 'Optimized checkout processes that reduce cart abandonment.'
      },
      {
        icon: 'fas fa-cog',
        title: 'Easy Management',
        description: 'User-friendly admin panels for easy content and product management.'
      }
    ],
    caseStudy: {
      description: 'We helped a fashion retailer launch their online store, resulting in significant revenue growth and expanded market reach.',
      results: [
        { number: '200%', label: 'Revenue Growth' },
        { number: '5x', label: 'Customer Base' },
        { number: '30%', label: 'Conversion Rate' }
      ]
    },
    project: {
      title: 'Royal Shine Jewels - Premium Shopify Store',
      description: 'A luxury e-commerce jewelry store built on Shopify with elegant design and seamless shopping experience. Features product customization, secure checkout, mobile-optimized browsing, advanced inventory management, and integrated payment gateways for a premium shopping experience.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80',
      tags: ['E-commerce', 'Shopify', 'Jewelry', 'Retail'],
      demo: 'https://royalshinejewels.com/',
      details: 'https://royalshinejewels.com/'
    }
  };

  return <SectorTemplate {...data} />;
};

export default Ecommerce;

