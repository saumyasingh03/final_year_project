import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        padding: "32px",
        width: "100%",
        maxWidth: "680px",
        margin: "24px auto 0",
      }}
    >
      <div className="spinner" />
      <p className="analyzing-text" style={{ fontSize: "1rem" }}>
        ⏳ Analyzing the image...
      </p>
      <p style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.4)" }}>
        Our AI model is processing your image
      </p>
    </div>
  );
}
