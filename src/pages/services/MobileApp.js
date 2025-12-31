import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';

const MobileApp = () => {
  const data = {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    overview: 'We develop powerful, user-friendly mobile applications that engage users and drive business growth. Whether you need a native iOS or Android app, or a cross-platform solution, our team delivers high-quality mobile experiences that meet your business objectives.',
    features: [
      {
        icon: 'fab fa-apple',
        title: 'iOS Development',
        description: 'Native iOS applications built with Swift and SwiftUI for seamless performance on iPhones and iPads.'
      },
      {
        icon: 'fab fa-android',
        title: 'Android Development',
        description: 'Native Android apps developed with Kotlin and Jetpack Compose for optimal performance and user experience.'
      },
      {
        icon: 'fas fa-code',
        title: 'Cross-Platform Development',
        description: 'React Native and Flutter apps that work on both iOS and Android, reducing development time and costs.'
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'UI/UX Design',
        description: 'Intuitive and beautiful user interfaces designed following platform guidelines and best practices.'
      },
      {
        icon: 'fas fa-cloud',
        title: 'Backend Integration',
        description: 'Seamless integration with APIs, databases, and cloud services for robust app functionality.'
      },
      {
        icon: 'fas fa-rocket',
        title: 'App Store Optimization',
        description: 'ASO strategies to improve your app\'s visibility and ranking in app stores.'
      }
    ],
    benefits: [
      'Increased customer engagement',
      'Enhanced brand presence',
      'Better customer service',
      'New revenue opportunities',
      'Improved operational efficiency',
      'Competitive advantage'
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'We analyze your business needs, target audience, and platform requirements to plan your mobile app.'
      },
      {
        title: 'Design & Prototyping',
        description: 'We create wireframes, mockups, and interactive prototypes to visualize the app before development.'
      },
      {
        title: 'Development',
        description: 'Our developers build your app using native or cross-platform technologies based on your needs.'
      },
      {
        title: 'Testing & QA',
        description: 'Rigorous testing across devices and operating systems ensures a bug-free user experience.'
      },
      {
        title: 'Deployment & Launch',
        description: 'We handle app store submission and launch, ensuring a smooth rollout to your users.'
      }
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android', 'Firebase', 'REST APIs']
  };

  return <ServiceDetailTemplate {...data} />;
};

export default MobileApp;

