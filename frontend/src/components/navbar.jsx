// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "Features", path: "/features" },
//   { label: "How It Works", path: "/how-it-works" },
//   { label: "Dashboard", path: "/dashboard" },
//   { label: "Help via Video Call", path: "/help" },
//   { label: "Community", path: "/community" },
//   { label: "About Us", path: "/about" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav style={{
//       position: "sticky", top: 0, zIndex: 100,
//       display: "flex", justifyContent: "space-between", alignItems: "center",
//       padding: "0 32px", height: "68px",
//       background: scrolled ? "rgba(5,7,26,0.97)" : "rgba(5,7,26,0.75)",
//       backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
//       borderBottom: "1px solid rgba(79,142,247,0.15)",
//       transition: "background 0.3s ease", gap: "20px",
//     }}>
//       {/* Logo */}
//       <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
//         <div style={{
//           width: 36, height: 36, borderRadius: "10px",
//           background: "linear-gradient(135deg, #4F8EF7, #8B5CF6)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           fontSize: "1.1rem", boxShadow: "0 0 20px rgba(79,142,247,0.5)",
//         }}>👁</div>
//         <span style={{
//           fontFamily: "'Orbitron', monospace", fontWeight: 700,
//           fontSize: "1rem", color: "#E8EEFF", letterSpacing: "0.05em",
//         }}>Vision<span style={{ color: "#4F8EF7" }}>Voice</span></span>
//       </Link>

//       {/* Nav Links */}
//       <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
//         {navLinks.map((link) => {
//           const active = location.pathname === link.path;
//           return (
//             <Link key={link.path} to={link.path} style={{
//               color: active ? "#4F8EF7" : "rgba(232,238,255,0.62)",
//               textDecoration: "none", fontSize: "0.8rem", fontWeight: 600,
//               padding: "6px 10px", borderRadius: "8px",
//               background: active ? "rgba(79,142,247,0.1)" : "transparent",
//               border: active ? "1px solid rgba(79,142,247,0.25)" : "1px solid transparent",
//               transition: "all 0.2s", whiteSpace: "nowrap",
//             }}
//               onMouseEnter={e => { if (!active) { e.currentTarget.style.color = "#4F8EF7"; e.currentTarget.style.background = "rgba(79,142,247,0.06)"; } }}
//               onMouseLeave={e => { if (!active) { e.currentTarget.style.color = "rgba(232,238,255,0.62)"; e.currentTarget.style.background = "transparent"; } }}
//             >{link.label}</Link>
//           );
//         })}
//       </div>

//       {/* Auth */}
//       <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
//         <Link to="/login" style={{ textDecoration: "none" }}>
//           <button className="btn-outline" style={{ padding: "7px 18px", fontSize: "0.82rem" }}>Login</button>
//         </Link>
//         <Link to="/register" style={{ textDecoration: "none" }}>
//           <button className="btn-primary" style={{ padding: "7px 18px", fontSize: "0.82rem" }}>Register</button>
//         </Link>
//       </div>
//     </nav>
//   );
// }


// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { speak } from "../hooks/useVoice";

