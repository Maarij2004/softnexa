import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';

const Shopify = () => {
  const data = {
    title: 'Shopify Solutions',
    description: 'Custom Shopify store development, theme customization, and e-commerce solutions.',
    overview: 'We specialize in creating powerful, conversion-optimized Shopify stores that drive sales and provide exceptional shopping experiences. From custom theme development to app integrations and ongoing optimization, we help you build and grow a successful e-commerce business.',
    features: [
      {
        icon: 'fas fa-store',
        title: 'Store Setup & Migration',
        description: 'Complete Shopify store setup from scratch or seamless migration from other platforms.'
      },
      {
        icon: 'fas fa-palette',
        title: 'Custom Theme Development',
        description: 'Bespoke Shopify themes designed to match your brand and optimized for conversions.'
      },
      {
        icon: 'fas fa-plug',
        title: 'App Integration',
        description: 'Integration of essential Shopify apps for inventory, marketing, analytics, and customer service.'
      },
      {
        icon: 'fas fa-credit-card',
        title: 'Payment Gateway Setup',
        description: 'Configuration of payment gateways and checkout optimization for smooth transactions.'
      },
      {
        icon: 'fas fa-truck',
        title: 'Shipping & Fulfillment',
        description: 'Setup of shipping zones, rates, and fulfillment services to streamline order processing.'
      },
      {
        icon: 'fas fa-tools',
        title: 'Maintenance & Support',
        description: 'Ongoing maintenance, updates, and support to keep your store running smoothly and securely.'
      }
    ],
    benefits: [
      'Professional online store',
      'Mobile-responsive design',
      'Fast loading times',
      'Secure payment processing',
      'Easy content management',
      'Scalable for growth'
    ],
    process: [
      {
        title: 'Planning & Discovery',
        description: 'We understand your business, products, and goals to plan the perfect Shopify store for your needs.'
      },
      {
        title: 'Design & Development',
        description: 'We design and develop a custom store that reflects your brand and provides an excellent user experience.'
      },
      {
        title: 'App Integration & Configuration',
        description: 'We integrate necessary apps and configure settings for payments, shipping, and other functionalities.'
      },
      {
        title: 'Product Setup & Migration',
        description: 'We set up your products, organize categories, and migrate data from existing platforms if needed.'
      },
      {
        title: 'Testing & Launch',
        description: 'We thoroughly test all functionalities and launch your store, ensuring everything works perfectly.'
      }
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Shopify API', 'Shopify Apps', 'Shopify Scripts', 'Theme Development']
  };

  return <ServiceDetailTemplate {...data} />;
};

export default Shopify;

