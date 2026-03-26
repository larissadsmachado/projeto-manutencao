'use client';

import { useState, useEffect } from 'react';

const MaintenanceCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`container ${isVisible ? 'fade-in' : ''}`}>
      <style jsx>{`
        .container {
          position: relative;
          z-index: 1;
          max-width: 600px;
          width: 100%;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .container.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          padding: 50px 40px;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
        
        .icon {
          font-size: 80px;
          margin-bottom: 20px;
          display: inline-block;
          animation: pulse 2s ease-in-out infinite;
        }
        
        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .message {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .dots-animation {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin: 40px 0;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite;
        }
        
        .dot:nth-child(1) {
          animation-delay: 0s;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        .info {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin: 30px 0;
          flex-wrap: wrap;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #666;
          font-size: 0.9rem;
        }
        
        .footer {
          margin-top: 30px;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .card {
            padding: 35px 25px;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          .message {
            font-size: 1rem;
          }
          
          .info {
            gap: 15px;
          }
          
          .info-item {
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .card {
            padding: 25px 20px;
          }
          
          h1 {
            font-size: 1.8rem;
          }
          
          .icon {
            font-size: 60px;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0.6);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
      
      <div className="card">
        <div className="icon">
          🔧⚙️
        </div>
        
        <h1>Em Manutenção</h1>
        
        <div className="message">
          Estamos trabalhando para melhorar sua experiência!<br />
          Nosso site estará de volta em breve com novidades incríveis.
        </div>
        
        <div className="dots-animation">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        
        <div className="info">
          <div className="info-item">
            <span>🕐</span>
            <span>Previsão: 24 horas</span>
          </div>
          <div className="info-item">
            <span>🚀</span>
            <span>Melhorias em andamento</span>
          </div>
          <div className="info-item">
            <span>💡</span>
            <span>Novas funcionalidades</span>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <p>Agradecemos sua paciência e compreensão!</p>
      </div>
    </div>
  );
};

export default MaintenanceCard;