const navLinks = [
  { label: "Home",              path: "/",            key: "H" },
  { label: "Features",          path: "/features",    key: "F" },
  { label: "How It Works",      path: "/how-it-works",key: "W" },
  { label: "Dashboard",         path: "/dashboard",   key: "D", adminOnly: true },
  { label: "Help via Video Call",path: "/help",       key: "V" },
  { label: "Community",         path: "/community",   key: "C" },
  { label: "About Us",          path: "/about",       key: "A" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [userMenu, setUserMenu]   = useState(false);
  const { user, logout }          = useAuth();
  const location                  = useLocation();
  const navigate                  = useNavigate();
  const menuRef                   = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const fn = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setUserMenu(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const handleLogout = () => {
    logout();
    setUserMenu(false);
    speak("You have been logged out. Goodbye!");
    navigate("/");
  };

  const visibleLinks = navLinks.filter(l => !l.adminOnly || (user?.role === "admin"));

  return (
    <nav role="navigation" aria-label="Main navigation"
      style={{
        position: "sticky", top: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 32px", height: "68px",
        background: scrolled ? "rgba(5,7,26,0.97)" : "rgba(5,7,26,0.75)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(79,142,247,0.15)",
        transition: "background 0.3s ease", gap: "16px",
      }}>

      {/* Logo */}
      <Link to="/" aria-label="VisionVoice home"
        style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, borderRadius: "10px", background: "linear-gradient(135deg,#4F8EF7,#8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", boxShadow: "0 0 20px rgba(79,142,247,0.5)" }}>👁</div>
        <span style={{ fontFamily: "'Orbitron',monospace", fontWeight: 700, fontSize: "1rem", color: "#E8EEFF", letterSpacing: "0.05em" }}>
          Vision<span style={{ color: "#4F8EF7" }}>Voice</span>
        </span>
      </Link>

      {/* Links */}
      <div style={{ display: "flex", gap: "2px", alignItems: "center", flex: 1, justifyContent: "center" }}>
        {visibleLinks.map((link) => {
          const active = location.pathname === link.path;
          return (
            <Link key={link.path} to={link.path}
              aria-label={`${link.label} (shortcut: ${link.key})`}
              aria-current={active ? "page" : undefined}
              onClick={() => speak(link.label)}
              style={{
                color: active ? "#4F8EF7" : "rgba(232,238,255,0.62)",
                textDecoration: "none", fontSize: "0.78rem", fontWeight: 600,
                padding: "6px 9px", borderRadius: "8px",
                background: active ? "rgba(79,142,247,0.1)" : "transparent",
                border: active ? "1px solid rgba(79,142,247,0.25)" : "1px solid transparent",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.color="#4F8EF7"; e.currentTarget.style.background="rgba(79,142,247,0.06)"; }}}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.color="rgba(232,238,255,0.62)"; e.currentTarget.style.background="transparent"; }}}
            >{link.label}</Link>
          );
        })}
      </div>

      {/* Right: auth */}
      <div style={{ display: "flex", gap: "8px", flexShrink: 0, alignItems: "center" }}>
        {user ? (
          // User is logged in — show avatar + dropdown
          <div ref={menuRef} style={{ position: "relative" }}>
            <button
              onClick={() => setUserMenu(v => !v)}
              aria-label="User menu"
              aria-expanded={userMenu}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "6px 12px", borderRadius: "12px", cursor: "pointer",
                background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.25)",
                color: "#E8EEFF", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.82rem",
              }}>
              <span style={{ fontSize: "1.1rem" }}>{user.avatar}</span>
              <span style={{ maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.name.split(" ")[0]}</span>
              <span style={{ fontSize: "0.65rem", color: "rgba(232,238,255,0.5)" }}>{userMenu ? "▲" : "▼"}</span>
            </button>

            {/* Dropdown */}
            {userMenu && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "rgba(10,15,40,0.98)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(79,142,247,0.25)", borderRadius: "14px",
                padding: "8px", minWidth: "200px", zIndex: 9999,
                boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
              }} role="menu">
                {/* User info */}
                <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(79,142,247,0.1)", marginBottom: "6px" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#E8EEFF" }}>{user.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{user.email}</div>
                  <div className="badge badge-blue" style={{ fontSize: "0.65rem", marginTop: "6px", textTransform: "capitalize" }}>{user.role}</div>
                </div>

                {[
                  user.role === "admin" && { icon: "📊", label: "Dashboard", path: "/dashboard" },
                  { icon: "👤", label: "My Profile", path: "/" },
                  { icon: "⚙",  label: "Settings",   path: "/" },
                ].filter(Boolean).map(item => (
                  <Link key={item.label} to={item.path}
                    role="menuitem"
                    onClick={() => setUserMenu(false)}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", textDecoration: "none", color: "rgba(232,238,255,0.65)", fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background="rgba(79,142,247,0.1)"; e.currentTarget.style.color="#E8EEFF"; }}
                    onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="rgba(232,238,255,0.65)"; }}>
                    <span>{item.icon}</span>{item.label}
                  </Link>
                ))}

                <div style={{ borderTop: "1px solid rgba(79,142,247,0.1)", marginTop: "6px", paddingTop: "6px" }}>
                  <button role="menuitem" onClick={handleLogout}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", width: "100%", background: "none", border: "none", color: "#F87171", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.background="rgba(239,68,68,0.1)"}
                    onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                    <span>🚪</span> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Not logged in
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="btn-outline" style={{ padding: "7px 16px", fontSize: "0.82rem" }} aria-label="Login">Login</button>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{ padding: "7px 16px", fontSize: "0.82rem" }} aria-label="Register">Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
