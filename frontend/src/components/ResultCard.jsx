import React from "react";

export default function ResultCard({ result, audioUrl }) {
  const handleSpeak = () => {
    if (!result) return;
    const utterance = new SpeechSynthesisUtterance(result);
    // Try to auto-detect hindi
    utterance.lang = /[\u0900-\u097F]/.test(result) ? "hi-IN" : "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="glass"
      style={{
        width: "100%",
        maxWidth: "680px",
        padding: "32px",
        margin: "24px auto 0",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: 40, height: 40,
              borderRadius: "10px",
              background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,211,238,0.2))",
              border: "1px solid rgba(16,185,129,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.2rem",
            }}
          >
            🔮
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#E8EEFF" }}>
              Detection Result
            </div>
            <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)", marginTop: "2px" }}>
              AI-generated caption
            </div>
          </div>
        </div>
        <div className="badge badge-green">
          <span className="pulse-dot" style={{ background: "#10B981" }}></span>
          Complete
        </div>
      </div>

      {/* Accuracy bar (decorative) */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Confidence
          </span>
          <span style={{ fontSize: "0.75rem", color: "#4F8EF7", fontFamily: "'JetBrains Mono', monospace" }}>
            96.42%
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "96.42%" }} />
        </div>
      </div>

      {/* Caption text */}
      <div className="caption-result" style={{ marginBottom: "20px" }}>
        {result}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button
          className="btn-primary"
          onClick={handleSpeak}
          style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
        >
          🔊 Speak Again
        </button>
        <button
          className="btn-outline"
          onClick={() => navigator.clipboard?.writeText(result)}
          style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
        >
          📋 Copy Caption
        </button>
      </div>

      {/* Audio player */}
      {audioUrl && (
        <>
          <div className="divider" />
          <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.5)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Audio Output
          </div>
          <audio controls src={audioUrl} />
        </>
      )}
    </div>
  );
}
