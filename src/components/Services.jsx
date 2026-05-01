import React from 'react';
import { ShoppingCart, CalendarCheck, Server } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart size={32} />,
      title: "High-Performance E-shops",
      description: "Sales-optimized, mobile-first design with lightning-fast load times. Perfect for local retail stores and bakeries looking to expand their digital footprint."
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "Automated Booking Systems",
      description: "24/7 scheduling platforms tailored for salons, clinics, and consultants. Significantly reduce manual errors and save hours of administrative work."
    },
    {
      icon: <Server size={32} />,
      title: "Custom POS & Backend",
      description: "Streamline your internal operations with custom Point-Of-Sale software. Seamlessly integrate complex backend business logic with intuitive front-end interfaces."
    }
  ];

  return (
    <section id="services" className="section bg-navy">
      <div className="container">
        <div className="section-header text-center">
          <h2>Core <span className="text-gold">Services</span></h2>
          <p className="subtitle">Specialized digital solutions engineered for operational efficiency.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
