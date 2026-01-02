import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // EmailJS Configuration
  const SERVICE_ID = 'service_ua43k89';
  const TEMPLATE_ID = 'template_udm8cwv'; // Template for sending form data to softnexatech@gmail.com
  const CONFIRMATION_TEMPLATE_ID = 'template_nt9rx08'; // Template for sending confirmation to user
  const PUBLIC_KEY = '9hdcFKg4qoOFMEj0V';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS template parameters for business email (softnexatech@gmail.com)
    const businessEmailParams = {
      to_email: 'softnexatech@gmail.com', // Your business email - receives form submission
      from_name: formData.name, // User's name
      from_email: formData.email, // User's email
      reply_to: formData.email, // Allows replying directly to the sender
      phone: formData.phone || 'Not provided',
      service: formData.service || 'Not specified',
      message: formData.message,
      user_name: formData.name,
      user_email: formData.email
    };

    // EmailJS template parameters for user confirmation email
    const userConfirmationParams = {
      to_email: formData.email, // User's email - receives confirmation
      to_name: formData.name,
      from_name: 'Softnexa Team', // Matches your template "From Name"
      from_email: 'softnexatech@gmail.com', // Your business email
      reply_to: 'softnexatech@gmail.com', // Matches your template "Reply To"
      user_name: formData.name,
      service_inquiry: formData.service || 'General Inquiry',
      confirmation_message: `Dear ${formData.name},\n\nThank you for contacting Softnexa! We have received your message and will get back to you soon.\n\nYour inquiry regarding "${formData.service || 'General Inquiry'}" has been noted.\n\nWe appreciate your interest in our services and will respond within 24-48 hours.\n\nBest regards,\nSoftnexa Team\n\n---\nSoftnexa - Digital Transformation Solutions\nEmail: softnexatech@gmail.com`
    };

    try {
      // Step 1: Send form submission to your business email (softnexatech@gmail.com)
      const businessResponse = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        businessEmailParams,
        PUBLIC_KEY
      );

      console.log('Form submission sent to softnexatech@gmail.com:', businessResponse);

      // Step 2: Send confirmation email to the user
      const confirmationResponse = await emailjs.send(
        SERVICE_ID,
        CONFIRMATION_TEMPLATE_ID, // Confirmation template for user
        userConfirmationParams,
        PUBLIC_KEY
      );

      console.log('Confirmation email sent to user:', confirmationResponse);

      setSubmitStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! We have received your message and will get back to you soon. A confirmation email has been sent to ${formData.email}.`
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error Details:', {
        text: error.text,
        status: error.status,
        message: error.message,
        error: error
      });
      
      let errorMessage = 'Sorry, there was an error sending your message. ';
      
      // Handle different types of errors
      if (error.message && (error.message.includes('Failed to fetch') || error.message.includes('ERR_CONNECTION_RESET'))) {
        errorMessage += 'Network connection issue detected. This could be due to: ';
        errorMessage += '1) Firewall/antivirus blocking the request, ';
        errorMessage += '2) Network connectivity issues, or ';
        errorMessage += '3) EmailJS service temporarily unavailable. ';
        errorMessage += 'Please try: refreshing the page, checking your internet connection, or temporarily disabling firewall/antivirus. ';
      } else if (error.text) {
        if (error.text.includes('Invalid template ID') || error.text.includes('template')) {
          errorMessage += 'Please verify the template is set up correctly in EmailJS. ';
        } else if (error.text.includes('Invalid service ID')) {
          errorMessage += 'Please verify the service is connected in EmailJS. ';
        } else if (error.text.includes('Invalid public key')) {
          errorMessage += 'Please verify the public key is correct. ';
        } else if (error.text.includes('recipients address is empty')) {
          errorMessage += 'Please configure the recipient email in your EmailJS template settings. ';
        } else {
          errorMessage += error.text + ' ';
        }
      } else if (error.status) {
        errorMessage += `Error code: ${error.status}. `;
      }
      
      errorMessage += 'You can also contact us directly at softnexatech@gmail.com';
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
        showMailto: true // Show mailto link as fallback
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Fill out the form or reach out to us directly using the information below.</p>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>softnexatech@gmail.com</p>
                </div>
              </div>


              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitStatus.message && (
                <div className={`submit-message ${submitStatus.type}`}>
                  <i className={`fas ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  <p>{submitStatus.message}</p>
                  {submitStatus.showMailto && (
                    <a 
                      href={`mailto:softnexatech@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone || 'Not provided')}%0AService: ${encodeURIComponent(formData.service || 'Not specified')}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`}
                      className="mailto-fallback-btn"
                    >
                      <i className="fas fa-envelope"></i> Send via Email Client
                    </a>
                  )}
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="seo">SEO Services</option>
                    <option value="shopify">Shopify Solutions</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

