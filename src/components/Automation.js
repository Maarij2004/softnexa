import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import './Automation.css';

const Automation = () => {
  const automationFeatures = [
    {
      icon: 'fas fa-comments',
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that handles customer inquiries 24/7, provides instant support, and improves customer satisfaction with natural language processing.'
    },
    {
      icon: 'fas fa-microphone',
      title: 'AI Voice Agents',
      description: 'Advanced voice-enabled AI assistants that can handle phone calls, provide voice-based customer service, and automate voice interactions with human-like responses.'
    },
    {
      icon: 'fas fa-robot',
      title: 'Process Automation',
      description: 'Streamline repetitive tasks and workflows with intelligent automation that reduces manual work, increases efficiency, and minimizes errors.'
    },
    {
      icon: 'fas fa-brain',
      title: 'Smart Analytics',
      description: 'AI-powered analytics that provide actionable insights, predict trends, and help make data-driven business decisions.'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Integration Solutions',
      description: 'Seamlessly connect your existing systems with AI-powered automation tools for unified operations and enhanced productivity.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance features ensuring your automated processes meet industry standards and regulations.'
    }
  ];

  return (
    <section className="automation">
      <div className="container">
        <SectionTitle 
          title="AI Automation & Advanced Solutions" 
          subtitle="Transform your business with cutting-edge AI automation, intelligent chatbots, and voice agents that work around the clock to enhance customer experience and operational efficiency."
        />
        
        <div className="automation-grid">
          {automationFeatures.map((feature, index) => (
            <div key={index} className="automation-card">
              <div className="automation-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="automation-cta">
          <div className="automation-cta-content">
            <h2>Ready to Automate Your Business?</h2>
            <p>Schedule a personalized demo to see how our AI automation solutions can transform your operations and drive growth.</p>
            <div className="automation-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-check"></i> Schedule a Demo
              </Link>
              <Link to="/services/ai-automation" className="btn btn-outline">
                <i className="fas fa-info-circle"></i> View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;

