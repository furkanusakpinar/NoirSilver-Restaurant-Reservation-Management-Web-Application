import React, { useState } from 'react';

const menuData = {
  Girişler: [
    { name: 'Közlenmiş Patlıcan Rüyası', desc: 'Tahinli yoğurt, nar ekşisi ve çıtır yufka ile', price: '280 ₺' },
    { name: 'Deniz Mahsülleri Carpaccio', desc: 'Limon konfit, kapari ve taze dereotu eşliğinde', price: '420 ₺' },
    { name: 'Tütsülenmiş Ördek Göğsü', desc: 'Vişne reduksiyonu ve karamelize soğan', price: '390 ₺' },
    { name: 'Ege Otları Mücveri', desc: 'İsli peynir kreması ve taze nane', price: '260 ₺' },
    { name: 'Trüflü Mantar Çorbası', desc: 'Yaban mantarları ve krema ile', price: '240 ₺' }
  ],
  AnaYemekler: [
    { name: 'Kuzu İncik Konfit', desc: 'Safranlı risotto ve fırınlanmış kök sebzeler', price: '750 ₺' },
    { name: 'Mühürlenmiş Lagos', desc: 'Kuşkonmaz püresi ve beyaz şarap sosu', price: '820 ₺' },
    { name: 'Dana Bonfile L\'Elégance', desc: 'Trüf mantarlı püre ve 48 saatlik demi-glace sos', price: '950 ₺' },
    { name: 'Ördek Confit', desc: 'Portakal sosu ve tatlı patates püresi', price: '780 ₺' },
    { name: 'Izgara Deniz Tarağı', desc: 'Bezelye püresi ve limonlu tereyağı', price: '890 ₺' },
    { name: 'Vahşi Mantarlı Risotto', desc: 'Porçini mantarı ve parmesan tekeri', price: '620 ₺' }
  ],
  Tatlılar: [
    { name: 'Altın Varaklı Sufle', desc: '%70 Valrhona çikolata ve vanilyalı dondurma', price: '320 ₺' },
    { name: 'Baklava Dekonstrüksiyon', desc: 'Antep fıstığı mus ve çıtır hamur katmanları', price: '290 ₺' },
    { name: 'Egzotik Meyve Şöleni', desc: 'Mango sorbe, çarkıfelek meyvesi ve taze nane', price: '260 ₺' },
    { name: 'Tiramisu Moderne', desc: 'Espresso havyarı ve mascarpone kreması', price: '280 ₺' }
  ],
  İçecekler: [
    { name: 'L\'Elégance Signature', desc: 'Özel karışım kurumsal kokteyl', price: '450 ₺' },
    { name: 'Chateau Neuf du Pape', desc: 'Seçkin kırmızı şarap kadehi', price: '550 ₺' },
    { name: 'Detoks Yeşil İksir', desc: 'Taze sebze ve meyve özleri', price: '180 ₺' },
    { name: 'Ev Yapımı Lavantalı Limonata', desc: 'Taze lavanta ve Ege limonları', price: '140 ₺' }
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('AnaYemekler');

  return (
    <section id="menu" className="menu">
      <div className="menu-container">
        <div className="menu-sidebar reveal">
          <div className="menu-header-group">
            <span className="section-tag">Lezzet Koleksiyonu</span>
            <h2 className="section-title">Seçkin<br/>Menü</h2>
          </div>
          
          <div className="menu-tabs">
            {Object.keys(menuData).map((tab) => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}
              </button>
            ))}
          </div>

          <div className="qr-corporate-box">
            <div className="qr-visual">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="10" y="10" width="25" height="25" rx="2" />
                <rect x="65" y="10" width="25" height="25" rx="2" />
                <rect x="10" y="65" width="25" height="25" rx="2" />
                <rect x="15" y="15" width="15" height="15" fill="currentColor" opacity="0.2" />
                <rect x="70" y="15" width="15" height="15" fill="currentColor" opacity="0.2" />
                <rect x="15" y="70" width="15" height="15" fill="currentColor" opacity="0.2" />
                <path d="M45 10h10M45 20h10M45 30h10M10 45h10M20 45h10M30 45h10M45 45h10M65 45h10M10 55h10M45 55h10M65 55h10M45 65h10M45 75h10M45 85h10M65 65h5M65 75h5M65 85h10" strokeDasharray="2 2" />
              </svg>
            </div>
            <div className="qr-info">
              <span className="qr-tag">AKILLI MENÜ</span>
              <p className="qr-desc">Dijital deneyim için<br/>kameranızı kullanın</p>
            </div>
          </div>
        </div>

        <div className="menu-content reveal">
          <div className="menu-items-grid">
            {menuData[activeTab].map((item, index) => (
              <div key={index} className="menu-item-card">
                <div className="item-main">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-price">{item.price}</span>
                </div>
                <p className="item-desc">{item.desc}</p>
                <div className="item-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .menu {
          background: #050505;
          padding: 150px 8%;
          position: relative;
        }

        .menu-container {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 100px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .menu-sidebar {
          position: sticky;
          top: 150px;
          height: fit-content;
        }

        .section-title {
          font-size: 5rem;
          line-height: 0.9;
          margin-bottom: 60px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }

        .menu-tabs {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 80px;
        }

        .tab-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-align: left;
          cursor: pointer;
          transition: var(--transition);
          padding-left: 20px;
          border-left: 1px solid transparent;
          letter-spacing: 0.1em;
        }

        .tab-btn.active {
          color: var(--primary);
          border-left: 1px solid var(--primary);
          padding-left: 30px;
        }

        .qr-corporate-box {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
        }

        .qr-visual {
          width: 60px;
          height: 60px;
          color: var(--primary);
        }

        .qr-tag {
          display: block;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--primary);
          margin-bottom: 5px;
          font-weight: 800;
        }

        .qr-desc {
          font-size: 0.7rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .menu-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px 80px;
        }

        .menu-item-card {
          position: relative;
          padding-bottom: 25px;
        }

        .item-main {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 10px;
        }

        .item-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-light);
          font-family: 'Syne', sans-serif;
        }

        .item-price {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--primary);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .item-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.6;
          max-width: 90%;
        }

        .item-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--primary);
          transition: var(--transition);
        }

        .menu-item-card:hover .item-accent {
          width: 100%;
        }

        @media (max-width: 1200px) {
          .menu-container { grid-template-columns: 1fr; gap: 80px; }
          .menu-sidebar { position: static; }
          .menu-tabs { flex-direction: row; flex-wrap: wrap; }
          .qr-corporate-box { max-width: 400px; }
        }

        @media (max-width: 768px) {
          .menu-items-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Menu;
