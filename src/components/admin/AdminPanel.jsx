import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('reservations');
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin-login');
  };

  const reservations = [
    { id: 1, name: 'Canberk Yıldız', guests: 4, date: '2026-04-30', time: '20:00', status: 'Onaylandı' },
    { id: 2, name: 'Selin Demir', guests: 2, date: '2026-05-01', time: '19:30', status: 'Beklemede' },
    { id: 3, name: 'Murat Aydın', guests: 6, date: '2026-04-29', time: '21:00', status: 'İptal Edildi' },
  ];

  return (
    <div className="admin-container">
      <aside className="admin-sidebar glass">
        <div className="admin-logo">L'ELÉGANCE <span>PANEL</span></div>
        <nav className="admin-nav">
          <button onClick={() => setActiveTab('reservations')} className={activeTab === 'reservations' ? 'active' : ''}>REZERVASYONLAR</button>
          <button onClick={() => setActiveTab('menu')} className={activeTab === 'menu' ? 'active' : ''}>MENÜ YÖNETİMİ</button>
          <button onClick={() => setActiveTab('stats')} className={activeTab === 'stats' ? 'active' : ''}>İSTATİSTİKLER</button>
        </nav>
        <button onClick={handleLogout} className="admin-logout">GÜVENLİ ÇIKIŞ</button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>{activeTab === 'reservations' ? 'REZERVASYONLAR' : activeTab === 'menu' ? 'MENÜ YÖNETİMİ' : 'İSTATİSTİKLER'}</h1>
          <div className="admin-user">Yönetici: <span>Admin</span></div>
        </header>

        <section className="admin-content">
          {activeTab === 'reservations' && (
            <div className="admin-table-container glass">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Müşteri</th>
                    <th>Kişi</th>
                    <th>Tarih</th>
                    <th>Saat</th>
                    <th>Durum</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(res => (
                    <tr key={res.id}>
                      <td>{res.name}</td>
                      <td>{res.guests}</td>
                      <td>{res.date}</td>
                      <td>{res.time}</td>
                      <td><span className={`status ${res.status.toLowerCase()}`}>{res.status}</span></td>
                      <td><button className="btn-edit">Düzenle</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'menu' && (
            <div className="admin-placeholder glass">
              <h3>Menü Düzenleme Modülü</h3>
              <p>Bu bölüm geliştirme aşamasındadır. Burada menü öğelerini ekleyip silebilirsiniz.</p>
              <button className="btn-silver">YENİ ÖĞE EKLE</button>
            </div>
          )}
        </section>
      </main>

      <style>{`
        .admin-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          min-height: 100vh;
          background: #050505;
          color: white;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .admin-sidebar {
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .admin-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 60px;
          text-align: center;
          font-weight: 800;
        }

        .admin-logo span {
          font-size: 0.6rem;
          background: var(--primary);
          color: black;
          padding: 2px 6px;
          margin-left: 5px;
          vertical-align: middle;
        }

        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .admin-nav button {
          background: transparent;
          border: none;
          color: #888;
          text-align: left;
          padding: 15px 20px;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: 0.3s;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
        }

        .admin-nav button:hover, .admin-nav button.active {
          color: var(--primary);
          background: rgba(255, 255, 255, 0.05);
          border-left: 2px solid var(--primary);
        }

        .admin-logout {
          margin-top: auto;
          background: transparent;
          border: 1px solid #333;
          color: #f44336;
          padding: 12px;
          cursor: pointer;
          font-size: 0.75rem;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
        }

        .admin-main {
          padding: 60px;
          overflow-y: auto;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }

        .admin-header h1 {
          font-size: 2rem;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }

        .admin-user span {
          color: var(--primary);
          font-weight: 600;
        }

        .admin-table-container {
          padding: 30px;
          border-radius: 4px;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .admin-table th {
          font-size: 0.7rem;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding-bottom: 20px;
          border-bottom: 1px solid #222;
        }

        .admin-table td {
          padding: 20px 0;
          border-bottom: 1px solid #111;
          font-size: 0.9rem;
        }

        .status {
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 2px;
        }

        .status.onaylandı { background: rgba(76, 175, 80, 0.1); color: #4caf50; }
        .status.beklemede { background: rgba(255, 152, 0, 0.1); color: #ff9800; }
        .status.iptal { background: rgba(244, 67, 54, 0.1); color: #f44336; }

        .btn-edit {
          background: #222;
          border: none;
          color: white;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .admin-placeholder {
          padding: 60px;
          text-align: center;
        }

        .admin-placeholder h3 { margin-bottom: 20px; font-family: 'Syne', sans-serif; }
        .admin-placeholder p { color: #888; margin-bottom: 40px; }
      `}</style>
    </div>
  );
};

export default AdminPanel;
