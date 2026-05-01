import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>
          {t('hero', 'title1')} <br />
          <span className="text-gold">{t('hero', 'titleHighlight')}</span> {t('hero', 'title2')}
        </h1>
        <p className="hero-subtitle">
          {t('hero', 'subtitle')}
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            {t('hero', 'viewWork')} <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </a>
          <a href="#contact" className="btn btn-outline">
            {t('hero', 'letDiscuss')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
