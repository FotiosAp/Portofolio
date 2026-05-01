import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>
          Digital Solutions That Drive <br />
          <span className="text-gold">Revenue</span> for Small Businesses
        </h1>
        <p className="hero-subtitle">
          Specialized in E-commerce, automated Booking Systems, and custom POS software. 
          Built by a Digital Systems specialist from the University of Piraeus.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            View My Work <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Let's Discuss
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
