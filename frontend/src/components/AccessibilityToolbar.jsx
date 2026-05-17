import React, { useState, useEffect } from "react";
import { speak, stopSpeaking } from "../hooks/useVoice";

export default function AccessibilityToolbar() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.classList.toggle("large-text", largeText);
  }, [largeText]);

  const handleSpeak = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      // Read all visible text on page
      const mainEl = document.getElementById("main-content");
      const text = mainEl ? mainEl.innerText : document.body.innerText;
      speak(text.slice(0, 1200)); // limit to first 1200 chars
      setSpeaking(true);
      setTimeout(() => setSpeaking(false), 20000);
    }
  };

  const tools = [
    {
      icon: speaking ? "⏹" : "▶",
      label: speaking ? "Stop reading" : "Read page aloud",
      action: handleSpeak,
      active: speaking,
    },
    {
      icon: "🔆",
      label: highContrast ? "Normal contrast" : "High contrast mode",
      action: () => {
        setHighContrast(v => !v);
        speak(highContrast ? "High contrast off" : "High contrast on");
      },
      active: highContrast,
    },
    {
      icon: "A+",
      label: largeText ? "Normal text size" : "Larger text size",
      action: () => {
        setLargeText(v => !v);
        speak(largeText ? "Normal text size" : "Large text size enabled");
      },
      active: largeText,
      style: { fontSize: "0.75rem", fontWeight: 700 },
    },
    {
      icon: "⌨",
      label: "Keyboard shortcuts help",
      action: () => speak("Keyboard shortcuts: Tab to navigate. Enter or Space to activate buttons. Press H for home, F for features, D for dashboard, V for help via video call."),
    },
  ];

  return (
    <>
      {/* Toggle arrow */}
      <button
        onClick={() => { setOpen(v => !v); speak(open ? "Accessibility toolbar closed" : "Accessibility toolbar open. Four tools available: read page, high contrast, large text, keyboard help."); }}
        aria-label="Toggle accessibility toolbar"
        style={{
          position: "fixed", left: open ? "60px" : "0", top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          width: 24, height: 48,
          background: "rgba(79,142,247,0.8)",
          border: "none", borderRadius: "0 8px 8px 0",
          color: "white", cursor: "pointer", fontSize: "0.8rem",
          transition: "left 0.3s",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {open ? "◀" : "▶"}
      </button>

      {/* Toolbar */}
      <div
        className="a11y-toolbar"
        style={{
          transform: `translateY(-50%) translateX(${open ? "0" : "-80px"})`,
          transition: "transform 0.3s ease",
        }}
        role="toolbar"
        aria-label="Accessibility tools"
      >
        {tools.map((t) => (
          <button
            key={t.label}
            className={`a11y-btn ${t.active ? "active" : ""}`}
            onClick={t.action}
            aria-label={t.label}
            title={t.label}
            style={t.style || {}}
          >
            {t.icon}
          </button>
        ))}
      </div>
    </>
  );
}
