// import React, { useState } from "react";

// const volunteers = [
//   { name: "Rahul Sharma", status: "online", rating: 4.9, calls: 56, avatar: "👨", specialty: "Object Identification" },
//   { name: "Priya Verma", status: "online", rating: 4.8, calls: 43, avatar: "👩", specialty: "Navigation Help" },
//   { name: "Aman Singh", status: "online", rating: 4.9, calls: 38, avatar: "👨", specialty: "Text Reading" },
//   { name: "Kavita Joshi", status: "busy", rating: 4.7, calls: 61, avatar: "👩", specialty: "General Assistance" },
//   { name: "Suresh Patel", status: "online", rating: 4.8, calls: 29, avatar: "👨", specialty: "Medical Labels" },
//   { name: "Anjali Mehta", status: "offline", rating: 4.6, calls: 52, avatar: "👩", specialty: "Product Labels" },
//   { name: "Ramesh Kumar", status: "online", rating: 4.9, calls: 34, avatar: "👨", specialty: "Document Reading" },
//   { name: "Sneha Gupta", status: "online", rating: 4.7, calls: 27, avatar: "👩", specialty: "Scene Description" },
// ];

// const statusColor = { online: "#10B981", busy: "#F59E0B", offline: "#6B7280" };
// const statusLabel = { online: "Online", busy: "Busy", offline: "Offline" };

// export default function HelpPage() {
//   const [selected, setSelected] = useState(null);
//   const [mode, setMode] = useState(null); // 'need' or 'volunteer'

//   return (
//     <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
//       {/* Header */}
//       <section style={{ padding: "64px 40px 32px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
//         <div className="badge badge-green" style={{ marginBottom: "20px", display: "inline-flex" }}>
//           <span className="pulse-dot" style={{ background: "#10B981" }} />
//           Live Support Available
//         </div>
//         <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.4rem", fontWeight: 900, color: "#E8EEFF", marginBottom: "16px", lineHeight: 1.15 }}>
//           Help via{" "}
//           <span style={{ background: "linear-gradient(135deg,#10B981,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//             Video Call
//           </span>
//         </h1>
//         <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
//           Connect with trained volunteers for real-time, personalized assistance. Available 24/7.
//         </p>
//       </section>

//       {/* Two cards: I Need Help / I Want to Help */}
//       <section style={{ padding: "0 40px 40px", maxWidth: "900px", margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
//           {[
//             { icon: "🙏", title: "I Need Help", desc: "Connect with a volunteer for guidance and real-time visual assistance.", action: "Start Video Call", key: "need", color: "#4F8EF7" },
//             { icon: "💪", title: "I Want to Help", desc: "Join as a volunteer and make a difference by helping someone in need.", action: "Become a Volunteer", key: "volunteer", color: "#8B5CF6" },
//           ].map((card) => (
//             <div key={card.key} className="glass" style={{ padding: "32px 28px", textAlign: "center" }}>
//               <div style={{
//                 width: 64, height: 64, borderRadius: "18px", margin: "0 auto 16px",
//                 background: `linear-gradient(135deg,${card.color}22,${card.color}11)`,
//                 border: `1px solid ${card.color}44`,
//                 display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem",
//               }}>{card.icon}</div>
//               <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "10px" }}>{card.title}</h2>
//               <p style={{ fontSize: "0.85rem", color: "rgba(232,238,255,0.5)", lineHeight: 1.7, marginBottom: "20px" }}>{card.desc}</p>
//               <button
//                 className="btn-primary"
//                 style={{ width: "100%", background: `linear-gradient(135deg,${card.color},${card.color}cc)` }}
//                 onClick={() => setMode(card.key)}
//               >
//                 {card.action}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Modal-like alert */}
//         {mode && (
//           <div className="glass" style={{ padding: "20px 24px", marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <div>
//               <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "4px" }}>
//                 {mode === "need" ? "🎥 Starting video call session..." : "🤝 Registering as volunteer..."}
//               </div>
//               <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)" }}>
//                 {mode === "need" ? "Select a volunteer below to connect" : "Fill out your profile to start helping"}
//               </div>
//             </div>
//             <button className="btn-danger" style={{ padding: "6px 14px" }} onClick={() => setMode(null)}>✕ Cancel</button>
//           </div>
//         )}

