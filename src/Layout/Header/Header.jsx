import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img
          src="https://img.icons8.com/?size=100&id=B88wt3wy9Uxw&format=png&color=FD7E14"
          alt="UX/UI Logo"
          className="logo"
        />
        <h1 className="name">Tural Mammadli</h1>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Əsas Səhifə</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>Haqqımda</Link>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Əlaqə</Link>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
