import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(location.pathname);

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Əsas" },
    { path: "/about", icon: <FaUser />, label: "Haqqımda" },
    { path: "/portfolio", icon: <FaBriefcase />, label: "Portfolio" },
    { path: "/contact", icon: <FaEnvelope />, label: "Əlaqə" },
  ];

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

      {/* ==== TAB BAR ==== */}
      <nav className={`tab-bar ${menuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={activeTab === item.path ? "active" : ""}
              onClick={() => {
                setActiveTab(item.path);
                setMenuOpen(false);
              }}
            >
              <Link to={item.path}>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
          <div
            className="indicator"
            style={{
              transform: `translateX(${navItems.findIndex(
                (i) => i.path === activeTab
              ) * 100}%)`,
            }}
          />
        </ul>
      </nav>

      {/* ==== MENU ICON ==== */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
