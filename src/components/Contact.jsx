import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', businessType: '', projectDescription: '' });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Unknown error.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-navy">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2>{t('contact', 'title')} <span className="text-gold">{t('contact', 'titleHighlight')}</span> {t('contact', 'title2')}</h2>
            <p className="contact-subtitle">
              {t('contact', 'subtitle')}
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4>{t('contact', 'email')}</h4>
                  <a href="mailto:fotisapostolou90@gmail.com">fotisapostolou90@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <h4>{t('contact', 'phone')}</h4>
                  <a href="tel:+306940367735">+30 6940367735</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4>{t('contact', 'location')}</h4>
                  <p>{t('contact', 'locationValue')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {status === 'success' ? (
              <div className="success-message">
                <div className="success-icon">
                  <CheckCircle size={64} />
                </div>
                <h3>{t('contact', 'successTitle')}</h3>
                <p>{t('contact', 'successMsg')}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setStatus('idle')}
                >
                  {t('contact', 'sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {status === 'error' && (
                  <div className="error-banner">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">{t('contact', 'formName')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder={t('contact', 'formNamePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">{t('contact', 'formEmail')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder={t('contact', 'formEmailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="businessType" className="form-label">{t('contact', 'formType')}</label>
                  <input 
                    type="text" 
                    id="businessType" 
                    name="businessType" 
                    className="form-input" 
                    placeholder={t('contact', 'formTypePlaceholder')}
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectDescription" className="form-label">{t('contact', 'formDesc')}</label>
                  <textarea 
                    id="projectDescription" 
                    name="projectDescription" 
                    className="form-textarea" 
                    placeholder={t('contact', 'formDescPlaceholder')}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn" 
                  disabled={status === 'submitting'} 
                  style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="spin" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      {t('contact', 'submit')}...
                    </>
                  ) : (
                    <>
                      {t('contact', 'submit')} <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
