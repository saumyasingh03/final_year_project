import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Help via Video Call", path: "/help" },
  { label: "Community", path: "/community" },
  { label: "About Us", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 32px", height: "68px",
      background: scrolled ? "rgba(5,7,26,0.97)" : "rgba(5,7,26,0.75)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(79,142,247,0.15)",
      transition: "background 0.3s ease", gap: "20px",
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <div style={{
          width: 36, height: 36, borderRadius: "10px",
          background: "linear-gradient(135deg, #4F8EF7, #8B5CF6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem", boxShadow: "0 0 20px rgba(79,142,247,0.5)",
        }}>👁</div>
        <span style={{
          fontFamily: "'Orbitron', monospace", fontWeight: 700,
          fontSize: "1rem", color: "#E8EEFF", letterSpacing: "0.05em",
        }}>Vision<span style={{ color: "#4F8EF7" }}>Voice</span></span>
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        {navLinks.map((link) => {
          const active = location.pathname === link.path;
          return (
            <Link key={link.path} to={link.path} style={{
              color: active ? "#4F8EF7" : "rgba(232,238,255,0.62)",
              textDecoration: "none", fontSize: "0.8rem", fontWeight: 600,
              padding: "6px 10px", borderRadius: "8px",
              background: active ? "rgba(79,142,247,0.1)" : "transparent",
              border: active ? "1px solid rgba(79,142,247,0.25)" : "1px solid transparent",
              transition: "all 0.2s", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.color = "#4F8EF7"; e.currentTarget.style.background = "rgba(79,142,247,0.06)"; } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.color = "rgba(232,238,255,0.62)"; e.currentTarget.style.background = "transparent"; } }}
            >{link.label}</Link>
          );
        })}
      </div>

      {/* Auth */}
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="btn-outline" style={{ padding: "7px 18px", fontSize: "0.82rem" }}>Login</button>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button className="btn-primary" style={{ padding: "7px 18px", fontSize: "0.82rem" }}>Register</button>
        </Link>
      </div>
    </nav>
  );
}
