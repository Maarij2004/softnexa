import React from 'react';
import SectorTemplate from './SectorTemplate';

const Education = () => {
  const data = {
    title: 'Education',
    description: 'Innovative e-learning platforms and educational technology solutions for schools, universities, and training institutions.',
    overview: 'SoftNexa creates comprehensive educational technology solutions that transform the learning experience. Our platforms enable educational institutions to deliver engaging content, track student progress, and facilitate seamless communication between students, teachers, and administrators.',
    services: [
      {
        icon: 'fas fa-laptop',
        title: 'Learning Management Systems',
        description: 'Comprehensive LMS platforms for course delivery and management.'
      },
      {
        icon: 'fas fa-video',
        title: 'Virtual Classrooms',
        description: 'Interactive online classrooms with video conferencing capabilities.'
      },
      {
        icon: 'fas fa-user-graduate',
        title: 'Student Portals',
        description: 'Student information systems and self-service portals.'
      },
      {
        icon: 'fas fa-chalkboard-teacher',
        title: 'Teacher Tools',
        description: 'Tools for lesson planning, grading, and student assessment.'
      },
      {
        icon: 'fas fa-certificate',
        title: 'Certification Systems',
        description: 'Online certification and credential management platforms.'
      },
      {
        icon: 'fas fa-brain',
        title: 'Adaptive Learning',
        description: 'AI-powered personalized learning paths and content recommendations.'
      }
    ],
    solutions: [
      'Learning Management Systems (LMS)',
      'Student Information Systems (SIS)',
      'Virtual classroom platforms',
      'Educational mobile applications',
      'Online assessment and testing tools',
      'School management systems',
      'E-learning content development',
      'Educational analytics platforms'
    ],
    benefits: [
      {
        icon: 'fas fa-users',
        title: 'Enhanced Engagement',
        description: 'Interactive learning experiences that increase student engagement.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Progress Tracking',
        description: 'Real-time analytics and progress monitoring for students and educators.'
      },
      {
        icon: 'fas fa-globe',
        title: 'Accessibility',
        description: 'Platforms accessible from anywhere, anytime, on any device.'
      },
      {
        icon: 'fas fa-trophy',
        title: 'Better Outcomes',
        description: 'Improved learning outcomes through personalized and adaptive learning.'
      }
    ],
    caseStudy: {
      description: 'We developed a comprehensive LMS for a university, enabling seamless online learning for thousands of students.',
      results: [
        { number: '10K+', label: 'Active Users' },
        { number: '90%', label: 'Student Satisfaction' },
        { number: '40%', label: 'Cost Reduction' }
      ]
    }
  };

  return <SectorTemplate {...data} />;
};

export default Education;

