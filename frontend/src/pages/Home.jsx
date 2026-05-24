import React, { useState } from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import UploadCard from "../components/UploadCard";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";

const trustStats = [
  { icon: "🎯", number: "98.2%", label: "Accuracy Rate" },
  { icon: "🌐", number: "2", label: "Languages" },
  { icon: "⚡", number: "<1.4s", label: "Response Time" },
  { icon: "🧪", number: "100+", label: "Test Samples" },
  { icon: "♿", number: "100%", label: "Accessibility First" },
  { icon: "🕐", number: "24/7", label: "Support" },
];

export default function Home() {
  const [result, setResult] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Hero />

      {/* Demo Section */}
      <section id="demo" style={{ padding: "20px 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="badge badge-blue" style={{ marginBottom: "14px", display: "inline-flex" }}>
            <span className="pulse-dot" />
            Live Demo
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.8rem", fontWeight: 700, color: "#E8EEFF" }}>
            Try It Now
          </h2>
          <p style={{ color: "rgba(232,238,255,0.5)", marginTop: "10px", fontSize: "0.9rem" }}>
            Upload any image and let AI describe it for you
          </p>
        </div>

        <UploadCard setResult={setResult} setAudioUrl={setAudioUrl} setLoading={setLoading} />
        {loading && <Loader />}
        {result && !loading && <ResultCard result={result} audioUrl={audioUrl} />}
      </section>

      <HowItWorks />

      {/* Why People Trust */}
      <section style={{ padding: "60px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.6rem", fontWeight: 700, color: "#E8EEFF" }}>
            Why People Trust VisionVoice
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "16px" }}>
          {trustStats.map((s) => (
            <div key={s.label} className="glass-sm" style={{ padding: "20px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.3rem", fontWeight: 700, color: "#4F8EF7" }}>{s.number}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.5)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(79,142,247,0.1)", padding: "32px 40px",
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px",
        maxWidth: "1100px", margin: "0 auto",
      }}>
        <div>
          <div style={{ fontFamily: "'Orbitron',monospace", fontWeight: 700, color: "#4F8EF7", marginBottom: "10px", fontSize: "1rem" }}>👁 VisionVoice</div>
          <p style={{ color: "rgba(232,238,255,0.4)", fontSize: "0.82rem", lineHeight: 1.7, maxWidth: "260px" }}>
            Empowering visually impaired individuals with AI and human support.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            {["📘", "🐦", "💼", "📸"].map((icon, i) => (
              <div key={i} style={{
                width: 32, height: 32, borderRadius: "8px",
                background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: "0.9rem",
              }}>{icon}</div>
            ))}
          </div>
        </div>
        {[
          { title: "Quick Links", links: ["Home", "Features", "How It Works", "Dashboard", "Help"] },
          { title: "Resources", links: ["User Guide", "Volunteer Guide", "Privacy Policy", "Terms of Service", "FAQ"] },
          { title: "Connect", links: ["support@visionvoice.ai", "volunteer@visionvoice.ai"] },
        ].map((col) => (
          <div key={col.title}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "14px", fontSize: "0.88rem" }}>{col.title}</div>
            {col.links.map((l) => (
              <div key={l} style={{ color: "rgba(232,238,255,0.4)", fontSize: "0.8rem", marginBottom: "8px", cursor: "pointer" }}
                onMouseEnter={e => e.target.style.color = "#4F8EF7"}
                onMouseLeave={e => e.target.style.color = "rgba(232,238,255,0.4)"}
              >{l}</div>
            ))}
          </div>
        ))}
      </footer>
      <div style={{ textAlign: "center", padding: "16px", borderTop: "1px solid rgba(79,142,247,0.08)", color: "rgba(232,238,255,0.25)", fontSize: "0.78rem", fontFamily: "'JetBrains Mono',monospace" }}>
        © 2025 VisionVoice. All rights reserved.
      </div>
    </div>
  );
}
