import React from 'react';
import { ShieldCheck, Clock, CheckCircle, Lock } from 'lucide-react';
import './Process.css';

const Process = () => {
  const principles = [
    {
      icon: <CheckCircle size={28} />,
      title: "Transparency",
      description: "No hidden costs or technical jargon. You get clear communication and regular updates throughout the development lifecycle."
    },
    {
      icon: <Clock size={28} />,
      title: "Realistic Timelines",
      description: "I value your time. Project milestones are meticulously planned and adhered to, ensuring on-time delivery without compromising quality."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Clean Code",
      description: "Building scalable and maintainable solutions. Clean architecture ensures your software remains a robust asset for years."
    },
    {
      icon: <Lock size={28} />,
      title: "Security First",
      description: "Implementing industry-standard security protocols to protect your business data and your customers' privacy."
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="process-container">
          <div className="process-header">
            <h2>My <span className="text-navy">Philosophy</span></h2>
            <p>A professional approach to digital transformation, built on trust and engineering excellence.</p>
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
