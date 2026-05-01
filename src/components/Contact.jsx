import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would handle form submission here
    alert('Thank you for your message! I will get back to you shortly.');
    setFormData({ name: '', email: '', businessType: '', projectDescription: '' });
  };

  return (
    <section id="contact" className="section bg-navy">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2>Let's discuss how to <span className="text-gold">digitize</span> your business.</h2>
            <p className="contact-subtitle">
              Ready to upgrade your operations and increase revenue? Reach out directly or fill out the form, and I'll be in touch within 24 hours.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:fotisapostolou90@gmail.com">fotisapostolou90@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+306940367735">+30 6940367735</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Athens / Piraeus, Greece</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="businessType" className="form-label">Business Type</label>
                <input 
                  type="text" 
                  id="businessType" 
                  name="businessType" 
                  className="form-input" 
                  placeholder="e.g., Bakery, Hair Salon, Consulting"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectDescription" className="form-label">Project Description</label>
                <textarea 
                  id="projectDescription" 
                  name="projectDescription" 
                  className="form-textarea" 
                  placeholder="Tell me about your current bottlenecks and what you want to build..."
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
