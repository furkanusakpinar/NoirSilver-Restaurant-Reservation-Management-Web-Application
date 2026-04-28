import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Geçersiz e-posta veya şifre.');
    }
  };

  const createInitialAdmin = async () => {
    setError('');
    setSuccess('');
    try {
      await createUserWithEmailAndPassword(auth, 'admin@restoran.com', 'admin123456');
      setSuccess('Admin hesabı başarıyla oluşturuldu! (admin@restoran.com / admin123456)');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Bu admin hesabı zaten mevcut.');
      } else {
        setError('Hesap oluşturulamadı: ' + err.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box glass reveal">
        <h2 className="login-title">Yönetici Girişi</h2>
        <p className="login-subtitle">L'Elégance Gastronomie Panel</p>

        {error && <div className="login-error">{error}</div>}
        {success && <div className="login-success">{success}</div>}

        <form onSubmit={handleLogin}>
          <div className="login-input-group">
            <label>E-POSTA</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@restoran.com"
            />
          </div>
          <div className="login-input-group">
            <label>ŞİFRE</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-silver full">Giriş Yap</button>
        </form>
      </div>

      <style>{`
        .login-container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #050505;
        }

        .login-box {
          width: 100%;
          max-width: 450px;
          padding: 60px;
          text-align: center;
        }

        .login-title {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          margin-bottom: 10px;
          font-weight: 800;
        }

        .login-subtitle {
          color: var(--text-muted);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          margin-bottom: 40px;
        }

        .login-error {
          background: rgba(244, 67, 54, 0.1);
          color: #f44336;
          padding: 10px;
          margin-bottom: 25px;
          font-size: 0.8rem;
          border: 1px solid rgba(244, 67, 54, 0.2);
        }

        .login-success {
          background: rgba(76, 175, 80, 0.1);
          color: #4caf50;
          padding: 10px;
          margin-bottom: 25px;
          font-size: 0.8rem;
          border: 1px solid rgba(76, 175, 80, 0.2);
        }

        .login-input-group {
          text-align: left;
          margin-bottom: 25px;
        }

        .login-input-group label {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin-bottom: 8px;
        }

        .login-input-group input {
          width: 100%;
          background: #111;
          border: 1px solid #222;
          padding: 15px;
          color: white;
          font-family: inherit;
        }

        .login-input-group input:focus {
          outline: none;
          border-color: var(--primary);
        }

        .admin-setup-hint {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .admin-setup-hint p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 15px;
        }

        .btn-setup {
          background: transparent;
          border: 1px dashed var(--accent);
          color: var(--accent);
          padding: 10px 20px;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-setup:hover {
          color: var(--primary);
          border-color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
