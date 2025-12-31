import React from 'react';
import SectionTitle from './SectionTitle';
import './About.css';

const About = ({ showTitle = true }) => {
  const stats = [
    { number: '500+', text: 'Projects Completed' },
    { number: '200+', text: 'Happy Clients' },
    { number: '50+', text: 'Team Members' },
    { number: '10+', text: 'Years Experience' }
  ];

  return (
    <section className="about">
      <div className="container">
        {showTitle && (
          <SectionTitle 
            title="About Softnexa" 
            subtitle="Leading the digital transformation journey with innovative solutions and cutting-edge technology."
          />
        )}
        
        <div className="about-content">
          <div className="about-text">
            <h2>Transforming Businesses Through Innovation</h2>
            <p>
              Softnexa is a leading digital transformation company specializing in delivering comprehensive software solutions that drive business growth. With a team of experienced developers, designers, and digital strategists, we help businesses navigate the digital landscape and achieve their goals.
            </p>
            <p>
              Our expertise spans across digital marketing, web and mobile development, AI automation, SEO optimization, and e-commerce solutions. We combine cutting-edge technology with creative strategies to deliver solutions that not only meet but exceed our clients' expectations.
            </p>
            <p>
              At Softnexa, we believe in building long-term partnerships with our clients. We take the time to understand your business, your challenges, and your goals to deliver tailored solutions that provide real value and measurable results.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-text">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="SoftNexa Team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

