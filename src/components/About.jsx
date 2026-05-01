import React from 'react';
import { BookOpen, Target, Code } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-off-white">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Bridging Theory with <span className="text-teal">Real-World Impact</span></h2>
            <p>
              I am Fotis Apostolou, a final-year student in the Department of Digital Systems at the <strong>University of Piraeus</strong>. 
            </p>
            <p>
              My philosophy is simple: software should not just look good; it must function flawlessly and drive measurable results for your business. I combine fresh academic knowledge with a practical, objective approach to build robust systems.
            </p>
            <p>
              Whether it's an automated booking system or a high-performance e-shop, I focus on the bottom line: efficiency, reliability, and revenue growth.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon"><BookOpen size={24} /></div>
              <div>
                <h3>Academic Excellence</h3>
                <p>University of Piraeus, Digital Systems. Applying rigorous academic principles to practical software engineering.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Target size={24} /></div>
              <div>
                <h3>Objective Approach</h3>
                <p>Data-driven decisions and performance-oriented architecture designed to solve real business bottlenecks.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Code size={24} /></div>
              <div>
                <h3>Clean Architecture</h3>
                <p>Writing maintainable, secure, and scalable code that serves as a long-term asset for your company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
