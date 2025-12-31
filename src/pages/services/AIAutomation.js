import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';

const AIAutomation = () => {
  const data = {
    title: 'AI & Advanced Automation',
    description: 'Intelligent automation solutions and AI-powered systems to optimize your business processes.',
    overview: 'Leverage the power of artificial intelligence and automation to streamline operations, reduce costs, and enhance decision-making. Our AI solutions are designed to integrate seamlessly with your existing systems and provide actionable insights that drive business growth.',
    features: [
      {
        icon: 'fas fa-brain',
        title: 'Machine Learning',
        description: 'Custom ML models trained on your data to predict trends, detect patterns, and automate decision-making.'
      },
      {
        icon: 'fas fa-comments',
        title: 'Chatbots & Virtual Assistants',
        description: 'Intelligent chatbots that handle customer inquiries, provide support, and improve user engagement 24/7.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Predictive Analytics',
        description: 'Advanced analytics that forecast trends, identify opportunities, and support data-driven decisions.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'Process Automation',
        description: 'Automate repetitive tasks and workflows to increase efficiency and reduce manual errors.'
      },
      {
        icon: 'fas fa-image',
        title: 'Computer Vision',
        description: 'Image and video analysis solutions for quality control, security, and content moderation.'
      },
      {
        icon: 'fas fa-language',
        title: 'Natural Language Processing',
        description: 'NLP solutions for sentiment analysis, text classification, and automated content generation.'
      }
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced operational costs',
      'Improved accuracy and consistency',
      'Enhanced customer experience',
      'Data-driven insights',
      'Scalable solutions'
    ],
    process: [
      {
        title: 'Assessment & Planning',
        description: 'We assess your processes, identify automation opportunities, and develop an AI strategy.'
      },
      {
        title: 'Solution Design',
        description: 'We design custom AI and automation solutions tailored to your specific business needs.'
      },
      {
        title: 'Development & Integration',
        description: 'Our team develops and integrates AI solutions with your existing systems and workflows.'
      },
      {
        title: 'Training & Optimization',
        description: 'We train your team and fine-tune AI models for optimal performance and accuracy.'
      },
      {
        title: 'Monitoring & Support',
        description: 'Ongoing monitoring and support ensure your AI solutions continue to deliver value over time.'
      }
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS AI', 'RPA', 'NLP']
  };

  return <ServiceDetailTemplate {...data} />;
};

export default AIAutomation;

