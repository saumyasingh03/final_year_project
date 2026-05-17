// import React from "react";

// const steps = [
//   {
//     num: "01",
//     icon: "📤",
//     title: "Capture / Upload",
//     desc: "Upload an image or use camera in real-time",
//   },
//   {
//     num: "02",
//     icon: "🤖",
//     title: "AI Detection",
//     desc: "Our AI model detects objects and scenes",
//   },
//   {
//     num: "03",
//     icon: "🔊",
//     title: "Convert to Speech",
//     desc: "Convert the result into human voice",
//   },
//   {
//     num: "04",
//     icon: "💬",
//     title: "User Feedback",
//     desc: "User hears and understands clearly",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section style={{ padding: "48px 40px", maxWidth: "1200px", margin: "0 auto" }}>
//       <div style={{ textAlign: "center", marginBottom: "40px" }}>
//         <div className="badge badge-purple" style={{ marginBottom: "16px", display: "inline-flex" }}>
//           Process
//         </div>
//         <h2
//           style={{
//             fontFamily: "'Orbitron', monospace",
//             fontSize: "2rem",
//             fontWeight: 700,
//             color: "#E8EEFF",
//           }}
//         >
//           How It Works
//         </h2>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//         {steps.map((step, i) => (
//           <div key={step.num} style={{ position: "relative" }}>
//             {/* Connector line */}
//             {i < steps.length - 1 && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "22px",
//                   right: "-10px",
//                   width: "20px",
//                   height: "2px",
//                   background: "linear-gradient(90deg, rgba(79,142,247,0.5), rgba(79,142,247,0.1))",
//                   zIndex: 2,
//                 }}
//               />
//             )}
//             <div
//               className="glass-sm"
//               style={{ padding: "24px 20px", textAlign: "center", height: "100%" }}
//             >
//               <div className="step-circle" style={{ margin: "0 auto 14px" }}>
//                 {step.num}
//               </div>
//               <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{step.icon}</div>
//               <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#E8EEFF", marginBottom: "8px" }}>
//                 {step.title}
//               </div>
//               <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.5)", lineHeight: 1.6 }}>
//                 {step.desc}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";
import { speak } from "../hooks/useVoice";

const steps = [
  {
    num: "01", icon: "📤",
    title: "Capture or Upload",
    desc: "Take a live photo with your camera or upload an existing image from your device.",
    detail: "Supports PNG, JPG, WEBP. Drag & drop or click to select.",
    color: "#4F8EF7",
  },
  {
    num: "02", icon: "🤖",
    title: "AI Analyzes",
    desc: "Our deep-learning model processes the image — detecting objects, faces, colors, or currency notes.",
    detail: "ViT-GPT2 + ResNet50 + KMeans color clustering.",
    color: "#8B5CF6",
  },
  {
    num: "03", icon: "📝",
    title: "Caption Generated",
    desc: "A natural language description is generated in your chosen language — English or Hindi.",
    detail: "Helsinki-NLP translation model for Hindi output.",
    color: "#22D3EE",
  },
  {
    num: "04", icon: "🔊",
    title: "You Hear It",
    desc: "The result is instantly spoken aloud via gTTS audio from the server, or Web Speech API in browser.",
    detail: "Response delivered in under 1.4 seconds.",
    color: "#10B981",
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-label="How VisionVoice works — four step process"
      style={{ padding: "48px 40px 60px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "44px" }}>
        <div className="badge badge-purple" style={{ marginBottom: "16px", display: "inline-flex" }}>
          Process
        </div>
        <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 700, color: "#E8EEFF" }}>
          How It Works
        </h2>
        <p style={{ color: "rgba(232,238,255,0.45)", fontSize: "0.9rem", marginTop: "10px" }}>
          From image to voice — in under 2 seconds
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0", position: "relative" }}>
        {/* Connecting line behind */}
        <div style={{
          position: "absolute", top: "32px", left: "12.5%", right: "12.5%", height: "2px",
          background: "linear-gradient(90deg, #4F8EF7, #8B5CF6, #22D3EE, #10B981)",
          opacity: 0.3, zIndex: 0,
        }} aria-hidden="true" />

        {steps.map((step, i) => (
          <div
            key={step.num}
            style={{ position: "relative", zIndex: 1, padding: "0 10px" }}
            tabIndex={0}
            role="listitem"
            aria-label={`Step ${step.num}: ${step.title}. ${step.desc}`}
            onFocus={() => speak(`Step ${step.num}: ${step.title}. ${step.desc}`)}
          >
            {/* Circle */}
            <div style={{
              width: 54, height: 54, borderRadius: "50%", margin: "0 auto 20px",
              background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Orbitron',monospace", fontWeight: 700, fontSize: "0.9rem", color: "white",
              boxShadow: `0 0 24px ${step.color}55`,
            }} aria-hidden="true">{step.num}</div>

            {/* Card */}
            <div className="glass-sm" style={{ padding: "22px 18px", textAlign: "center", height: "100%" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "12px" }} aria-hidden="true">{step.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#E8EEFF", marginBottom: "10px" }}>{step.title}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.5)", lineHeight: 1.65, marginBottom: "12px" }}>{step.desc}</div>
              <div style={{
                fontSize: "0.7rem", fontFamily: "'JetBrains Mono',monospace",
                color: step.color, borderTop: `1px solid ${step.color}22`, paddingTop: "10px",
              }}>{step.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
