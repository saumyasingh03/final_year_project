import React from "react";


const stats = [
  { number: "98.2%", label: "Accuracy Rate" },
  { number: "2", label: "Languages" },
  { number: "<1.4s", label: "Response Time" },
  { number: "100+", label: "Test Samples" },
];

const features = [
  { icon: "🌐", label: "Multi-language Support", cls: "chip-blue" },
  { icon: "⚡", label: "Real-time Detection", cls: "chip-purple" },
  { icon: "🎯", label: "High Accuracy AI Model", cls: "chip-cyan" },
  { icon: "🔒", label: "Secure & Private", cls: "chip-green" },
];

export default function Hero() {
  return (
    <section style={{ padding: "72px 40px 48px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
        
        {/* Left */}
        <div>
          <div className="badge badge-blue fade-up fade-up-1" style={{ marginBottom: "20px" }}>
            <span className="pulse-dot"></span>
            AI-Powered Vision Assistant
          </div>

          <h1
            className="fade-up fade-up-2"
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "3rem",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "20px",
              color: "#E8EEFF",
            }}
          >
            Empowering Vision<br />
            Through{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Voice
            </span>
          </h1>

          <p
            className="fade-up fade-up-3"
            style={{
              color: "rgba(232,238,255,0.6)",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "32px",
              maxWidth: "420px",
            }}
          >
            AI-powered assistance for visually impaired users through image understanding and real-time voice feedback in multiple languages.
          </p>

          <div className="fade-up fade-up-4" style={{ display: "flex", gap: "14px", marginBottom: "40px" }}>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              ▶ Start Live Demo
            </button>
            <button className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              ◎ Watch Demo
            </button>
          </div>

          {/* Feature chips */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {features.map((f) => (
              <div key={f.label} className={`feature-chip ${f.cls} fade-up fade-up-4`}>
                <div className="icon">{f.icon}</div>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Eye orb visual */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          {/* Glow rings */}
          <div style={{
            position: "absolute",
            width: "360px", height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          }} />
          <div style={{
            position: "absolute",
            width: "280px", height: "280px",
            borderRadius: "50%",
            border: "1px solid rgba(79,142,247,0.2)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "pulse 3s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute",
            width: "220px", height: "220px",
            borderRadius: "50%",
            border: "1px solid rgba(139,92,246,0.2)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "pulse 3s ease-in-out infinite 0.5s",
          }} />

          {/* Eye card */}
          <div
            className="glass"
            style={{
              width: "320px",
              padding: "40px",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ fontSize: "5rem", marginBottom: "16px", filter: "drop-shadow(0 0 20px #4F8EF7)" }}>
              👁
            </div>
            <div
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.8rem",
                color: "#4F8EF7",
                letterSpacing: "0.15em",
                marginBottom: "20px",
              }}
            >
              VISION INTELLIGENCE
            </div>
            {/* Waveform bars */}
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", alignItems: "flex-end", height: "40px" }}>
              {[14,22,30,18,35,25,40,28,20,32,15,38,24,16,29].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: "4px",
                    height: `${h}px`,
                    borderRadius: "2px",
                    background: `linear-gradient(to top, #4F8EF7, #22D3EE)`,
                    opacity: 0.7 + (i % 3) * 0.1,
                    animation: `pulse ${1 + (i % 4) * 0.3}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="divider" style={{ marginTop: "56px" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="stat-item"
            style={{
              borderRight: i < 3 ? "1px solid rgba(79,142,247,0.15)" : "none",
            }}
          >
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
