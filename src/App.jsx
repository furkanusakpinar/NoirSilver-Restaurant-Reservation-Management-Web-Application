import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import AdminPanel from './components/admin/AdminPanel';
import AdminLogin from './components/admin/AdminLogin';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      unsubscribe();
      observer.disconnect();
    };
  }, []);

  const HomePage = () => (
    <>
      <Navbar />
      <main className="content-wrapper">
        <Hero />
        <Menu />
        <About />
        <Reservation />
        <Footer />
      </main>
      <div className="vertical-line"></div>
    </>
  );

  if (loading) return null; // Or a spinner

  return (
    <Router>
      <div className="app">
        <div className="cursor"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route 
            path="/admin" 
            element={user ? <AdminPanel /> : <Navigate to="/admin-login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
