import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import './FAQ.css';

const FAQ = ({ showTitle = true }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What software services does Softnexa offer?',
      answer: 'Softnexa provides comprehensive digital transformation services including Digital Marketing, Web Development, Mobile App Development (iOS and Android), AI & Advanced Automation, Search Engine Optimization (SEO), and Shopify E-commerce Solutions. We specialize in creating custom software solutions tailored to your business needs.'
    },
    {
      question: 'What industries does Softnexa serve?',
      answer: 'We serve a wide range of industries including Finance, E-commerce, Education, Manufacturing, Real Estate, Retail, and Technology. Our expertise spans across various sectors, allowing us to provide specialized solutions that understand the unique challenges and requirements of each industry.'
    },
    {
      question: 'How long has Softnexa been in business?',
      answer: 'Softnexa has over 10 years of experience in the digital transformation space. With 500+ completed projects and 200+ happy clients, we have established ourselves as a trusted partner for businesses seeking innovative software solutions.'
    },
    {
      question: 'What technologies and frameworks does Softnexa use?',
      answer: 'We use the latest technologies and frameworks including React, Node.js, Python, AI/ML technologies, cloud platforms (AWS, Azure, GCP), mobile development frameworks, and modern web technologies. Our team stays up-to-date with industry best practices and emerging technologies to deliver cutting-edge solutions.'
    },
    {
      question: 'How does the project development process work?',
      answer: 'Our development process follows industry best practices: we start with discovery and requirements gathering, move to design and architecture planning, followed by development and testing phases, and conclude with deployment and ongoing support. We maintain transparent communication throughout the project lifecycle with regular updates and client collaboration.'
    },
    {
      question: 'Does Softnexa provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance services for all our software solutions. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support. We believe in building long-term partnerships with our clients to ensure their digital solutions continue to perform optimally.'
    },
    {
      question: 'What is Softnexa\'s approach to AI and automation?',
      answer: 'Softnexa specializes in AI-powered solutions including intelligent chatbots, voice agents, process automation, machine learning models, and smart analytics. We help businesses automate repetitive tasks, enhance customer experiences, and make data-driven decisions through cutting-edge AI technologies.'
    },
    {
      question: 'Can Softnexa handle both small and large-scale projects?',
      answer: 'Absolutely! We have experience working with startups, small businesses, and large enterprises. Our flexible team structure allows us to scale resources according to project requirements. Whether you need a simple website or a complex enterprise application, we have the expertise to deliver.'
    },
    {
      question: 'How does Softnexa ensure data security and compliance?',
      answer: 'Security is a top priority at Softnexa. We implement industry-standard security measures, follow best practices for data protection, and ensure compliance with relevant regulations. Our solutions include encryption, secure authentication, regular security audits, and compliance with GDPR, HIPAA, and other industry-specific requirements where applicable.'
    },
    {
      question: 'What sets Softnexa apart from other software service providers?',
      answer: 'Softnexa combines technical expertise with creative strategies to deliver solutions that exceed expectations. We focus on understanding your business deeply, providing personalized service, maintaining transparency throughout the process, and building long-term partnerships. Our team of 50+ experienced professionals ensures quality delivery with a commitment to innovation and client success.'
    },
    {
      question: 'How can I get started with Softnexa?',
      answer: 'Getting started is easy! Simply reach out to us through our contact page, email us at softnexatech@gmail.com, or fill out our contact form. We\'ll schedule a consultation to understand your requirements and provide a customized proposal. We\'re here to help transform your business through innovative digital solutions.'
    },
    {
      question: 'Does Softnexa offer e-commerce solutions?',
      answer: 'Yes, we specialize in Shopify store development, customization, and integration. Our e-commerce solutions include custom theme development, app integrations, payment gateway setup, inventory management, and optimization for conversions. We help businesses create powerful online shopping experiences that drive sales and customer engagement.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        {showTitle && (
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about Softnexa's software services and digital solutions."
          />
        )}
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

