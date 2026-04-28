import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-main">L'ELÉGANCE</span>
      </div>
      
      <ul className="nav-links">
        <li><a href="#hero">ANASAYFA</a></li>
        <li><a href="#menu">MENÜ</a></li>
        <li><a href="#about">HAKKIMIZDA</a></li>
        <li><a href="#reservation">REZERVASYON</a></li>
      </ul>

      <div className="nav-action">
        <a href="#reservation" className="btn-nav-silver">MASA AYIRT</a>
      </div>

      <style>{`
        .nav-logo {
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.3em;
          font-weight: 800;
        }

        .logo-main {
          font-size: 1.4rem;
          color: var(--primary);
        }

        .btn-nav-silver {
          font-family: 'Syne', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          padding: 12px 30px;
          border: 1px solid var(--primary);
          color: var(--primary);
          text-decoration: none;
          transition: var(--transition);
          text-transform: uppercase;
        }

        .btn-nav-silver:hover {
          background: var(--primary);
          color: black;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