//         {/* Available Volunteers */}
//         <div>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//             <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: "#E8EEFF" }}>
//               Available Volunteers
//             </h2>
//             <div className="badge badge-green">
//               <span className="pulse-dot" style={{ background: "#10B981" }} />
//               {volunteers.filter(v => v.status === "online").length} Online
//             </div>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px" }}>
//             {volunteers.map((v) => (
//               <div key={v.name} className="glass-sm" style={{
//                 padding: "18px 20px",
//                 border: selected === v.name ? "1px solid #4F8EF7" : "1px solid rgba(255,255,255,0.07)",
//                 cursor: "pointer", transition: "all 0.2s",
//                 opacity: v.status === "offline" ? 0.55 : 1,
//               }}
//                 onClick={() => setSelected(v.name)}
//                 onMouseEnter={e => { if (v.status !== "offline") e.currentTarget.style.borderColor = "rgba(79,142,247,0.4)"; }}
//                 onMouseLeave={e => { if (selected !== v.name) e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
//               >
//                 <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
//                   {/* Avatar */}
//                   <div style={{ position: "relative", flexShrink: 0 }}>
//                     <div style={{
//                       width: 46, height: 46, borderRadius: "14px",
//                       background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)",
//                       display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
//                     }}>{v.avatar}</div>
//                     <div style={{
//                       position: "absolute", bottom: -2, right: -2,
//                       width: 12, height: 12, borderRadius: "50%",
//                       background: statusColor[v.status],
//                       border: "2px solid rgba(5,7,26,1)",
//                       boxShadow: `0 0 6px ${statusColor[v.status]}`,
//                     }} />
//                   </div>
//                   {/* Info */}
//                   <div style={{ flex: 1 }}>
//                     <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#E8EEFF" }}>{v.name}</div>
//                     <div style={{ fontSize: "0.75rem", color: statusColor[v.status], marginTop: "2px" }}>{statusLabel[v.status]}</div>
//                     <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{v.specialty}</div>
//                   </div>
//                   {/* Rating + Call */}
//                   <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
//                     <div style={{ fontSize: "0.78rem", color: "#F59E0B", fontFamily: "'JetBrains Mono',monospace" }}>⭐ {v.rating}</div>
//                     <button
//                       className={v.status === "offline" ? "btn-danger" : "btn-primary"}
//                       style={{ padding: "5px 14px", fontSize: "0.75rem", opacity: v.status === "offline" ? 0.5 : 1 }}
//                       disabled={v.status === "offline"}
//                       onClick={e => { e.stopPropagation(); alert(`Calling ${v.name}...`); }}
//                     >
//                       📞 Call
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <button className="btn-outline" style={{ padding: "10px 28px" }}>View All Volunteers</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }






