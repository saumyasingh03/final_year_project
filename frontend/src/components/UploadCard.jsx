import React, { useState, useRef } from "react";

export default function UploadCard({ setResult, setAudioUrl, setLoading }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [language, setLanguage] = useState("en");
  const [cameraOn, setCameraOn] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const videoRef = useRef(null);

  // File select
  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  // Open camera
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      setCameraOn(true);
      setTimeout(() => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      }, 100);
    } catch {
      alert("Camera not accessible!");
    }
  };

  // Close camera
  const closeCamera = () => {
    if (cameraStream) cameraStream.getTracks().forEach((t) => t.stop());
    setCameraStream(null);
    setCameraOn(false);
  };

  // Capture
  const captureImage = () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const captured = new File([blob], "captured.png", { type: "image/png" });
      setFile(captured);
      setPreview(URL.createObjectURL(captured));
      closeCamera();
    }, "image/png");
  };

  // Submit
  const handleSubmit = async () => {
    if (!file) return alert("Please select or capture an image first!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    try {
      setLoading(true);
      setResult("");
      setAudioUrl("");

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data.caption || "");
      setAudioUrl(data.audio_url || "");
    } catch (err) {
      console.error(err);
      alert("Error! Make sure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="glass"
      style={{
        width: "100%",
        maxWidth: "680px",
        padding: "32px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
        <div
          style={{
            width: 40, height: 40,
            borderRadius: "10px",
            background: "linear-gradient(135deg, rgba(79,142,247,0.25), rgba(139,92,246,0.25))",
            border: "1px solid rgba(79,142,247,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          📷
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#E8EEFF" }}>
            Image / Camera Input
          </div>
          <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)", marginTop: "2px" }}>
            Upload an image or capture from camera
          </div>
        </div>
      </div>

      {/* Upload Zone */}
      {!cameraOn && !preview && (
        <div className="upload-zone" style={{ marginBottom: "16px" }}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>☁</div>
          <div style={{ color: "#E8EEFF", fontWeight: 600, marginBottom: "6px" }}>
            Upload Image
          </div>
          <div style={{ color: "rgba(232,238,255,0.45)", fontSize: "0.82rem" }}>
            or drag and drop • PNG, JPG, WEBP
          </div>
        </div>
      )}

      {/* Preview */}
      {preview && !cameraOn && (
        <div style={{ marginBottom: "16px", position: "relative" }}>
          <img src={preview} alt="Preview" className="preview-img" />
          <button
            onClick={() => { setFile(null); setPreview(null); }}
            style={{
              position: "absolute", top: "10px", right: "10px",
              background: "rgba(5,7,26,0.8)",
              border: "1px solid rgba(239,68,68,0.4)",
              color: "#F87171",
              borderRadius: "8px",
              padding: "4px 10px",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
          >
            ✕ Remove
          </button>
        </div>
      )}

      {/* Camera view */}
      {cameraOn && (
        <div style={{ marginBottom: "16px" }}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="camera-view"
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <button className="btn-success" onClick={captureImage} style={{ flex: 1 }}>
              📸 Capture Image
            </button>
            <button className="btn-danger" onClick={closeCamera}>
              ❌ Close
            </button>
          </div>
        </div>
      )}

      {/* Camera button (when no camera open) */}
      {!cameraOn && (
        <button
          className="btn-outline"
          onClick={openCamera}
          style={{ width: "100%", marginBottom: "24px" }}
        >
          📷 Open Camera
        </button>
      )}

      <div className="divider" />

      {/* Language selection */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.5)", marginBottom: "12px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Output Language
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { value: "en", label: "🇬🇧 English" },
            { value: "hi", label: "🇮🇳 Hindi" },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`radio-option ${language === opt.value ? "active" : ""}`}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <input
                type="radio"
                name="language"
                value={opt.value}
                checked={language === opt.value}
                onChange={(e) => setLanguage(e.target.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        className="btn-primary"
        onClick={handleSubmit}
        style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
      >
        ✨ Generate Caption
      </button>
    </div>
  );
}
