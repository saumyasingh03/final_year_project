// import React, { useState, useRef } from "react";

// export default function UploadCard({ setResult, setAudioUrl, setLoading }) {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [language, setLanguage] = useState("en");
//   const [cameraOn, setCameraOn] = useState(false);
//   const [cameraStream, setCameraStream] = useState(null);
//   const videoRef = useRef(null);

//   // File select
//   const handleFileChange = (e) => {
//     const f = e.target.files[0];
//     if (!f) return;
//     setFile(f);
//     setPreview(URL.createObjectURL(f));
//   };

//   // Open camera
//   const openCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       setCameraStream(stream);
//       setCameraOn(true);
//       setTimeout(() => {
//         if (videoRef.current) videoRef.current.srcObject = stream;
//       }, 100);
//     } catch {
//       alert("Camera not accessible!");
//     }
//   };

//   // Close camera
//   const closeCamera = () => {
//     if (cameraStream) cameraStream.getTracks().forEach((t) => t.stop());
//     setCameraStream(null);
//     setCameraOn(false);
//   };

//   // Capture
//   const captureImage = () => {
//     const video = videoRef.current;
//     if (!video) return;
//     const canvas = document.createElement("canvas");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext("2d").drawImage(video, 0, 0);
//     canvas.toBlob((blob) => {
//       if (!blob) return;
//       const captured = new File([blob], "captured.png", { type: "image/png" });
//       setFile(captured);
//       setPreview(URL.createObjectURL(captured));
//       closeCamera();
//     }, "image/png");
//   };

//   // Submit
//   const handleSubmit = async () => {
//     if (!file) return alert("Please select or capture an image first!");

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("language", language);

//     try {
//       setLoading(true);
//       setResult("");
//       setAudioUrl("");

//       const res = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       setResult(data.caption || "");
//       setAudioUrl(data.audio_url || "");
//     } catch (err) {
//       console.error(err);
//       alert("Error! Make sure the backend server is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="glass"
//       style={{
//         width: "100%",
//         maxWidth: "680px",
//         padding: "32px",
//         margin: "0 auto",
//       }}
//     >
//       {/* Header */}
//       <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
//         <div
//           style={{
//             width: 40, height: 40,
//             borderRadius: "10px",
//             background: "linear-gradient(135deg, rgba(79,142,247,0.25), rgba(139,92,246,0.25))",
//             border: "1px solid rgba(79,142,247,0.3)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             fontSize: "1.2rem",
//           }}
//         >
//           📷
//         </div>
//         <div>
//           <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#E8EEFF" }}>
//             Image / Camera Input
//           </div>
//           <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)", marginTop: "2px" }}>
//             Upload an image or capture from camera
//           </div>
//         </div>
//       </div>

//       {/* Upload Zone */}
//       {!cameraOn && !preview && (
//         <div className="upload-zone" style={{ marginBottom: "16px" }}>
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//           <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>☁</div>
//           <div style={{ color: "#E8EEFF", fontWeight: 600, marginBottom: "6px" }}>
//             Upload Image
//           </div>
//           <div style={{ color: "rgba(232,238,255,0.45)", fontSize: "0.82rem" }}>
//             or drag and drop • PNG, JPG, WEBP
//           </div>
//         </div>
//       )}

//       {/* Preview */}
//       {preview && !cameraOn && (
//         <div style={{ marginBottom: "16px", position: "relative" }}>
//           <img src={preview} alt="Preview" className="preview-img" />
//           <button
//             onClick={() => { setFile(null); setPreview(null); }}
//             style={{
//               position: "absolute", top: "10px", right: "10px",
//               background: "rgba(5,7,26,0.8)",
//               border: "1px solid rgba(239,68,68,0.4)",
//               color: "#F87171",
//               borderRadius: "8px",
//               padding: "4px 10px",
//               fontSize: "0.8rem",
//               cursor: "pointer",
//             }}
//           >
//             ✕ Remove
//           </button>
//         </div>
//       )}

