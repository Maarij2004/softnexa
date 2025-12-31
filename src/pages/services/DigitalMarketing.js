import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';

const DigitalMarketing = () => {
  const data = {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive business growth.',
    overview: 'Our digital marketing services help businesses establish a strong online presence, reach their target audience, and achieve measurable results. We combine data-driven strategies with creative execution to deliver campaigns that drive engagement, conversions, and ROI.',
    features: [
      {
        icon: 'fas fa-bullhorn',
        title: 'Social Media Marketing',
        description: 'Strategic social media campaigns across all major platforms to engage your audience and build brand awareness.'
      },
      {
        icon: 'fas fa-ad',
        title: 'Pay-Per-Click (PPC)',
        description: 'Targeted PPC campaigns on Google, Bing, and social media platforms to drive qualified traffic and conversions.'
      },
      {
        icon: 'fas fa-envelope-open-text',
        title: 'Email Marketing',
        description: 'Automated email campaigns that nurture leads, engage customers, and drive repeat business.'
      },
      {
        icon: 'fas fa-pen-fancy',
        title: 'Content Marketing',
        description: 'High-quality content creation including blogs, articles, videos, and infographics to establish thought leadership.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Analytics & Reporting',
        description: 'Comprehensive analytics and reporting to track performance and optimize campaigns for better results.'
      },
      {
        icon: 'fas fa-users',
        title: 'Influencer Marketing',
        description: 'Strategic partnerships with influencers to expand your reach and build trust with your target audience.'
      }
    ],
    benefits: [
      'Increased brand visibility and awareness',
      'Higher conversion rates and ROI',
      'Targeted audience reach',
      'Improved customer engagement',
      'Data-driven decision making',
      'Scalable marketing strategies'
    ],
    process: [
      {
        title: 'Strategy Development',
        description: 'We analyze your business, target audience, and competitors to develop a comprehensive digital marketing strategy.'
      },
      {
        title: 'Campaign Setup',
        description: 'We set up and optimize your marketing campaigns across selected channels with best practices.'
      },
      {
        title: 'Content Creation',
        description: 'Our team creates engaging, high-quality content that resonates with your audience and drives action.'
      },
      {
        title: 'Execution & Monitoring',
        description: 'We execute campaigns and continuously monitor performance, making real-time optimizations as needed.'
      },
      {
        title: 'Analysis & Optimization',
        description: 'Regular analysis and reporting help us refine strategies and improve campaign performance over time.'
      }
    ]
  };

  return <ServiceDetailTemplate {...data} />;
};

export default DigitalMarketing;

