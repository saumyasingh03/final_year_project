import React from "react";

const team = [
  { name: "Arjun Sharma", role: "AI/ML Lead", avatar: "👨‍💻", desc: "Computer Vision & NLP specialist with 6+ years experience." },
  { name: "Priya Verma", role: "Full Stack Developer", avatar: "👩‍💻", desc: "React & FastAPI expert, passionate about accessible tech." },
  { name: "Rahul Singh", role: "UX Designer", avatar: "🧑‍🎨", desc: "Designs for accessibility first, beautiful interfaces second." },
  { name: "Kavita Joshi", role: "Community Manager", avatar: "👩‍💼", desc: "Manages 328+ volunteers and ensures seamless user support." },
];

const milestones = [
  { year: "2023", event: "Project Inception", desc: "VisionVoice started as a college major project." },
  { year: "2024 Q1", event: "First 100 Users", desc: "Launched beta version. Reached 100 active users in 3 weeks." },
  { year: "2024 Q3", event: "Multi-language Support", desc: "Added Hindi, Spanish, French and 9 more languages." },
  { year: "2025", event: "Volunteer Network", desc: "Launched live volunteer video-call support with 300+ volunteers." },
];

export default function About() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Hero */}
      <section style={{ padding: "72px 40px 48px", maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
        <div>
          <div className="badge badge-blue fade-up fade-up-1" style={{ marginBottom: "20px", display: "inline-flex" }}>
            Our Story
          </div>
          <h1 className="fade-up fade-up-2" style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.4rem", fontWeight: 900, color: "#E8EEFF", lineHeight: 1.15, marginBottom: "20px" }}>
            About{" "}
            <span style={{ background: "linear-gradient(135deg,#4F8EF7,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              VisionVoice
            </span>
          </h1>
          <p className="fade-up fade-up-3" style={{ color: "rgba(232,238,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "16px" }}>
            VisionVoice was born from a simple belief: <strong style={{ color: "#E8EEFF" }}>technology should empower everyone</strong>, regardless of ability.
          </p>
          <p className="fade-up fade-up-4" style={{ color: "rgba(232,238,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8 }}>
            We combine state-of-the-art computer vision AI with a compassionate human volunteer network, delivering real-time visual assistance to visually impaired individuals across 12+ languages.
          </p>
        </div>

        {/* Mission card */}
        <div className="glass" style={{ padding: "36px 32px" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>🎯</div>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "14px" }}>Our Mission</h2>
          <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "20px" }}>
            To make the world fully accessible to visually impaired individuals through intelligent AI and a compassionate human support network — available 24/7, in any language.
          </p>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
            {[
              { icon: "👁", label: "Accessibility First" },
              { icon: "🤖", label: "AI-Powered" },
              { icon: "🤝", label: "Human Supported" },
              { icon: "🌐", label: "Global Reach" },
            ].map((v) => (
              <div key={v.label} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "rgba(232,238,255,0.6)" }}>
                <span style={{ fontSize: "1rem" }}>{v.icon}</span>{v.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "20px 40px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="badge badge-purple" style={{ display: "inline-flex", marginBottom: "14px" }}>The Team</div>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.6rem", fontWeight: 700, color: "#E8EEFF" }}>
            People Behind VisionVoice
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
          {team.map((member) => (
            <div key={member.name} className="glass" style={{ padding: "28px 20px", textAlign: "center", transition: "transform 0.3s", cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{
                width: 64, height: 64, borderRadius: "18px", margin: "0 auto 16px",
                background: "linear-gradient(135deg,rgba(79,142,247,0.15),rgba(139,92,246,0.15))",
                border: "1px solid rgba(79,142,247,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem",
              }}>{member.avatar}</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#E8EEFF", marginBottom: "4px" }}>{member.name}</div>
              <div className="badge badge-blue" style={{ fontSize: "0.68rem", marginBottom: "12px" }}>{member.role}</div>
              <p style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.45)", lineHeight: 1.65 }}>{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "20px 40px 60px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="badge badge-green" style={{ display: "inline-flex", marginBottom: "14px" }}>Journey</div>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.6rem", fontWeight: 700, color: "#E8EEFF" }}>Milestones</h2>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, rgba(79,142,247,0.4), rgba(79,142,247,0.05))", transform: "translateX(-50%)" }} />
          {milestones.map((m, i) => (
            <div key={m.year} style={{
              display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
              marginBottom: "32px", position: "relative",
            }}>
              <div className="glass-sm" style={{ width: "43%", padding: "20px 22px" }}>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.8rem", color: "#4F8EF7", marginBottom: "6px" }}>{m.year}</div>
                <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "6px" }}>{m.event}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)", lineHeight: 1.65 }}>{m.desc}</div>
              </div>
              {/* Center dot */}
              <div style={{
                position: "absolute", left: "50%", top: "24px",
                width: 14, height: 14, borderRadius: "50%",
                background: "#4F8EF7", border: "2px solid rgba(5,7,26,1)",
                transform: "translateX(-50%)",
                boxShadow: "0 0 10px rgba(79,142,247,0.6)",
              }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
