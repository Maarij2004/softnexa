import React from 'react';
import SectorTemplate from './SectorTemplate';

const Healthcare = () => {
  const data = {
    title: 'Healthcare',
    description: 'Digital transformation solutions for healthcare providers, hospitals, and medical organizations.',
    overview: 'Softnexa specializes in delivering cutting-edge technology solutions tailored for the healthcare industry. We help healthcare providers improve patient care, streamline operations, and enhance operational efficiency through innovative digital solutions.',
    services: [
      {
        icon: 'fas fa-hospital',
        title: 'Healthcare Management Systems',
        description: 'Comprehensive hospital management and patient information systems.'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Telemedicine Platforms',
        description: 'Secure video consultation and remote patient monitoring solutions.'
      },
      {
        icon: 'fas fa-file-medical',
        title: 'Electronic Health Records',
        description: 'Digital health records management with HIPAA compliance.'
      },
      {
        icon: 'fas fa-robot',
        title: 'AI-Powered Diagnostics',
        description: 'Machine learning solutions for medical imaging and diagnostics.'
      },
      {
        icon: 'fas fa-calendar-check',
        title: 'Appointment Management',
        description: 'Patient scheduling and appointment booking systems.'
      },
      {
        icon: 'fas fa-pills',
        title: 'Pharmacy Management',
        description: 'Inventory and prescription management solutions.'
      }
    ],
    solutions: [
      'HIPAA-compliant applications',
      'Telemedicine and telehealth platforms',
      'Electronic Medical Records (EMR) systems',
      'Medical billing and coding software',
      'Patient portal development',
      'Healthcare mobile applications',
      'Laboratory information systems',
      'Medical imaging solutions'
    ],
    benefits: [
      {
        icon: 'fas fa-shield-alt',
        title: 'Security & Compliance',
        description: 'HIPAA-compliant solutions with robust security measures.'
      },
      {
        icon: 'fas fa-user-friends',
        title: 'Enhanced Patient Care',
        description: 'Improved patient outcomes through better care coordination.'
      },
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Operational Efficiency',
        description: 'Streamlined workflows and reduced administrative burden.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Data Analytics',
        description: 'Actionable insights from patient and operational data.'
      }
    ],
    caseStudy: {
      description: 'We helped a major hospital network implement a comprehensive telemedicine platform, resulting in significant improvements in patient access and operational efficiency.',
      results: [
        { number: '85%', label: 'Patient Satisfaction' },
        { number: '40%', label: 'Reduced Wait Times' },
        { number: '60%', label: 'Cost Savings' }
      ]
    }
  };

  return <SectorTemplate {...data} />;
};

export default Healthcare;

