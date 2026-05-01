import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#001A2C', color: 'rgba(255,255,255,0.7)', padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Fotis Apostolou. All rights reserved. <br/>
          Built with React & Modern Web Technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
