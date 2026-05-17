import React, { useState } from "react";
import { speak, stopSpeaking, PAGE_INTROS } from "../hooks/useVoice";
import { useLocation } from "react-router-dom";

export default function VoiceGuideButton() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  const handleGuide = () => {
    if (active) {
      stopSpeaking();
      setActive(false);
      return;
    }
    const intro = PAGE_INTROS[location.pathname] || "VisionVoice. AI-powered visual assistance.";
    setActive(true);
    speak(intro, "en-US", 0.9);
    setTimeout(() => setActive(false), 15000);
  };

  return (
    <button
      className="voice-guide-btn"
      onClick={handleGuide}
      aria-label={active ? "Stop voice guide" : "Start voice guide — hear instructions for this page"}
      title={active ? "Stop voice guide" : "Voice guide: hear how to use this page"}
      style={{
        background: active
          ? "linear-gradient(135deg, #10B981, #22D3EE)"
          : "linear-gradient(135deg, #4F8EF7, #8B5CF6)",
      }}
    >
      {active ? "⏹" : "🎙"}
    </button>
  );
}
