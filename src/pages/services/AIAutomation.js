import React from 'react';
import ServiceDetailTemplate from './ServiceDetailTemplate';

const AIAutomation = () => {
  const data = {
    title: 'AI & Advanced Automation',
    description: 'Intelligent automation solutions and AI-powered systems to optimize your business processes.',
    overview: 'Leverage the power of artificial intelligence and automation to streamline operations, reduce costs, and enhance decision-making. Our AI solutions are designed to integrate seamlessly with your existing systems and provide actionable insights that drive business growth.',
    features: [
      {
        icon: 'fas fa-comments',
        title: 'AI Chatbots',
        description: 'Intelligent conversational AI chatbots that handle customer inquiries 24/7, provide instant support, answer questions, process orders, and improve customer satisfaction with natural language processing and machine learning capabilities.'
      },
      {
        icon: 'fas fa-microphone',
        title: 'AI Voice Agents',
        description: 'Advanced voice-enabled AI assistants that can handle phone calls, provide voice-based customer service, automate voice interactions with human-like responses, support multiple languages, and integrate with your existing phone systems.'
      },
      {
        icon: 'fas fa-brain',
        title: 'Machine Learning',
        description: 'Custom ML models trained on your data to predict trends, detect patterns, automate decision-making, and continuously learn from interactions to improve performance over time.'
      },
      {
        icon: 'fas fa-robot',
        title: 'Process Automation',
        description: 'Intelligent automation that streamlines repetitive tasks and workflows, reduces manual work, increases efficiency, minimizes errors, and frees up your team for strategic work.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Predictive Analytics',
        description: 'Advanced AI-powered analytics that forecast trends, identify opportunities, predict customer behavior, and support data-driven business decisions with actionable insights.'
      },
      {
        icon: 'fas fa-sync-alt',
        title: 'Integration Solutions',
        description: 'Seamlessly connect your existing systems, CRM, ERP, and third-party applications with AI-powered automation tools for unified operations and enhanced productivity.'
      },
      {
        icon: 'fas fa-image',
        title: 'Computer Vision',
        description: 'Image and video analysis solutions for quality control, security monitoring, content moderation, and automated visual inspection using advanced AI algorithms.'
      },
      {
        icon: 'fas fa-language',
        title: 'Natural Language Processing',
        description: 'NLP solutions for sentiment analysis, text classification, automated content generation, document processing, and multilingual support across various languages.'
      }
    ],
    benefits: [
      '24/7 customer support with AI chatbots and voice agents',
      'Increased operational efficiency through intelligent automation',
      'Reduced operational costs by up to 60%',
      'Improved accuracy and consistency in all processes',
      'Enhanced customer experience with instant responses',
      'Data-driven insights and predictive analytics',
      'Scalable solutions that grow with your business',
      'Multi-language support for global reach',
      'Seamless integration with existing systems',
      'Enterprise-grade security and compliance'
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

