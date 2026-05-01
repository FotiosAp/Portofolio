import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Coffee Shop E-commerce & Barista POS",
      tags: ["Full-Stack", "E-commerce", "React", "Node.js"],
      description: "Flagship full-stack project. Features a customer-facing e-shop for online ordering and custom tablet software for baristas to manage incoming orders in real-time.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hair Salon Booking Platform",
      tags: ["Scheduling", "UI/UX", "Backend"],
      description: "A 24/7 user booking flow allowing clients to schedule appointments. Includes a comprehensive admin panel for staff to manage availability and services.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Subscription Management System",
      tags: ["FinTech", "API Integration", "Database"],
      description: "Robust backend logic designed for handling recurring payments, user tiers, and automated billing cycles securely and efficiently.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Targeted Landing Pages",
      tags: ["Conversion", "Frontend", "Analytics"],
      description: "Conversion-focused landing pages designed specifically for lead capture, utilizing A/B testing principles and modern UI patterns.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="portfolio" className="section bg-off-white">
      <div className="container">
        <div className="section-header">
          <h2>Featured <span className="text-teal">Projects</span></h2>
          <p className="subtitle" style={{color: 'var(--text-muted)', margin: 0}}>Demonstrating full-stack capability and business logic implementation.</p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-img-container">
                <img src={project.image} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <a href="#" className="portfolio-link"><ArrowUpRight size={24} /></a>
                </div>
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
