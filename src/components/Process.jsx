import React from 'react';
import { ShieldCheck, Clock, CheckCircle, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Process.css';

const Process = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: <CheckCircle size={28} />,
      title: t('process', 'transparency'),
      description: t('process', 'transparencyDesc')
    },
    {
      icon: <Clock size={28} />,
      title: t('process', 'timeline'),
      description: t('process', 'timelineDesc')
    },
    {
      icon: <ShieldCheck size={28} />,
      title: t('process', 'cleanCode'),
      description: t('process', 'cleanCodeDesc')
    },
    {
      icon: <Lock size={28} />,
      title: t('process', 'security'),
      description: t('process', 'securityDesc')
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="process-container">
          <div className="process-header">
            <h2>{t('process', 'title')} <span className="text-navy">{t('process', 'titleHighlight')}</span></h2>
            <p>{t('process', 'subtitle')}</p>
          </div>
          
          <div className="process-grid">
            {principles.map((item, index) => (
              <div key={index} className="process-item">
                <div className="process-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