//       {/* Camera view */}
//       {cameraOn && (
//         <div style={{ marginBottom: "16px" }}>
//           <video
//             ref={videoRef}
//             autoPlay
//             playsInline
//             className="camera-view"
//           />
//           <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
//             <button className="btn-success" onClick={captureImage} style={{ flex: 1 }}>
//               📸 Capture Image
//             </button>
//             <button className="btn-danger" onClick={closeCamera}>
//               ❌ Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Camera button (when no camera open) */}
//       {!cameraOn && (
//         <button
//           className="btn-outline"
//           onClick={openCamera}
//           style={{ width: "100%", marginBottom: "24px" }}
//         >
//           📷 Open Camera
//         </button>
//       )}

//       <div className="divider" />

//       {/* Language selection */}
//       <div style={{ marginBottom: "24px" }}>
//         <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.5)", marginBottom: "12px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
//           Output Language
//         </div>
//         <div style={{ display: "flex", gap: "10px" }}>
//           {[
//             { value: "en", label: "🇬🇧 English" },
//             { value: "hi", label: "🇮🇳 Hindi" },
//           ].map((opt) => (
//             <label
//               key={opt.value}
//               className={`radio-option ${language === opt.value ? "active" : ""}`}
//               style={{ flex: 1, justifyContent: "center" }}
//             >
//               <input
//                 type="radio"
//                 name="language"
//                 value={opt.value}
//                 checked={language === opt.value}
//                 onChange={(e) => setLanguage(e.target.value)}
//               />
//               {opt.label}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Submit */}
//       <button
//         className="btn-primary"
//         onClick={handleSubmit}
//         style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
//       >
//         ✨ Generate Caption
//       </button>
//     </div>
//   );
// }







import React, { useState, useRef } from "react";
import { speak } from "../hooks/useVoice";

const API = "http://127.0.0.1:8000";

// All 4 real backend endpoints
const MODES = [
  {
    id: "caption",
    label: "🖼 Image Caption",
    endpoint: "/predict",
    desc: "Describe any image in detail",
    resultKey: "caption",
    ariaLabel: "Image captioning mode — describe any image",
  },
  {
    id: "emotion",
    label: "😊 Emotion",
    endpoint: "/recognize",
    desc: "Detect face emotion from photo",
    resultKey: "caption",
    ariaLabel: "Emotion recognition mode — detect face emotions",
  },
  {
    id: "currency",
    label: "💵 Currency",
    endpoint: "/rupee",
    desc: "Identify Indian currency notes",
    resultKey: "prediction",
    ariaLabel: "Currency detection mode — identify Indian rupee notes",
  },
  {
    id: "color",
    label: "🎨 Color",
    endpoint: "/colour",
    desc: "Identify dominant color in image",
    resultKey: "caption",
    ariaLabel: "Color detection mode — identify the main color in an image",
  },
];

// ── Voice command keywords ──────────────────────────────────────────────────
// User bol sakta hai in mein se kuch bhi:
const VOICE_COMMANDS = {
  caption:  ["caption", "describe", "image", "scene", "what is", "identify"],
  emotion:  ["emotion", "feeling", "face", "expression", "mood"],
  currency: ["currency", "money", "rupee", "note", "paisa", "cash"],
  color:    ["color", "colour", "rang"],
  submit:   ["submit", "analyze", "go", "generate", "send", "analyse", "analyse"],
  camera:   ["camera", "open camera", "capture", "take photo", "selfie"],
  english:  ["english", "angrezi"],
  hindi:    ["hindi", "हिंदी"],
};

