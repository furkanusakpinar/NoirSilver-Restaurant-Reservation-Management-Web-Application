import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="reservation">
      <div className="res-container reveal">
        <div className="res-info-side">
          <span className="section-tag">Rezervasyonlar</span>
          <h2 className="res-title">Deneyiminizi <br/> Ayırtın</h2>
          <p className="res-text">
            Olağanüstü bir gastronomi akşamı için bize katılın. 8 kişiden büyük gruplar için lütfen doğrudan iletişime geçin.
          </p>
          <div className="res-contact-info">
            <div className="info-item">
              <span className="info-label">Doğrudan Hat</span>
              <span className="info-value">+90 (212) 555 0123</span>
            </div>
            <div className="info-item">
              <span className="info-label">Konum</span>
              <span className="info-value">Levent, İstanbul / TR</span>
            </div>
          </div>
        </div>

        <div className="res-form-side">
          {submitted ? (
            <div className="success-message">
              <h3>Rezervasyon Alındı</h3>
              <p>L'Elégance'daki rezervasyonunuzu onaylamak için yakında sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <form className="res-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label>Ad Soyad</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Adınızı giriniz"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <label>Kişi Sayısı</label>
                  <select onChange={(e) => setFormData({...formData, guests: e.target.value})}>
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Kişi</option>)}
                  </select>
                </div>
                <div className="input-group">
                  <label>Tarih</label>
                  <input type="date" required />
                </div>
                <div className="input-group">
                  <label>Saat</label>
                  <select required>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
              </div>
              <div className="input-group full">
                <label>Özel İstekler</label>
                <textarea placeholder="Alerjiler, kutlamalar veya tercihleriniz..."></textarea>
              </div>
              <button type="submit" className="btn-silver full">Rezervasyonu Onayla</button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .reservation {
          background: #050505;
          padding: 150px 8%;
        }

        .res-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 100px;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
        }

        .res-title {
          margin-bottom: 30px;
        }

        .res-text {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 50px;
        }

        .res-contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-label {
          display: block;
          font-size: 0.65rem;
          color: var(--accent);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .info-value {
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .res-form-side {
          background: #0a0a0a;
          padding: 60px;
          border: 1px solid var(--border);
          position: relative;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .input-group label {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .input-group input, 
        .input-group select, 
        .input-group textarea {
          background: #111;
          border: 1px solid #222;
          padding: 15px;
          color: white;
          font-family: inherit;
          transition: var(--transition);
        }

        .input-group input:focus, 
        .input-group select:focus, 
        .input-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: #151515;
        }

        .input-group.full {
          grid-column: span 2;
          margin-bottom: 40px;
        }

        .btn-silver.full {
          width: 100%;
        }

        .success-message {
          text-align: center;
          padding: 40px 0;
        }

        .success-message h3 {
          color: var(--primary);
          margin-bottom: 15px;
        }

        .success-message p {
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .res-container { grid-template-columns: 1fr; gap: 60px; }
          .res-form-side { padding: 40px 20px; }
        }

        @media (max-width: 480px) {
          .form-grid { grid-template-columns: 1fr; }
          .input-group.full { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
};

export default Reservation;
