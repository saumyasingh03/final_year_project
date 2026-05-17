import React from "react";

const steps = [
  {
    num: "01", icon: "📤", title: "Capture or Upload",
    desc: "Take a live photo with your camera or upload an existing image from your device. Supports PNG, JPG, WEBP and all common formats.",
    details: ["Drag & drop support", "Camera live capture", "Any image format", "Up to 10MB size"],
  },
  {
    num: "02", icon: "🤖", title: "AI Analysis",
    desc: "Our advanced deep-learning model processes your image, identifying objects, people, text, scenes, emotions, and spatial relationships.",
    details: ["Object detection", "Scene understanding", "Text recognition (OCR)", "Emotion detection"],
  },
  {
    num: "03", icon: "📝", title: "Caption Generation",
    desc: "The AI generates a rich, descriptive caption in your chosen language — going beyond labels to create human-like, contextual descriptions.",
    details: ["12+ languages", "Context-aware text", "Natural language output", "Adjustable detail level"],
  },
  {
    num: "04", icon: "🔊", title: "Voice Feedback",
    desc: "The caption is instantly converted to natural-sounding speech using premium TTS engines. Results delivered in under 1.4 seconds.",
    details: ["Premium TTS engine", "Natural voice", "<1.4s response", "Audio download option"],
  },
];

const techStack = [
  { name: "Computer Vision", detail: "BLIP / ViT Model", icon: "👁" },
  { name: "NLP Engine", detail: "Transformer Architecture", icon: "🧠" },
  { name: "TTS System", detail: "Neural Speech Synthesis", icon: "🔊" },
  { name: "Translation", detail: "Multi-language Pipeline", icon: "🌐" },
  { name: "Backend", detail: "FastAPI + Python", icon: "⚙" },
  { name: "Frontend", detail: "React + Vite", icon: "⚛" },
];

export default function HowItWorksPage() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <section style={{ padding: "72px 40px 40px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <div className="badge badge-purple" style={{ marginBottom: "20px", display: "inline-flex" }}>
          Process Overview
        </div>
        <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.6rem", fontWeight: 900, color: "#E8EEFF", marginBottom: "20px", lineHeight: 1.15 }}>
          How{" "}
          <span style={{ background: "linear-gradient(135deg,#8B5CF6,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            VisionVoice
          </span>{" "}Works
        </h1>
        <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
          Four simple steps — from image to understanding — powered by state-of-the-art AI models.
        </p>
      </section>

      {/* Steps */}
      <section style={{ padding: "20px 40px", maxWidth: "900px", margin: "0 auto" }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{ display: "flex", gap: "32px", marginBottom: "32px", alignItems: "flex-start" }}>
            {/* Left: number + line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div className="step-circle">{step.num}</div>
              {i < steps.length - 1 && (
                <div style={{ width: "2px", height: "80px", background: "linear-gradient(to bottom, rgba(79,142,247,0.4), rgba(79,142,247,0.05))", marginTop: "8px" }} />
              )}
            </div>
            {/* Right: content */}
            <div className="glass" style={{ flex: 1, padding: "28px 28px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <div style={{ fontSize: "1.8rem" }}>{step.icon}</div>
                <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.05rem", fontWeight: 700, color: "#E8EEFF" }}>{step.title}</h2>
              </div>
              <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "20px" }}>{step.desc}</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {step.details.map((d) => (
                  <div key={d} className="badge badge-blue" style={{ fontSize: "0.72rem" }}>✓ {d}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tech Stack */}
      <section style={{ padding: "40px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="badge badge-blue" style={{ display: "inline-flex", marginBottom: "14px" }}>Under the Hood</div>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.6rem", fontWeight: 700, color: "#E8EEFF" }}>Technology Stack</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
          {techStack.map((t) => (
            <div key={t.name} className="glass-sm" style={{ padding: "22px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "12px",
                background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0,
              }}>{t.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#E8EEFF" }}>{t.name}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.45)", marginTop: "3px", fontFamily: "'JetBrains Mono',monospace" }}>{t.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
