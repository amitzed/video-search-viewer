import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3" style={{color: '#4183c4'}}>
        © {(new Date().getFullYear())}&nbsp;
        <a href="https://amitzaman.com/" target="_blank">Amit Zaman</a>
      </div>
    </footer>
  )
};
