import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const UKFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="21" height="14" preserveAspectRatio="none" style={{borderRadius: '2px'}}>
    <clipPath id="t"><path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/></clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const GRFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18" width="21" height="14" style={{borderRadius: '2px'}}>
    {/* Blue background */}
    <rect fill="#0D5EAF" width="27" height="18"/>
    {/* 4 White stripes */}
    <path fill="#FFF" d="M0,2h27v2H0Zm0,4h27v2H0Zm0,4h27v2H0Zm0,4h27v2H0Z"/>
    {/* Blue canton (top-left square) to cover the stripes */}
    <rect fill="#0D5EAF" width="10" height="10"/>
    {/* White cross inside the canton */}
    <path fill="#FFF" d="M4,0h2v10H4ZM0,4h10v2H0Z"/>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav', 'home'), href: '#home' },
    { name: t('nav', 'about'), href: '#about' },
    { name: t('nav', 'services'), href: '#services' },
    { name: t('nav', 'portfolio'), href: '#portfolio' },
    { name: t('nav', 'process'), href: '#process' },
    { name: t('nav', 'contact'), href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          FA<span className="text-gold">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Language Toggle */}
        <div className="nav-actions">
          <div className="lang-switch" onClick={toggleLanguage} title="Change Language">
            <div className={`lang-slider ${language === 'el' ? 'right' : 'left'}`}></div>
            <div className={`lang-option ${language === 'en' ? 'active' : ''}`}>
              <UKFlag />
              <span>EN</span>
            </div>
            <div className={`lang-option ${language === 'el' ? 'active' : ''}`}>
              <GRFlag />
              <span>EL</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