export default function UploadCard({ setResult, setAudioUrl, setLoading }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [language, setLanguage] = useState("en");
  const [cameraOn, setCameraOn] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [activeMode, setActiveMode] = useState("caption");
  const [dragOver, setDragOver] = useState(false);

  // ── Voice state ────────────────────────────────────────
  const [voiceActive, setVoiceActive] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  const videoRef = useRef(null);

  // ─────────────────────────────────────────────────────────────────────────
  // Start Voice — microphone listener
  // ─────────────────────────────────────────────────────────────────────────
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      speak("Sorry, your browser does not support voice recognition. Please use Google Chrome.");
      return;
    }

    if (voiceActive) {
      // Stop listening
      recognitionRef.current?.stop();
      setVoiceActive(false);
      setTranscript("");
      speak("Voice control stopped.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === "hi" ? "hi-IN" : "en-US";
    recognition.continuous = true;        // keep listening
    recognition.interimResults = true;    // show live transcript

    recognition.onstart = () => {
      setVoiceActive(true);
      speak(
        "Voice control active. Say: caption, emotion, currency, color — to switch mode. " +
        "Say: camera — to open camera. Say: submit — to analyze. Say: stop — to end."
      );
    };

    recognition.onresult = (event) => {
      const last = event.results[event.results.length - 1];
      const said = last[0].transcript.toLowerCase().trim();
      setTranscript(said);

      if (!last.isFinal) return; // wait for final result before acting

      // ── Match commands ──
      if (said.includes("stop") || said.includes("band") || said.includes("ruko")) {
        recognition.stop();
        setVoiceActive(false);
        setTranscript("");
        speak("Voice control stopped.");
        return;
      }

      if (VOICE_COMMANDS.caption.some(k => said.includes(k))) {
        setActiveMode("caption");
        speak("Mode set to Image Caption.");
        return;
      }
      if (VOICE_COMMANDS.emotion.some(k => said.includes(k))) {
        setActiveMode("emotion");
        speak("Mode set to Emotion Recognition.");
        return;
      }
      if (VOICE_COMMANDS.currency.some(k => said.includes(k))) {
        setActiveMode("currency");
        speak("Mode set to Currency Detection.");
        return;
      }
      if (VOICE_COMMANDS.color.some(k => said.includes(k))) {
        setActiveMode("color");
        speak("Mode set to Color Detection.");
        return;
      }
      if (VOICE_COMMANDS.hindi.some(k => said.includes(k))) {
        setLanguage("hi");
        speak("Language set to Hindi.");
        return;
      }
      if (VOICE_COMMANDS.english.some(k => said.includes(k))) {
        setLanguage("en");
        speak("Language set to English.");
        return;
      }
      if (VOICE_COMMANDS.camera.some(k => said.includes(k))) {
        openCamera();
        return;
      }
      if (VOICE_COMMANDS.submit.some(k => said.includes(k))) {
        handleSubmit();
        return;
      }
    };

    recognition.onerror = (e) => {
      if (e.error !== "no-speech") {
        speak("Voice error. Please try again.");
        setVoiceActive(false);
      }
    };

    recognition.onend = () => {
      // If still active (not manually stopped), restart to keep listening
      if (recognitionRef.current && voiceActive) {
        try { recognitionRef.current.start(); } catch (_) {}
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Existing handlers — unchanged
  // ─────────────────────────────────────────────────────────────────────────
  const handleFileChange = (f) => {
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    speak(`Image selected: ${f.name}. Press Generate Caption button to analyze.`);
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      setCameraOn(true);
      speak("Camera opened. Press Capture Image button when ready.");
      setTimeout(() => { if (videoRef.current) videoRef.current.srcObject = stream; }, 100);
    } catch { speak("Camera not accessible. Please upload an image instead."); }
  };

  const closeCamera = () => {
    if (cameraStream) cameraStream.getTracks().forEach(t => t.stop());
    setCameraStream(null);
    setCameraOn(false);
    speak("Camera closed.");
  };

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
      speak("Image captured. Press Generate button to analyze.");
    }, "image/png");
  };

  const handleSubmit = async () => {
    if (!file) { speak("Please select or capture an image first."); return; }

    const mode = MODES.find(m => m.id === activeMode);
    speak(`Analyzing image using ${mode.label} mode. Please wait.`);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    try {
      setLoading(true);
      setResult("");
      setAudioUrl("");

      const res = await fetch(`${API}${mode.endpoint}`, { method: "POST", body: formData });
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      const caption = data[mode.resultKey] || data.caption || data.prediction || "";
      const audioUrl = data.audio_url || "";

      setResult(caption);
      setAudioUrl(audioUrl);

      speak(caption, language === "hi" ? "hi-IN" : "en-US");
    } catch (err) {
      console.error(err);
      speak("Error connecting to server. Please make sure the backend is running.");
      setResult("⚠ Could not connect to backend. Run: uvicorn main:app --reload");
    } finally {
      setLoading(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Render — only addition is the Start Voice button + transcript box
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="glass" style={{ width: "100%", maxWidth: "700px", padding: "32px", margin: "0 auto" }}
      role="region" aria-label="Image upload and analysis panel">

      {/* ── START VOICE button ── */}
      <button
        onClick={startVoice}
        aria-label={voiceActive ? "Stop voice control" : "Start voice control — control everything by speaking"}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "14px",
          border: "none",
          marginBottom: "20px",
          cursor: "pointer",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.03em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          transition: "all 0.3s",
          background: voiceActive
            ? "linear-gradient(135deg, #10B981, #22D3EE)"
            : "linear-gradient(135deg, #4F8EF7, #8B5CF6)",
          color: "white",
          boxShadow: voiceActive
            ? "0 0 24px rgba(16,185,129,0.5), 0 0 0 4px rgba(16,185,129,0.15)"
            : "0 4px 20px rgba(79,142,247,0.4)",
          animation: voiceActive ? "voicePulse 1.5s infinite" : "none",
        }}
      >
        <span style={{ fontSize: "1.3rem" }}>{voiceActive ? "⏹" : "🎙"}</span>
        {voiceActive ? "Listening... (say 'stop' to end)" : "Start Voice Control"}
      </button>

      {/* Live transcript box — only visible when voice is active */}
      {voiceActive && (
        <div
          aria-live="polite"
          aria-label="Voice transcript"
          style={{
            marginBottom: "16px",
            padding: "12px 16px",
            borderRadius: "10px",
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.25)",
            fontSize: "0.85rem",
            color: "#34D399",
            fontFamily: "'JetBrains Mono', monospace",
            minHeight: "40px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Mic pulse dot */}
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#10B981", flexShrink: 0,
            boxShadow: "0 0 8px #10B981",
            animation: "pulse 1s infinite",
          }} aria-hidden="true" />
          {transcript
            ? `"${transcript}"`
            : "Listening... say a command"}
        </div>
      )}

      {/* Voice commands hint — shown when active */}
      {voiceActive && (
        <div style={{
          marginBottom: "20px", padding: "12px 16px", borderRadius: "10px",
          background: "rgba(79,142,247,0.06)", border: "1px solid rgba(79,142,247,0.15)",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px",
        }}>
          {[
            ["🖼", "\"caption\"", "Image mode"],
            ["😊", "\"emotion\"", "Emotion mode"],
            ["💵", "\"currency\"", "Currency mode"],
            ["🎨", "\"color\"", "Color mode"],
            ["📷", "\"camera\"", "Open camera"],
            ["✨", "\"submit\"", "Analyze image"],
            ["🇮🇳", "\"hindi\"", "Switch to Hindi"],
            ["⏹", "\"stop\"", "Stop voice"],
          ].map(([icon, cmd, action]) => (
            <div key={cmd} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.72rem" }}>
              <span>{icon}</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", color: "#4F8EF7" }}>{cmd}</span>
              <span style={{ color: "rgba(232,238,255,0.4)" }}>→ {action}</span>
            </div>
          ))}
        </div>
      )}

      {/* Mode selector */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.45)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Analysis Mode
        </div>
        <div style={{ display: "flex", gap: "8px" }} role="radiogroup" aria-label="Select analysis mode">
          {MODES.map((m) => (
            <button
              key={m.id}
              role="radio"
              aria-checked={activeMode === m.id}
              aria-label={m.ariaLabel}
              className={`mode-tab ${activeMode === m.id ? "active" : ""}`}
              onClick={() => { setActiveMode(m.id); speak(m.ariaLabel); }}
              title={m.desc}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.4)", marginTop: "8px" }}>
          {MODES.find(m => m.id === activeMode)?.desc}
        </div>
      </div>

      <div className="divider" />

      {/* Upload Zone */}
      {!cameraOn && !preview && (
        <div
          className={`upload-zone ${dragOver ? "drag-over" : ""}`}
          style={{ marginBottom: "16px" }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={e => { e.preventDefault(); setDragOver(false); handleFileChange(e.dataTransfer.files[0]); }}
          aria-label="Drop zone. Drag and drop an image here, or click to select a file"
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") e.currentTarget.querySelector("input").click(); }}
        >
          <input type="file" accept="image/*"
            onChange={e => handleFileChange(e.target.files[0])}
            aria-label="Select image file" />
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }} aria-hidden="true">☁</div>
          <div style={{ color: "#E8EEFF", fontWeight: 600, marginBottom: "6px" }}>Upload Image</div>
          <div style={{ color: "rgba(232,238,255,0.4)", fontSize: "0.82rem" }}>Drag & drop, or click to select • PNG, JPG, WEBP</div>
        </div>
      )}

      {/* Preview */}
      {preview && !cameraOn && (
        <div style={{ marginBottom: "16px", position: "relative" }}>
          <img src={preview} alt="Selected image preview" className="preview-img" />
          <button
            onClick={() => { setFile(null); setPreview(null); speak("Image removed. Please select a new image."); }}
            aria-label="Remove selected image"
            style={{
              position: "absolute", top: "10px", right: "10px",
              background: "rgba(5,7,26,0.85)", border: "1px solid rgba(239,68,68,0.4)",
              color: "#F87171", borderRadius: "8px", padding: "4px 10px",
              fontSize: "0.8rem", cursor: "pointer",
            }}
          >✕ Remove</button>
        </div>
      )}

      {/* Camera */}
      {cameraOn && (
        <div style={{ marginBottom: "16px" }}>
          <video ref={videoRef} autoPlay playsInline className="camera-view" aria-label="Live camera feed" />
          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <button className="btn-success" onClick={captureImage} style={{ flex: 1 }} aria-label="Capture current camera frame">
              📸 Capture Image
            </button>
            <button className="btn-danger" onClick={closeCamera} aria-label="Close camera">
              ❌ Close
            </button>
          </div>
        </div>
      )}

      {!cameraOn && (
        <button className="btn-outline" onClick={openCamera} style={{ width: "100%", marginBottom: "20px" }}
          aria-label="Open camera to capture image">
          📷 Open Camera
        </button>
      )}

      <div className="divider" />

      {/* Language */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.45)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Output Language
        </div>
        <div style={{ display: "flex", gap: "10px" }} role="radiogroup" aria-label="Select output language">
          {[{ value: "en", label: "🇬🇧 English" }, { value: "hi", label: "🇮🇳 Hindi" }].map(opt => (
            <label key={opt.value}
              className={`radio-option ${language === opt.value ? "active" : ""}`}
              style={{ flex: 1, justifyContent: "center" }}
              aria-label={`Output in ${opt.value === "en" ? "English" : "Hindi"}`}
            >
              <input type="radio" name="language" value={opt.value}
                checked={language === opt.value}
                onChange={e => { setLanguage(e.target.value); speak(`Language set to ${opt.value === "en" ? "English" : "Hindi"}`); }} />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button className="btn-primary" onClick={handleSubmit}
        style={{ width: "100%", padding: "16px", fontSize: "1.05rem" }}
        aria-label="Generate AI caption for the uploaded image">
        ✨ Generate Caption
      </button>
    </div>
  );
}
