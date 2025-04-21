import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#272727', color: '#f2f2f2', textAlign: 'center', padding: '20px', fontSize: '14px' }}>
      Contato: <a href="mailto:contato@capiva.tech" style={{ color: '#f39308' }}>contato@capiva.tech</a><br />
      © 2025 Capiva. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
