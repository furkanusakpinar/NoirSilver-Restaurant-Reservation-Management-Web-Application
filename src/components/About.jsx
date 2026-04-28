import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-modern">
      <div className="about-grid reveal">
        <div className="about-text-content">
          <span className="section-tag">Miras ve Gelecek</span>
          <h2 className="about-title">Gastronomide <br/><span className="outline-text">Yeni Standart</span></h2>
          <p className="about-p">
            2009'dan beri <strong>L'Elégance</strong>, sadece bir restoran değil; bir mükemmeliyet merkezidir. Her detayda kurumsal disiplin ve sanatsal özgürlüğü harmanlıyoruz.
          </p>
          <div className="about-stats-modern">
            <div className="stat-box">
              <h3>15</h3>
              <p>YILLIK DENEYİM</p>
            </div>
            <div className="stat-box">
              <h3>50k+</h3>
              <p>MUTLU MİSAFİR</p>
            </div>
          </div>
        </div>

        <div className="about-visual-modern">
          <div className="architectural-box">
            <div className="inner-line"></div>
            <div className="experience-tag">EST. 2009</div>
          </div>
        </div>
      </div>

      <style>{`
        .about-modern {
          background: #080808;
          padding: 150px 8%;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 100px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          line-height: 1;
          font-size: 5rem;
          margin-bottom: 40px;
        }

        .about-p {
          color: var(--text-muted);
          font-size: 1.2rem;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 50px;
        }

        .about-stats-modern {
          display: flex;
          gap: 60px;
        }

        .stat-box h3 {
          font-family: 'Syne', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }

        .stat-box p {
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: var(--accent);
          margin-top: 10px;
        }

        .about-visual-modern {
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .architectural-box {
          width: 300px;
          height: 450px;
          border: 1px solid var(--border);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .inner-line {
          width: 1px;
          height: 120%;
          background: var(--primary);
          opacity: 0.2;
        }

        .experience-tag {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--primary);
          color: black;
          padding: 10px 20px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .about-title { font-size: 3.5rem; }
          .about-visual-modern { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default About;
