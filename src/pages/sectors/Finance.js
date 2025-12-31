import React from 'react';
import SectorTemplate from './SectorTemplate';

const Finance = () => {
  const data = {
    title: 'Finance',
    description: 'Secure and innovative financial technology solutions for banks, fintech companies, and financial institutions.',
    overview: 'Softnexa delivers cutting-edge fintech solutions that help financial institutions modernize their operations, enhance customer experiences, and stay competitive in the digital age. Our solutions are built with security, compliance, and scalability in mind.',
    services: [
      {
        icon: 'fas fa-mobile-alt',
        title: 'Banking Applications',
        description: 'Mobile and web banking solutions with advanced security features.'
      },
      {
        icon: 'fas fa-wallet',
        title: 'Payment Solutions',
        description: 'Secure payment processing and digital wallet applications.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Financial Analytics',
        description: 'Advanced analytics and reporting platforms for financial data.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Fraud Detection',
        description: 'AI-powered fraud detection and prevention systems.'
      },
      {
        icon: 'fas fa-exchange-alt',
        title: 'Trading Platforms',
        description: 'Stock trading and cryptocurrency exchange platforms.'
      },
      {
        icon: 'fas fa-piggy-bank',
        title: 'Investment Management',
        description: 'Portfolio management and investment tracking applications.'
      }
    ],
    solutions: [
      'Banking and financial applications',
      'Payment gateway integration',
      'Blockchain and cryptocurrency solutions',
      'Risk management systems',
      'Compliance and regulatory reporting',
      'Financial planning tools',
      'Loan management systems',
      'Accounting software integration'
    ],
    benefits: [
      {
        icon: 'fas fa-lock',
        title: 'Enterprise Security',
        description: 'Bank-level security and encryption for all financial transactions.'
      },
      {
        icon: 'fas fa-gavel',
        title: 'Regulatory Compliance',
        description: 'Solutions that meet PCI DSS, GDPR, and other financial regulations.'
      },
      {
        icon: 'fas fa-bolt',
        title: 'Real-time Processing',
        description: 'High-performance systems for real-time transaction processing.'
      },
      {
        icon: 'fas fa-users',
        title: 'Enhanced UX',
        description: 'Intuitive interfaces that improve customer engagement.'
      }
    ],
    caseStudy: {
      description: 'We developed a comprehensive mobile banking app for a regional bank, resulting in increased customer engagement and digital adoption rates.',
      results: [
        { number: '3x', label: 'Mobile Users' },
        { number: '50%', label: 'Transaction Volume' },
        { number: '95%', label: 'User Satisfaction' }
      ]
    }
  };

  return <SectorTemplate {...data} />;
};

export default Finance;

