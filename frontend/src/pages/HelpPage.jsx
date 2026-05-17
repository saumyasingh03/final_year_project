import React, { useState } from "react";

const volunteers = [
  { name: "Rahul Sharma", status: "online", rating: 4.9, calls: 56, avatar: "👨", specialty: "Object Identification" },
  { name: "Priya Verma", status: "online", rating: 4.8, calls: 43, avatar: "👩", specialty: "Navigation Help" },
  { name: "Aman Singh", status: "online", rating: 4.9, calls: 38, avatar: "👨", specialty: "Text Reading" },
  { name: "Kavita Joshi", status: "busy", rating: 4.7, calls: 61, avatar: "👩", specialty: "General Assistance" },
  { name: "Suresh Patel", status: "online", rating: 4.8, calls: 29, avatar: "👨", specialty: "Medical Labels" },
  { name: "Anjali Mehta", status: "offline", rating: 4.6, calls: 52, avatar: "👩", specialty: "Product Labels" },
  { name: "Ramesh Kumar", status: "online", rating: 4.9, calls: 34, avatar: "👨", specialty: "Document Reading" },
  { name: "Sneha Gupta", status: "online", rating: 4.7, calls: 27, avatar: "👩", specialty: "Scene Description" },
];

const statusColor = { online: "#10B981", busy: "#F59E0B", offline: "#6B7280" };
const statusLabel = { online: "Online", busy: "Busy", offline: "Offline" };

export default function HelpPage() {
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState(null); // 'need' or 'volunteer'

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <section style={{ padding: "64px 40px 32px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <div className="badge badge-green" style={{ marginBottom: "20px", display: "inline-flex" }}>
          <span className="pulse-dot" style={{ background: "#10B981" }} />
          Live Support Available
        </div>
        <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.4rem", fontWeight: 900, color: "#E8EEFF", marginBottom: "16px", lineHeight: 1.15 }}>
          Help via{" "}
          <span style={{ background: "linear-gradient(135deg,#10B981,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Video Call
          </span>
        </h1>
        <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
          Connect with trained volunteers for real-time, personalized assistance. Available 24/7.
        </p>
      </section>

      {/* Two cards: I Need Help / I Want to Help */}
      <section style={{ padding: "0 40px 40px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
          {[
            { icon: "🙏", title: "I Need Help", desc: "Connect with a volunteer for guidance and real-time visual assistance.", action: "Start Video Call", key: "need", color: "#4F8EF7" },
            { icon: "💪", title: "I Want to Help", desc: "Join as a volunteer and make a difference by helping someone in need.", action: "Become a Volunteer", key: "volunteer", color: "#8B5CF6" },
          ].map((card) => (
            <div key={card.key} className="glass" style={{ padding: "32px 28px", textAlign: "center" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "18px", margin: "0 auto 16px",
                background: `linear-gradient(135deg,${card.color}22,${card.color}11)`,
                border: `1px solid ${card.color}44`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem",
              }}>{card.icon}</div>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "10px" }}>{card.title}</h2>
              <p style={{ fontSize: "0.85rem", color: "rgba(232,238,255,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>{card.desc}</p>
              <button
                className="btn-primary"
                style={{ width: "100%", background: `linear-gradient(135deg,${card.color},${card.color}cc)` }}
                onClick={() => setMode(card.key)}
              >
                {card.action}
              </button>
            </div>
          ))}
        </div>

        {/* Modal-like alert */}
        {mode && (
          <div className="glass" style={{ padding: "20px 24px", marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "4px" }}>
                {mode === "need" ? "🎥 Starting video call session..." : "🤝 Registering as volunteer..."}
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)" }}>
                {mode === "need" ? "Select a volunteer below to connect" : "Fill out your profile to start helping"}
              </div>
            </div>
            <button className="btn-danger" style={{ padding: "6px 14px" }} onClick={() => setMode(null)}>✕ Cancel</button>
          </div>
        )}

        {/* Available Volunteers */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: "#E8EEFF" }}>
              Available Volunteers
            </h2>
            <div className="badge badge-green">
              <span className="pulse-dot" style={{ background: "#10B981" }} />
              {volunteers.filter(v => v.status === "online").length} Online
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }}>
            {volunteers.map((v) => (
              <div key={v.name} className="glass-sm" style={{
                padding: "18px 20px",
                border: selected === v.name ? "1px solid #4F8EF7" : "1px solid rgba(255,255,255,0.07)",
                cursor: "pointer", transition: "all 0.2s",
                opacity: v.status === "offline" ? 0.55 : 1,
              }}
                onClick={() => setSelected(v.name)}
                onMouseEnter={e => { if (v.status !== "offline") e.currentTarget.style.borderColor = "rgba(79,142,247,0.4)"; }}
                onMouseLeave={e => { if (selected !== v.name) e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  {/* Avatar */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: "14px",
                      background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
                    }}>{v.avatar}</div>
                    <div style={{
                      position: "absolute", bottom: -2, right: -2,
                      width: 12, height: 12, borderRadius: "50%",
                      background: statusColor[v.status],
                      border: "2px solid rgba(5,7,26,1)",
                      boxShadow: `0 0 6px ${statusColor[v.status]}`,
                    }} />
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#E8EEFF" }}>{v.name}</div>
                    <div style={{ fontSize: "0.75rem", color: statusColor[v.status], marginTop: "2px" }}>{statusLabel[v.status]}</div>
                    <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{v.specialty}</div>
                  </div>
                  {/* Rating + Call */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                    <div style={{ fontSize: "0.78rem", color: "#F59E0B", fontFamily: "'JetBrains Mono',monospace" }}>⭐ {v.rating}</div>
                    <button
                      className={v.status === "offline" ? "btn-danger" : "btn-primary"}
                      style={{ padding: "5px 14px", fontSize: "0.75rem", opacity: v.status === "offline" ? 0.5 : 1 }}
                      disabled={v.status === "offline"}
                      onClick={e => { e.stopPropagation(); alert(`Calling ${v.name}...`); }}
                    >
                      📞 Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="btn-outline" style={{ padding: "10px 28px" }}>View All Volunteers</button>
          </div>
        </div>
      </section>
    </div>
  );
}
