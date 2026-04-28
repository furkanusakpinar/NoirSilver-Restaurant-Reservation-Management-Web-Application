import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-grid reveal">
        <div className="footer-brand">
          <h2 className="footer-logo">L'ELÉGANCE</h2>
          <p className="footer-tagline">Mükemmeliyet bir gelenektir.</p>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <h4>NAVİGASYON</h4>
            <ul>
              <li><a href="#hero">ANASAYFA</a></li>
              <li><a href="#menu">MENÜ</a></li>
              <li><a href="#about">HAKKIMIZDA</a></li>
              <li><a href="#reservation">REZERVASYON</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>İLETİŞİM</h4>
            <p>Levent, İstanbul</p>
            <p>+90 (212) 555 0123</p>
            <p>info@lelegance.com</p>
          </div>

          <div className="footer-col">
            <h4>SOSYAL</h4>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 L'Elégance Gastronomie. Tüm Hakları Saklıdır.</p>
      </div>

      <style>{`
        .footer-modern {
          padding: 100px 8% 50px;
          border-top: 1px solid var(--border);
          background: #050505;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 100px;
          margin-bottom: 80px;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          letter-spacing: 0.3em;
          margin-bottom: 20px;
        }

        .footer-tagline {
          color: var(--text-muted);
          font-size: 0.9rem;
          letter-spacing: 0.1em;
        }

        .footer-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
        }

        .footer-col h4 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          margin-bottom: 30px;
          color: var(--primary);
        }

        .footer-col ul li {
          margin-bottom: 15px;
        }

        .footer-col a, .footer-col p {
          color: var(--text-muted);
          font-size: 0.85rem;
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-col a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.02);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr; gap: 60px; }
          .footer-nav { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
