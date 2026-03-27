'use client';

import { useState, useEffect } from 'react';

const MaintenanceCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dots, setDots] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setDots(d => (d + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #e8f5e9 0%, #f1f8e9 40%, #fffde7 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Arial, sans-serif",
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background decorative circles */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(76, 175, 80, 0.12)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '250px', height: '250px', borderRadius: '50%',
        background: 'rgba(255, 165, 0, 0.10)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '-40px',
        width: '150px', height: '150px', borderRadius: '50%',
        background: 'rgba(25, 118, 210, 0.08)', pointerEvents: 'none',
      }} />

      {/* Header bar — igual ao site */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: '#1565C0',
        height: '8px',
        zIndex: 100,
      }} />
      <div style={{
        position: 'fixed', top: '8px', left: 0, right: 0,
        background: '#F5A623',
        height: '4px',
        zIndex: 100,
      }} />

      {/* Card principal */}
      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        maxWidth: '560px',
        width: '100%',
        marginTop: '24px',
      }}>
        

        {/* Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '48px 40px 40px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(21,101,192,0.13), 0 4px 16px rgba(0,0,0,0.07)',
          border: '1.5px solid #e3f2fd',
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Topo colorido do card */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
            background: 'linear-gradient(90deg, #43A047 0%, #F5A623 50%, #1565C0 100%)',
          }} />

          {/* Ícone animado */}
          <div style={{
            fontSize: '72px',
            marginBottom: '16px',
            display: 'inline-block',
            animation: 'pulse 2.2s ease-in-out infinite',
          }}>
            ⚙️🔧
          </div>

          {/* Título */}
          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: '900',
            color: '#1565C0',
            margin: '0 0 6px',
            letterSpacing: '-0.5px',
            lineHeight: 1.1,
          }}>
            Em Manutenção
          </h1>

          {/* Sub-linha laranja */}
          <div style={{
            width: '60px', height: '4px', borderRadius: '4px',
            background: '#F5A623',
            margin: '12px auto 20px',
          }} />

          {/* Mensagem */}
          <p style={{
            fontSize: '1.05rem',
            color: '#546e7a',
            lineHeight: 1.7,
            margin: '0 0 32px',
          }}>
            Estamos trabalhando para melhorar sua experiência!<br />
            O sistema estará de volta em breve com novidades incríveis.
          </p>

          {/* Dots animados */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '10px', margin: '28px 0',
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: '12px', height: '12px', borderRadius: '50%',
                background: i === 0 ? '#43A047' : i === 1 ? '#F5A623' : '#1565C0',
                animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite`,
              }} />
            ))}
          </div>

          {/* Info badges */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: '12px', flexWrap: 'wrap', margin: '28px 0 0',
          }}>
            {[
              { icon: '🕐', text: 'Previsão: 24h', color: '#e3f2fd', border: '#90caf9', textColor: '#1565C0' },
              { icon: '🚀', text: 'Melhorias', color: '#fff8e1', border: '#ffe082', textColor: '#e65100' },
              { icon: '💡', text: 'Novas funções', color: '#e8f5e9', border: '#a5d6a7', textColor: '#2e7d32' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: item.color,
                border: `1.5px solid ${item.border}`,
                borderRadius: '50px',
                padding: '7px 16px',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: item.textColor,
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <div style={{
          textAlign: 'center', marginTop: '24px',
          color: '#78909c', fontSize: '0.88rem',
        }}>
          Agradecemos sua paciência e compreensão!
        </div>

        {/* Assinatura Jaboatão */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: '8px', marginTop: '16px',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#43A047',
          }} />
          <span style={{
            fontSize: '0.78rem', fontWeight: '700',
            color: '#1565C0', letterSpacing: '1.5px', textTransform: 'uppercase',
          }}>
            Prefeitura de Jaboatão dos Guararapes
          </span>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#F5A623',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default MaintenanceCard;