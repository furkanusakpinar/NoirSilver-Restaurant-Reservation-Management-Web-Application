import React from 'react';
import videoSource from '../assets/videoplayback.webm';

const Hero = () => {
  return (
    <section id="hero" className="hero-modern">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src={videoSource} type="video/webm" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content reveal">
        <span className="section-tag">Yüksek Gastronomi</span>
        <h1 className="hero-title">
          Modern <br />
          <span className="outline-text">Kültür</span>
        </h1>
        <p className="hero-desc">
          Cesur inovasyon ve tavizsiz kalite ile <br />
          yemek sanatını yeniden tanımlıyoruz.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-silver">MENÜYÜ KEŞFET</a>
        </div>
      </div>

      <style>{`
        .hero-modern {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-video-bg video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) brightness(0.4);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--bg-dark));
        }

        .hero-content {
          z-index: 1;
        }

        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px var(--primary);
        }

        .hero-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 50px;
          letter-spacing: 0.1em;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 4.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
