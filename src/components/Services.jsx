import React from 'react';
import { ShoppingCart, CalendarCheck, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <ShoppingCart size={32} />,
      title: t('services', 'eshop'),
      description: t('services', 'eshopDesc')
    },
    {
      icon: <CalendarCheck size={32} />,
      title: t('services', 'booking'),
      description: t('services', 'bookingDesc')
    },
    {
      icon: <Server size={32} />,
      title: t('services', 'pos'),
      description: t('services', 'posDesc')
    }
  ];

  return (
    <section id="services" className="section bg-navy">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t('services', 'title')} <span className="text-gold">{t('services', 'titleHighlight')}</span></h2>
          <p className="subtitle">{t('services', 'subtitle')}</p>
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