import React, { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { volunteersApi } from "../services/mockApi";
import { speak } from "../hooks/useVoice";

// ── Constants ────────────────────────────────────────────────────────────────
const STATUS_COLOR = { online: "#10B981", busy: "#F59E0B", offline: "#6B7280" };
const STATUS_LABEL = { online: "Online",  busy: "Busy",    offline: "Offline"  };

const CALL_MESSAGES = [
  "Can you describe what's in front of me?",
  "I need help reading this label.",
  "What color is this shirt?",
  "Can you help me identify this currency note?",
  "Is there any text on this package?",
  "What does this sign say?",
  "Can you describe the room layout?",
];
const VOL_REPLIES = [
  "Sure! I can see a wooden table with some objects on it.",
  "That label says 'Paracetamol 500mg — take one tablet twice daily'.",
  "The shirt is a deep navy blue color.",
  "That's a ₹500 note — it's the pink/lavender colored one.",
  "Yes, it reads 'Best Before: June 2026. Store in a cool dry place.'",
  "The sign says 'Emergency Exit — Keep Clear'.",
  "There's a sofa on your left, a TV stand ahead, and a door to your right.",
];

// ── Volunteer Card ────────────────────────────────────────────────────────────
function VolunteerCard({ v, selected, onSelect, onCall, callLoading }) {
  return (
    <div
      className="glass-sm"
      onClick={() => v.status !== "offline" && onSelect(v)}
      style={{
        padding: "18px 20px", cursor: v.status === "offline" ? "default" : "pointer",
        border: `1px solid ${selected?.id === v.id ? "#4F8EF7" : "rgba(255,255,255,0.07)"}`,
        opacity: v.status === "offline" ? 0.5 : 1, transition: "all 0.25s",
        transform: selected?.id === v.id ? "scale(1.01)" : "scale(1)",
        boxShadow: selected?.id === v.id ? "0 0 20px rgba(79,142,247,0.2)" : "none",
      }}
      onMouseEnter={e => { if (v.status !== "offline") e.currentTarget.style.borderColor = "rgba(79,142,247,0.35)"; }}
      onMouseLeave={e => { if (selected?.id !== v.id) e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Avatar with status dot */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{
            width: 48, height: 48, borderRadius: "14px",
            background: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem",
          }}>{v.avatar}</div>
          <div style={{
            position: "absolute", bottom: -2, right: -2, width: 13, height: 13,
            borderRadius: "50%", background: STATUS_COLOR[v.status],
            border: "2px solid #05071A", boxShadow: `0 0 8px ${STATUS_COLOR[v.status]}`,
            animation: v.status === "online" ? "pulse 2s infinite" : "none",
          }} />
        </div>
        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#E8EEFF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v.name}</div>
          <div style={{ fontSize: "0.72rem", color: STATUS_COLOR[v.status], marginTop: "2px", fontWeight: 600 }}>{STATUS_LABEL[v.status]}</div>
          <div style={{ fontSize: "0.7rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{v.specialty}</div>
        </div>
        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
          <div style={{ fontSize: "0.75rem", color: "#F59E0B" }}>⭐ {v.rating}</div>
          <button
            disabled={v.status === "offline" || callLoading}
            onClick={e => { e.stopPropagation(); onCall(v); }}
            className="btn-primary"
            style={{ padding: "5px 12px", fontSize: "0.72rem",
              opacity: v.status === "offline" ? 0.4 : 1,
              background: v.status === "busy" ? "linear-gradient(135deg,#F59E0B,#D97706)" : undefined,
            }}
          >
            {v.status === "busy" ? "⏳ Busy" : "📞 Call"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Live Video Call Modal ────────────────────────────────────────────────────
function VideoCallModal({ volunteer, onEnd }) {
  const [callState, setCallState]   = useState("connecting"); // connecting | active | ended
  const [duration, setDuration]     = useState(0);
  const [messages, setMessages]     = useState([]);
  const [inputMsg, setInputMsg]     = useState("");
  const [muted, setMuted]           = useState(false);
  const [camOff, setCamOff]         = useState(false);
  const [volTyping, setVolTyping]   = useState(false);
  const [msgIdx, setMsgIdx]         = useState(0);
  const chatEndRef                  = useRef(null);
  const timerRef                    = useRef(null);
  const userStream                  = useRef(null);
  const videoRef                    = useRef(null);

  // Auto-scroll chat
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  // Connect after 2.5s
  useEffect(() => {
    const t = setTimeout(() => {
      setCallState("active");
      speak(`Connected to ${volunteer.name}. You can now speak or type your request.`);
      setMessages([{
        id: 1, from: "volunteer", text: `Hi! I'm ${volunteer.name}. I'm here to help you. How can I assist you today?`,
        time: new Date(),
      }]);
    }, 2500);
    return () => clearTimeout(t);
  }, [volunteer.name]);

  // Duration timer
  useEffect(() => {
    if (callState === "active") {
      timerRef.current = setInterval(() => setDuration(d => d + 1), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [callState]);

  // Try to get user camera
  useEffect(() => {
    navigator.mediaDevices?.getUserMedia({ video: true, audio: false })
      .then(stream => {
        userStream.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(() => {}); // silently ignore if denied
    return () => { userStream.current?.getTracks().forEach(t => t.stop()); };
  }, []);

  // Volunteer auto-replies
  const simulateVolReply = useCallback((userText) => {
    setVolTyping(true);
    const delay = 1500 + Math.random() * 1500;
    setTimeout(() => {
      setVolTyping(false);
      const reply = VOL_REPLIES[msgIdx % VOL_REPLIES.length];
      setMsgIdx(i => i + 1);
      setMessages(ms => [...ms, { id: Date.now(), from: "volunteer", text: reply, time: new Date() }]);
      speak(reply, "en-US", 0.95);
    }, delay);
  }, [msgIdx]);

  const sendMessage = (text) => {
    if (!text.trim() || callState !== "active") return;
    const msg = { id: Date.now(), from: "user", text: text.trim(), time: new Date() };
    setMessages(ms => [...ms, msg]);
    setInputMsg("");
    simulateVolReply(text);
  };

  const handleEnd = () => {
    setCallState("ended");
    userStream.current?.getTracks().forEach(t => t.stop());
    speak("Call ended. Thank you for using VisionVoice.");
    setTimeout(onEnd, 1800);
  };

  const fmtTime = (s) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  const fmtMsgTime = (d) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
    }}>
      <div style={{
        width: "100%", maxWidth: "900px", borderRadius: "24px",
        background: "rgba(8,12,35,0.98)", border: "1px solid rgba(79,142,247,0.25)",
        overflow: "hidden", display: "flex", flexDirection: "column",
        maxHeight: "90vh", boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
      }}>

        {/* ── Header bar ── */}
        <div style={{
          padding: "16px 24px", background: "rgba(79,142,247,0.08)",
          borderBottom: "1px solid rgba(79,142,247,0.15)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(79,142,247,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
              {volunteer.avatar}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#E8EEFF", fontSize: "0.95rem" }}>{volunteer.name}</div>
              <div style={{ fontSize: "0.72rem", color: STATUS_COLOR.online, display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "inline-block", animation: "pulse 1.5s infinite" }} />
                {callState === "connecting" ? "Connecting..." : callState === "active" ? `Live • ${fmtTime(duration)}` : "Call Ended"}
              </div>
            </div>
          </div>
          {/* Quality badge */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div className="badge badge-green" style={{ fontSize: "0.68rem" }}>HD</div>
            <div className="badge badge-blue" style={{ fontSize: "0.68rem" }}>
              <span className="pulse-dot" style={{ background: "#4F8EF7", width: 5, height: 5 }} />
              Encrypted
            </div>
          </div>
        </div>

        {/* ── Main area: video + chat ── */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}>

          {/* Video panel */}
          <div style={{ flex: 1, background: "linear-gradient(135deg,#060A1F,#0D1330)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

            {/* Connecting overlay */}
            {callState === "connecting" && (
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, background: "rgba(6,10,31,0.85)" }}>
                <div style={{ fontSize: "4rem", marginBottom: "16px", animation: "pulse 1.5s infinite" }}>{volunteer.avatar}</div>
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", color: "#E8EEFF", marginBottom: "8px" }}>Connecting to {volunteer.name}...</div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#4F8EF7", animation: `pulse 1.2s ${i*0.3}s infinite` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Volunteer "video" — animated avatar */}
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{
                width: 120, height: 120, borderRadius: "50%", margin: "0 auto 16px",
                background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(139,92,246,0.2))",
                border: callState === "active" ? "3px solid #4F8EF7" : "3px solid rgba(79,142,247,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem",
                boxShadow: callState === "active" ? "0 0 30px rgba(79,142,247,0.4)" : "none",
                animation: callState === "active" ? "voicePulse 2s infinite" : "none",
                transition: "all 0.5s",
              }}>{volunteer.avatar}</div>
              <div style={{ fontFamily: "'Orbitron',monospace", color: "#E8EEFF", fontWeight: 700, fontSize: "1.1rem" }}>{volunteer.name}</div>
              <div style={{ color: "rgba(232,238,255,0.5)", fontSize: "0.82rem", marginTop: "4px" }}>{volunteer.specialty}</div>
              {callState === "active" && (
                <div style={{ display: "flex", justifyContent: "center", gap: "3px", alignItems: "flex-end", height: "30px", marginTop: "16px" }}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} style={{
                      width: 3, borderRadius: "2px",
                      background: "linear-gradient(to top,#4F8EF7,#22D3EE)",
                      animation: `pulse ${0.6 + (i % 4) * 0.2}s ease-in-out infinite alternate`,
                      height: `${8 + Math.sin(i) * 12 + 8}px`,
                    }} />
                  ))}
                </div>
              )}
            </div>

            {/* User's own camera (PiP) */}
            <div style={{
              position: "absolute", bottom: 16, right: 16,
              width: 120, height: 90, borderRadius: "12px",
              border: "2px solid rgba(79,142,247,0.4)",
              overflow: "hidden", background: "#0D1330",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            }}>
              {camOff ? (
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "1.5rem" }}>👤</span>
                  <span style={{ fontSize: "0.6rem", color: "rgba(232,238,255,0.4)", marginTop: "4px" }}>Camera Off</span>
                </div>
              ) : (
                <video ref={videoRef} autoPlay muted playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }} />
              )}
              <div style={{ position: "absolute", bottom: 4, left: 0, right: 0, textAlign: "center", fontSize: "0.6rem", color: "rgba(232,238,255,0.5)" }}>You</div>
            </div>

            {/* Mute indicator */}
            {muted && (
              <div style={{ position: "absolute", top: 16, left: 16, padding: "6px 12px", borderRadius: "8px", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.4)", color: "#F87171", fontSize: "0.78rem" }}>
                🔇 Muted
              </div>
            )}
          </div>

          {/* Chat panel */}
          <div style={{
            width: 300, borderLeft: "1px solid rgba(79,142,247,0.15)",
            display: "flex", flexDirection: "column", background: "rgba(5,7,26,0.5)",
          }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(79,142,247,0.1)", fontSize: "0.78rem", color: "rgba(232,238,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              💬 Live Chat
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {messages.map(msg => (
                <div key={msg.id} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    maxWidth: "85%", padding: "10px 13px", borderRadius: msg.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    background: msg.from === "user" ? "linear-gradient(135deg,#4F8EF7,#3B6FE0)" : "rgba(255,255,255,0.07)",
                    border: msg.from === "user" ? "none" : "1px solid rgba(79,142,247,0.15)",
                    fontSize: "0.82rem", color: "#E8EEFF", lineHeight: 1.5,
                  }}>{msg.text}</div>
                  <div style={{ fontSize: "0.62rem", color: "rgba(232,238,255,0.3)", marginTop: "3px" }}>{fmtMsgTime(msg.time)}</div>
                </div>
              ))}

              {/* Volunteer typing indicator */}
              {volTyping && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ padding: "10px 14px", borderRadius: "14px 14px 14px 4px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(79,142,247,0.15)" }}>
                    <div style={{ display: "flex", gap: "4px" }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#4F8EF7", animation: `pulse 1s ${i*0.2}s infinite` }} />
                      ))}
                    </div>
                  </div>
                  <span style={{ fontSize: "0.68rem", color: "rgba(232,238,255,0.35)" }}>typing...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat input */}
            <div style={{ padding: "12px 14px", borderTop: "1px solid rgba(79,142,247,0.1)" }}>
              {/* Quick messages */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "8px", flexWrap: "wrap" }}>
                {CALL_MESSAGES.slice(0,3).map(m => (
                  <button key={m} onClick={() => sendMessage(m)}
                    style={{
                      padding: "3px 8px", borderRadius: "20px", fontSize: "0.62rem",
                      background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)",
                      color: "rgba(232,238,255,0.6)", cursor: "pointer", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(79,142,247,0.2)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(79,142,247,0.1)"}
                  >{m.slice(0, 22)}…</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <input
                  value={inputMsg}
                  onChange={e => setInputMsg(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage(inputMsg)}
                  placeholder={callState === "active" ? "Type a message..." : "Connecting..."}
                  disabled={callState !== "active"}
                  style={{
                    flex: 1, padding: "9px 12px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(79,142,247,0.2)",
                    color: "#E8EEFF", fontSize: "0.82rem", fontFamily: "'Syne',sans-serif", outline: "none",
                  }}
                />
                <button onClick={() => sendMessage(inputMsg)} disabled={callState !== "active"}
                  className="btn-primary" style={{ padding: "9px 12px", fontSize: "0.78rem" }}>↑</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Controls bar ── */}
        <div style={{
          padding: "16px 24px", background: "rgba(5,7,26,0.8)",
          borderTop: "1px solid rgba(79,142,247,0.12)",
          display: "flex", justifyContent: "center", alignItems: "center", gap: "16px",
        }}>
          {[
            { icon: muted ? "🔇" : "🎤", label: muted ? "Unmute" : "Mute", action: () => setMuted(v => !v), active: muted },
            { icon: camOff ? "📵" : "📹", label: camOff ? "Start Cam" : "Stop Cam", action: () => setCamOff(v => !v), active: camOff },
            { icon: "💬", label: "Chat", action: () => {}, active: false },
            { icon: "🖼", label: "Share Image", action: () => sendMessage("Let me share an image for you to describe."), active: false },
          ].map(ctrl => (
            <button key={ctrl.label} onClick={ctrl.action} title={ctrl.label}
              style={{
                width: 48, height: 48, borderRadius: "50%", border: "none", cursor: "pointer",
                background: ctrl.active ? "rgba(239,68,68,0.2)" : "rgba(79,142,247,0.12)",
                border: `1px solid ${ctrl.active ? "rgba(239,68,68,0.4)" : "rgba(79,142,247,0.25)"}`,
                fontSize: "1.2rem", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >{ctrl.icon}</button>
          ))}

          {/* End call */}
          <button onClick={handleEnd}
            style={{
              padding: "12px 28px", borderRadius: "24px", border: "none",
              background: "linear-gradient(135deg,#EF4444,#DC2626)", color: "white",
              fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.9rem",
              cursor: "pointer", boxShadow: "0 4px 16px rgba(239,68,68,0.4)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >📵 End Call</button>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN HELP PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function HelpPage() {
  const { user }              = useAuth();
  const [volunteers, setVols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [activeCall, setActiveCall] = useState(null);
  const [callLoading, setCallLoading] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);

  // Load volunteers
  useEffect(() => {
    volunteersApi.getAll().then(v => {
      setVols(v);
      setOnlineCount(v.filter(x => x.status === "online").length);
      setLoading(false);
    });
  }, []);

  // Refresh volunteer statuses every 20s (simulate real-time)
  useEffect(() => {
    const t = setInterval(() => {
      volunteersApi.getAll().then(v => {
        setVols(v);
        setOnlineCount(v.filter(x => x.status === "online").length);
      });
    }, 20000);
    return () => clearInterval(t);
  }, []);

  const handleCall = async (volunteer) => {
    if (volunteer.status === "offline") return;
    setCallLoading(true);
    speak(`Calling ${volunteer.name}. Please wait while we connect.`);
    await new Promise(r => setTimeout(r, 800));
    setCallLoading(false);
    setActiveCall(volunteer);
  };

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>

      {/* Live video call modal */}
      {activeCall && <VideoCallModal volunteer={activeCall} onEnd={() => setActiveCall(null)} />}

      {/* Header */}
      <section style={{ padding: "64px 40px 32px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <div className="badge badge-green" style={{ marginBottom: "20px", display: "inline-flex" }}>
          <span className="pulse-dot" style={{ background: "#10B981" }} />
          {loading ? "Checking availability..." : `${onlineCount} Volunteers Live Now`}
        </div>
        <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.4rem", fontWeight: 900, color: "#E8EEFF", marginBottom: "16px", lineHeight: 1.15 }}>
          Help via{" "}
          <span style={{ background: "linear-gradient(135deg,#10B981,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Video Call
          </span>
        </h1>
        <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
          Connect with trained human volunteers for real-time, personalized visual assistance. Average wait time: <strong style={{ color: "#10B981" }}>&lt; 30 seconds</strong>.
        </p>
      </section>

      <section style={{ padding: "0 40px 40px", maxWidth: "1000px", margin: "0 auto" }}>

        {/* I Need Help / I Want to Help cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
          {[
            { icon: "🙏", title: "I Need Help", desc: "Connect with a trained volunteer for real-time visual guidance and scene description.", action: "Browse Volunteers ↓", color: "#4F8EF7",
              stats: [{ val: `${onlineCount}`, label: "Online now" }, { val: "<30s", label: "Avg wait" }, { val: "4.8★", label: "Rating" }] },
            { icon: "💪", title: "I Want to Help", desc: "Join as a volunteer and make a daily difference in someone's life through simple video calls.", action: "Become a Volunteer", color: "#8B5CF6",
              stats: [{ val: "328", label: "Volunteers" }, { val: "5,670+", label: "Calls done" }, { val: "Free", label: "To join" }] },
          ].map((card, i) => (
            <div key={i} className="glass" style={{ padding: "28px 26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{ width: 52, height: 52, borderRadius: "16px", background: `${card.color}22`, border: `1px solid ${card.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem" }}>
                  {card.icon}
                </div>
                <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 700, color: "#E8EEFF" }}>{card.title}</h2>
              </div>
              <p style={{ fontSize: "0.85rem", color: "rgba(232,238,255,0.5)", lineHeight: 1.7, marginBottom: "18px" }}>{card.desc}</p>
              {/* Mini stats */}
              <div style={{ display: "flex", gap: "0", marginBottom: "20px", background: `${card.color}10`, borderRadius: "12px", overflow: "hidden" }}>
                {card.stats.map((s, j) => (
                  <div key={j} style={{ flex: 1, padding: "10px 8px", textAlign: "center", borderRight: j < 2 ? `1px solid ${card.color}20` : "none" }}>
                    <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.95rem", fontWeight: 700, color: card.color }}>{s.val}</div>
                    <div style={{ fontSize: "0.65rem", color: "rgba(232,238,255,0.4)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ width: "100%", background: `linear-gradient(135deg,${card.color},${card.color}cc)` }}
                onClick={() => { if (i === 1) speak("Thank you for wanting to volunteer! Register on our platform to get started."); else document.getElementById("volunteers-section")?.scrollIntoView({ behavior: "smooth" }); }}>
                {card.action}
              </button>
            </div>
          ))}
        </div>

        {/* How a call works */}
        <div className="glass" style={{ padding: "24px 28px", marginBottom: "32px" }}>
          <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "18px", fontSize: "0.95rem" }}>⚡ How a Call Works</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0" }}>
            {[
              { num: "1", icon: "👆", label: "Select Volunteer", desc: "Pick from online volunteers" },
              { num: "2", icon: "📞", label: "Click Call",       desc: "Instant connection request" },
              { num: "3", icon: "🎥", label: "Video Starts",     desc: "HD encrypted video call" },
              { num: "4", icon: "🔊", label: "Get Help",         desc: "Real-time voice guidance" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "0 16px", borderRight: i < 3 ? "1px solid rgba(79,142,247,0.1)" : "none", textAlign: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#4F8EF7,#3B6FE0)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Orbitron',monospace", fontSize: "0.8rem", fontWeight: 700, color: "white", margin: "0 auto 10px" }}>{s.num}</div>
                <div style={{ fontSize: "1.4rem", marginBottom: "6px" }}>{s.icon}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "4px" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteers grid */}
        <div id="volunteers-section">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
            <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.05rem", fontWeight: 700, color: "#E8EEFF" }}>
              Available Volunteers
            </h2>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <div className="badge badge-green" style={{ fontSize: "0.68rem" }}>
                <span className="pulse-dot" style={{ background: "#10B981" }} />
                {onlineCount} Online
              </div>
              {callLoading && <div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />}
            </div>
          </div>

          {loading ? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="glass-sm" style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", gap: "14px" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "14px", background: "rgba(79,142,247,0.08)", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ height: 14, background: "rgba(79,142,247,0.08)", borderRadius: 4, marginBottom: 8 }} />
                      <div style={{ height: 11, width: "60%", background: "rgba(79,142,247,0.06)", borderRadius: 4 }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {volunteers.map(v => (
                <VolunteerCard key={v.id} v={v} selected={selected}
                  onSelect={setSelected} onCall={handleCall} callLoading={callLoading} />
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="btn-outline" style={{ padding: "10px 28px" }}
              onClick={() => speak("Showing all 328 available volunteers.")}>
              View All 328 Volunteers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

