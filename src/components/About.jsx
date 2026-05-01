import React from 'react';
import { BookOpen, Target, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-off-white">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">{t('about', 'title1')} <span className="text-teal">{t('about', 'titleHighlight')}</span></h2>
            <p>
              {t('about', 'p1Start')}<strong>{t('about', 'p1Bold')}</strong>{t('about', 'p1End')}
            </p>
            <p>
              {t('about', 'p2')}
            </p>
            <p>
              {t('about', 'p3')}
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon"><BookOpen size={24} /></div>
              <div>
                <h3>{t('about', 'academic')}</h3>
                <p>{t('about', 'academicDesc')}</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Target size={24} /></div>
              <div>
                <h3>{t('about', 'objective')}</h3>
                <p>{t('about', 'objectiveDesc')}</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Code size={24} /></div>
              <div>
                <h3>{t('about', 'clean')}</h3>
                <p>{t('about', 'cleanDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
