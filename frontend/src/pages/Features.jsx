// import React from "react";

// const features = [
//   {
//     icon: "🧠",
//     title: "AI-Powered Image Recognition",
//     desc: "State-of-the-art deep learning model detects objects, people, scenes, text, and emotions from any image with industry-leading accuracy.",
//     badge: "Core Feature",
//     badgeClass: "badge-blue",
//     stats: "98.2% accuracy",
//   },
//   {
//     icon: "🔊",
//     title: "Real-Time Voice Feedback",
//     desc: "Instantly converts AI-generated captions into natural speech using high-quality text-to-speech engines. Hear results within 1.4 seconds.",
//     badge: "Accessibility",
//     badgeClass: "badge-green",
//     stats: "<1.4s response",
//   },
//   {
//     icon: "🌐",
//     title: "Multi-Language Support",
//     desc: "Supports 12+ languages including Hindi, English, Spanish, French, and more. Automatic language detection for seamless experience.",
//     badge: "Global",
//     badgeClass: "badge-purple",
//     stats: "12+ languages",
//   },
//   {
//     icon: "📷",
//     title: "Live Camera Integration",
//     desc: "Use your device camera in real-time for instant object detection. Capture moments and get instant audio descriptions on the fly.",
//     badge: "Real-time",
//     badgeClass: "badge-blue",
//     stats: "Live stream",
//   },
//   {
//     icon: "🤝",
//     title: "Human Volunteer Network",
//     desc: "Connect with trained volunteers via video call for personalized assistance. Our community of 328+ volunteers is ready to help 24/7.",
//     badge: "Community",
//     badgeClass: "badge-green",
//     stats: "328 volunteers",
//   },
//   {
//     icon: "🔒",
//     title: "Privacy-First Architecture",
//     desc: "Your images are processed and immediately deleted. No data is stored or shared. End-to-end encryption ensures complete privacy.",
//     badge: "Secure",
//     badgeClass: "badge-purple",
//     stats: "100% private",
//   },
//   {
//     icon: "📱",
//     title: "Cross-Device Compatible",
//     desc: "Works seamlessly on mobile, tablet, and desktop. Optimized for screen readers and assistive technologies across all platforms.",
//     badge: "Universal",
//     badgeClass: "badge-blue",
//     stats: "All devices",
//   },
//   {
//     icon: "📊",
//     title: "Admin Dashboard",
//     desc: "Comprehensive analytics for administrators — track users, volunteers, call stats, resolved queries and system performance in real-time.",
//     badge: "Pro",
//     badgeClass: "badge-purple",
//     stats: "Full analytics",
//   },
//   {
//     icon: "🎯",
//     title: "Scene Understanding",
//     desc: "Beyond simple object detection — understands context, spatial relationships, and provides rich descriptive captions like a human would.",
//     badge: "Advanced",
//     badgeClass: "badge-green",
//     stats: "Context-aware",
//   },
// ];

// export default function Features() {
//   return (
//     <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
//       {/* Hero */}
//       <section style={{ padding: "72px 40px 40px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
//         <div className="badge badge-blue fade-up fade-up-1" style={{ marginBottom: "20px", display: "inline-flex" }}>
//           ✦ Full Feature Set
//         </div>
//         <h1 className="fade-up fade-up-2" style={{
//           fontFamily: "'Orbitron', monospace", fontSize: "2.8rem", fontWeight: 900,
//           color: "#E8EEFF", lineHeight: 1.15, marginBottom: "20px",
//         }}>
//           Everything You Need to{" "}
//           <span style={{ background: "linear-gradient(135deg,#4F8EF7,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//             See the World
//           </span>
//         </h1>
//         <p className="fade-up fade-up-3" style={{ color: "rgba(232,238,255,0.55)", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
//           VisionVoice combines cutting-edge AI with a compassionate human volunteer network to empower visually impaired users.
//         </p>
//       </section>

