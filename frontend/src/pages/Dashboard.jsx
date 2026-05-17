import React, { useState } from "react";

const stats = [
  { label: "Total Users", value: "1,245", change: "+12.5%", up: true, icon: "👥" },
  { label: "Total Volunteers", value: "328", change: "+8.3%", up: true, icon: "🤝" },
  { label: "Total Calls", value: "567", change: "+15.7%", up: true, icon: "📞" },
  { label: "Resolved Queries", value: "892", change: "+10.2%", up: true, icon: "✅" },
];

const recentActivity = [
  { file: "Image_001.jpg", result: "Chair detected", time: "2 min ago", icon: "🪑" },
  { file: "Camera Scan", result: "Person detected", time: "5 min ago", icon: "🧍" },
  { file: "Upload_003.png", result: "Bottle detected", time: "10 min ago", icon: "🍶" },
  { file: "Image_004.jpg", result: "Laptop detected", time: "15 min ago", icon: "💻" },
  { file: "Image_005.jpg", result: "Book detected", time: "22 min ago", icon: "📚" },
  { file: "Camera Scan", result: "Car detected", time: "35 min ago", icon: "🚗" },
];

const sideLinks = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "👥", label: "Users" },
  { icon: "🤝", label: "Volunteers" },
  { icon: "📞", label: "Video Calls" },
  { icon: "📈", label: "Reports" },
  { icon: "💬", label: "Feedback" },
  { icon: "⚙", label: "Settings" },
  { icon: "🚪", label: "Logout" },
];

// Simple bar chart using divs
const chartData = [
  { label: "1 May", val: 60 }, { label: "8 May", val: 75 }, { label: "15 May", val: 55 },
  { label: "22 May", val: 90 }, { label: "29 May", val: 110 },
];

export default function Dashboard() {
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      {/* Sidebar */}
      <aside style={{
        width: "220px", flexShrink: 0,
        borderRight: "1px solid rgba(79,142,247,0.12)",
        padding: "28px 16px",
        background: "rgba(5,7,26,0.5)",
      }}>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.75rem", color: "rgba(232,238,255,0.35)", letterSpacing: "0.08em", marginBottom: "16px", paddingLeft: "8px" }}>
          NAVIGATION
        </div>
        {sideLinks.map((l) => {
          const active = activeLink === l.label;
          return (
            <div key={l.label} onClick={() => setActiveLink(l.label)} style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "10px 12px", borderRadius: "10px", cursor: "pointer",
              marginBottom: "4px",
              background: active ? "rgba(79,142,247,0.12)" : "transparent",
              border: active ? "1px solid rgba(79,142,247,0.25)" : "1px solid transparent",
              color: active ? "#4F8EF7" : "rgba(232,238,255,0.55)",
              fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s",
            }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(79,142,247,0.05)"; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
            >
              <span>{l.icon}</span>{l.label}
            </div>
          );
        })}
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "32px 36px", overflowY: "auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
          <div>
            <div className="badge badge-blue" style={{ marginBottom: "8px" }}>Admin Panel</div>
            <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.6rem", fontWeight: 700, color: "#E8EEFF" }}>
              Admin Dashboard
            </h1>
          </div>
          <div style={{
            padding: "8px 16px", borderRadius: "10px",
            background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)",
            color: "rgba(232,238,255,0.6)", fontSize: "0.8rem",
            fontFamily: "'JetBrains Mono',monospace",
          }}>
            Last 30 Days ▾
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "24px" }}>
          {stats.map((s) => (
            <div key={s.label} className="glass" style={{ padding: "20px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <div style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                <div style={{ fontSize: "1.2rem" }}>{s.icon}</div>
              </div>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "8px" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: s.up ? "#10B981" : "#F87171", fontFamily: "'JetBrains Mono',monospace" }}>
                {s.up ? "↑" : "↓"} {s.change}
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "20px", marginBottom: "24px" }}>
          {/* User Growth Chart */}
          <div className="glass" style={{ padding: "24px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "20px", fontSize: "0.95rem" }}>User Growth</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", height: "120px", borderBottom: "1px solid rgba(79,142,247,0.15)", paddingBottom: "8px" }}>
              {chartData.map((d) => (
                <div key={d.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  <div style={{
                    width: "100%", borderRadius: "6px 6px 0 0",
                    height: `${(d.val / 130) * 100}px`,
                    background: "linear-gradient(to top, #4F8EF7, #22D3EE)",
                    opacity: 0.75,
                  }} />
                  <div style={{ fontSize: "0.65rem", color: "rgba(232,238,255,0.4)", marginTop: "6px", whiteSpace: "nowrap" }}>{d.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Calls Overview Donut */}
          <div className="glass" style={{ padding: "24px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "20px", fontSize: "0.95rem" }}>Calls Overview</div>
            {/* Fake donut using conic-gradient */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{
                width: 100, height: 100, borderRadius: "50%", flexShrink: 0,
                background: "conic-gradient(#4F8EF7 0% 67%, #F87171 67% 85%, #F59E0B 85% 100%)",
                boxShadow: "0 0 20px rgba(79,142,247,0.3)",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: "20px", borderRadius: "50%",
                  background: "rgba(5,7,26,0.95)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Orbitron',monospace", fontSize: "0.75rem", color: "#4F8EF7", fontWeight: 700,
                }}>67%</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { color: "#4F8EF7", label: "Completed", val: "67%" },
                  { color: "#F87171", label: "Cancelled", val: "18%" },
                  { color: "#F59E0B", label: "Missed", val: "15%" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color }} />
                    <span style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.55)" }}>{item.label}</span>
                    <span style={{ fontSize: "0.78rem", color: "#E8EEFF", fontFamily: "'JetBrains Mono',monospace", marginLeft: "4px" }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", fontSize: "0.95rem" }}>Recent Activity</div>
            <button className="btn-outline" style={{ padding: "5px 14px", fontSize: "0.75rem" }}>View All</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {recentActivity.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "12px 0",
                borderBottom: i < recentActivity.length - 1 ? "1px solid rgba(79,142,247,0.08)" : "none",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "10px",
                  background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0,
                }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E8EEFF" }}>{item.file}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.45)", marginTop: "2px" }}>{item.result}</div>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.35)", fontFamily: "'JetBrains Mono',monospace" }}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
