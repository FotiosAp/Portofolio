import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Portfolio.css';

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('portfolio', 'p1Title'),
      tags: ["Full-Stack", "E-commerce", "React", "Node.js"],
      description: t('portfolio', 'p1Desc'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: t('portfolio', 'p2Title'),
      tags: ["Scheduling", "UI/UX", "Backend"],
      description: t('portfolio', 'p2Desc'),
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
      link: "https://barbershop-management-779.pages.dev/"
    },
    {
      title: t('portfolio', 'p3Title'),
      tags: ["FinTech", "API Integration", "Database"],
      description: t('portfolio', 'p3Desc'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: t('portfolio', 'p4Title'),
      tags: ["Conversion", "Frontend", "Analytics"],
      description: t('portfolio', 'p4Desc'),
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
      link: "https://nail-shop.pages.dev/"
    }
  ];

  return (
    <section id="portfolio" className="section bg-off-white">
      <div className="container">
        <div className="section-header">
          <h2>{t('portfolio', 'title')} <span className="text-teal">{t('portfolio', 'titleHighlight')}</span></h2>
          <p className="subtitle" style={{color: 'var(--text-muted)', margin: 0}}>{t('portfolio', 'subtitle')}</p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-img-container">
                <img src={project.image} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <div className="portfolio-link">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                {project.link !== "#" && (
                  <a 
                    href={project.link} 
                    className="portfolio-main-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={project.title}
                  />
                )}
              </div>
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