//       {/* Features Grid */}
//       <section style={{ padding: "20px 40px", maxWidth: "1100px", margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
//           {features.map((f, i) => (
//             <div key={f.title} className="glass fade-up" style={{
//               padding: "28px 24px", animationDelay: `${i * 0.07}s`, opacity: 0,
//               transition: "transform 0.3s", cursor: "default",
//             }}
//               onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
//               onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
//             >
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
//                 <div style={{
//                   width: 52, height: 52, borderRadius: "14px",
//                   background: "linear-gradient(135deg,rgba(79,142,247,0.15),rgba(139,92,246,0.15))",
//                   border: "1px solid rgba(79,142,247,0.2)",
//                   display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
//                 }}>{f.icon}</div>
//                 <span className={`badge ${f.badgeClass}`} style={{ fontSize: "0.7rem" }}>{f.badge}</span>
//               </div>
//               <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#E8EEFF", marginBottom: "10px" }}>{f.title}</h3>
//               <p style={{ fontSize: "0.83rem", color: "rgba(232,238,255,0.5)", lineHeight: 1.7, marginBottom: "16px" }}>{f.desc}</p>
//               <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", color: "#4F8EF7" }}>
//                 → {f.stats}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ padding: "60px 40px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
//         <div className="glass" style={{ padding: "48px 40px" }}>
//           <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}></div>
//           <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.5rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "12px" }}>
//             Ready to Experience VisionVoice?
//           </h2>
//           <p style={{ color: "rgba(232,238,255,0.5)", fontSize: "0.9rem", marginBottom: "28px" }}>
//             Join thousands of users who trust VisionVoice every day.
//           </p>
//           <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
//             <button className="btn-primary" style={{ padding: "12px 28px" }}>Start Free Demo</button>
//             <button className="btn-outline" style={{ padding: "12px 28px" }}>Learn More</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import { speak } from "../hooks/useVoice";

const features = [
  {
    icon: "🖼",
    title: "Image Captioning",
    badge: "Core Feature",
    badgeClass: "badge-blue",
    endpoint: "POST /predict",
    desc: "Upload any image and our ViT-GPT2 model generates a natural language description. Perfect for identifying objects, scenes, and surroundings.",
    useCases: ["Identify objects in a room", "Read surroundings while traveling", "Understand photos sent by family"],
    stats: "98.2% accuracy",
    color: "#4F8EF7",
  },
  {
    icon: "😊",
    title: "Emotion Recognition",
    badge: "Face Analysis",
    badgeClass: "badge-purple",
    endpoint: "POST /recognize",
    desc: "Detect human emotions from facial expressions using a fine-tuned ViT model. Understand the emotional context of any photo or video frame.",
    useCases: ["Read expressions in family photos", "Detect mood during video calls", "Understand social cues"],
    stats: "7 emotions detected",
    color: "#8B5CF6",
  },
  {
    icon: "💵",
    title: "Indian Currency Detection",
    badge: "Financial Aid",
    badgeClass: "badge-green",
    endpoint: "POST /rupee",
    desc: "Instantly identify Indian rupee notes — ₹10, ₹20, ₹50, ₹100, ₹200, ₹500, ₹2000 — using a custom-trained ResNet50 model.",
    useCases: ["Identify cash notes independently", "Verify change received", "Sort currency without help"],
    stats: "7 denominations",
    color: "#10B981",
  },
  {
    icon: "🎨",
    title: "Color Detection",
    badge: "Visual Aid",
    badgeClass: "badge-orange",
    endpoint: "POST /colour",
    desc: "Identify the dominant color of any object or scene using KMeans clustering on image pixels. Results spoken in natural language.",
    useCases: ["Identify clothing colors before dressing", "Know the color of food or objects", "Pick matching items independently"],
    stats: "CSS3 color names",
    color: "#F59E0B",
  },
  {
    icon: "🔊",
    title: "Multi-Language Voice Output",
    badge: "Accessibility",
    badgeClass: "badge-blue",
    endpoint: "gTTS + Web Speech API",
    desc: "Every result is spoken aloud instantly using Google Text-to-Speech (server-side) and Web Speech API (client-side). Supports English and Hindi.",
    useCases: ["Hear results in your native language", "No need to read — just listen", "Works even with screen readers"],
    stats: "English + Hindi",
    color: "#22D3EE",
  },
  {
    icon: "📷",
    title: "Live Camera Capture",
    badge: "Real-time",
    badgeClass: "badge-purple",
    endpoint: "Browser MediaDevices API",
    desc: "Use your device camera in real-time — no app download needed. Capture and analyze in seconds directly from the browser.",
    useCases: ["Point camera at an object to identify it", "Capture live scenes for description", "Works on mobile and desktop"],
    stats: "Instant capture",
    color: "#8B5CF6",
  },
  {
    icon: "🤝",
    title: "Human Volunteer Support",
    badge: "Community",
    badgeClass: "badge-green",
    endpoint: "Video Call Network",
    desc: "When AI isn't enough, connect with trained human volunteers via video call for personalized, real-time visual assistance.",
    useCases: ["Complex navigation help", "Reading handwritten documents", "Assistance in emergencies"],
    stats: "328+ volunteers",
    color: "#10B981",
  },
  {
    icon: "⌨",
    title: "Full Keyboard & Screen Reader Support",
    badge: "WCAG 2.1",
    badgeClass: "badge-blue",
    endpoint: "Built-in Accessibility",
    desc: "Every page is fully navigable by keyboard. Single-key shortcuts (H, F, D, V…), ARIA labels, skip links, and live regions for screen readers.",
    useCases: ["Navigate without a mouse", "Compatible with NVDA, JAWS, VoiceOver", "High contrast and large text modes"],
    stats: "ARIA compliant",
    color: "#4F8EF7",
  },
  {
    icon: "🔒",
    title: "Privacy-First Design",
    badge: "Secure",
    badgeClass: "badge-purple",
    endpoint: "No data stored",
    desc: "Images are processed and immediately discarded. No user data is stored or shared. All communication is over secure channels.",
    useCases: ["Safe to use with personal photos", "No account required for demo", "GDPR-friendly architecture"],
    stats: "Zero data retention",
    color: "#8B5CF6",
  },
];

