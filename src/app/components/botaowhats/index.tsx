import React from 'react';

const WhatsappButton = () => {
  const whatsappNumber = '5524999316081'; // Substitua pelo número da cafeteria
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '9999',
        animation: 'bounce 1.2s infinite',
        display: 'inline-block'
      }}
    >
      <img
        src="/whats4.png" // Certifique-se de ter um ícone do WhatsApp na pasta public
        alt="WhatsApp"
        style={{ width: '80px', height: '80px' }}
      />
    </a>
  );
};

export default WhatsappButton;