export default function Features() {
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>

      {/* Header */}
      <section style={{ padding: "72px 40px 40px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <div className="badge badge-blue" style={{ marginBottom: "20px", display: "inline-flex" }}>
          ✦ Full Feature Set
        </div>
        <h1 style={{
          fontFamily: "'Orbitron', monospace", fontSize: "2.8rem", fontWeight: 900,
          color: "#E8EEFF", lineHeight: 1.15, marginBottom: "20px",
        }}>
          Everything You Need to{" "}
          <span style={{
            background: "linear-gradient(135deg,#4F8EF7,#22D3EE)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>See the World</span>
        </h1>
        <p style={{
          color: "rgba(232,238,255,0.55)", fontSize: "1rem",
          maxWidth: "560px", margin: "0 auto", lineHeight: 1.75,
        }}>
          4 real AI-powered analysis modes, live camera, multilingual voice output,
          human volunteer support, and full keyboard accessibility — all in one platform.
        </p>

        {/* Quick stats row */}
        <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "36px", flexWrap: "wrap" }}>
          {[
            { val: "4", label: "AI Models" },
            { val: "2", label: "Languages" },
            { val: "<2s", label: "Response" },
            { val: "328+", label: "Volunteers" },
            { val: "100%", label: "Accessible" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.5rem", fontWeight: 700, color: "#4F8EF7" }}>{s.val}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.45)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section style={{ padding: "0 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass"
              tabIndex={0}
              role="article"
              aria-label={`${f.title}: ${f.desc}`}
              onFocus={() => speak(`${f.title}. ${f.desc}`)}
              style={{
                padding: "28px 24px",
                cursor: "default",
                transition: "transform 0.3s, box-shadow 0.3s",
                animation: `fadeInUp 0.5s ease forwards`,
                animationDelay: `${i * 0.06}s`,
                opacity: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 12px 40px ${f.color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "14px",
                  background: `linear-gradient(135deg,${f.color}22,${f.color}11)`,
                  border: `1px solid ${f.color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
                }} aria-hidden="true">{f.icon}</div>
                <span className={`badge ${f.badgeClass}`} style={{ fontSize: "0.68rem" }}>{f.badge}</span>
              </div>

              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#E8EEFF", marginBottom: "8px" }}>{f.title}</h3>

              {/* Endpoint chip */}
              <div style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem",
                color: f.color, marginBottom: "12px",
                background: `${f.color}12`, border: `1px solid ${f.color}30`,
                borderRadius: "6px", padding: "3px 10px", display: "inline-block",
              }}>{f.endpoint}</div>

              <p style={{ fontSize: "0.82rem", color: "rgba(232,238,255,0.5)", lineHeight: 1.7, marginBottom: "16px" }}>{f.desc}</p>

              {/* Use cases */}
              <div style={{ borderTop: "1px solid rgba(79,142,247,0.1)", paddingTop: "14px" }}>
                <div style={{ fontSize: "0.68rem", color: "rgba(232,238,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                  Use Cases
                </div>
                {f.useCases.map(uc => (
                  <div key={uc} style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "5px" }}>
                    <span style={{ color: f.color, fontSize: "0.7rem", marginTop: "2px", flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.45)" }}>{uc}</span>
                  </div>
                ))}
              </div>

              {/* Stat */}
              <div style={{ marginTop: "14px", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", color: f.color }}>
                ✓ {f.stats}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 40px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <div className="glass" style={{ padding: "48px 40px" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}></div>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.4rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "12px" }}>
            Ready to Experience VisionVoice?
          </h2>
          <p style={{ color: "rgba(232,238,255,0.5)", fontSize: "0.9rem", marginBottom: "28px", lineHeight: 1.7 }}>
            No registration needed. Upload any image and hear AI describe it in seconds.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link to="/#demo">
              <button className="btn-primary" style={{ padding: "13px 28px" }}
                aria-label="Try the live demo now">
                ✨ Try Live Demo
              </button>
            </Link>
            <Link to="/how-it-works">
              <button className="btn-outline" style={{ padding: "13px 28px" }}
                aria-label="Learn how VisionVoice works">
                How It Works →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
