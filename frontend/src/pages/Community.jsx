import React, { useState } from "react";

const posts = [
  { user: "Ramesh K.", avatar: "👨", time: "2 hours ago", title: "VisionVoice changed my life!", content: "I've been using VisionVoice for 3 months now. The accuracy is incredible — it identified my medicine labels perfectly. I can now manage my medication independently!", likes: 47, comments: 12, tag: "Story" },
  { user: "Priya S.", avatar: "👩", time: "5 hours ago", title: "Volunteer Experience — So rewarding", content: "Just completed my 50th video call as a volunteer. Every call is a new learning experience. The platform makes it so easy to connect and help.", likes: 31, comments: 8, tag: "Volunteer" },
  { user: "Anjali M.", avatar: "👩", time: "1 day ago", title: "Hindi support is excellent 🇮🇳", content: "The Hindi text-to-speech quality is amazing. My grandmother can now use it without any help. Thank you VisionVoice team for prioritizing Indian languages!", likes: 89, comments: 24, tag: "Feedback" },
  { user: "Suresh P.", avatar: "👨", time: "2 days ago", title: "Feature request: OCR for handwriting", content: "Would love to see handwriting recognition added. Many important documents like prescriptions are handwritten. This would be a game-changer!", likes: 56, comments: 19, tag: "Feature Request" },
];

const tagColors = {
  "Story": "badge-blue",
  "Volunteer": "badge-green",
  "Feedback": "badge-purple",
  "Feature Request": "badge-blue",
};

const leaderboard = [
  { name: "Rahul Sharma", calls: 56, badge: "🏆", rank: 1 },
  { name: "Kavita Joshi", calls: 61, badge: "🥈", rank: 2 },
  { name: "Suresh Patel", calls: 52, badge: "🥉", rank: 3 },
  { name: "Anjali Mehta", calls: 43, badge: "🎖", rank: 4 },
  { name: "Priya Verma", calls: 38, badge: "🎖", rank: 5 },
];

export default function Community() {
  const [liked, setLiked] = useState({});

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header */}
      <section style={{ padding: "64px 40px 32px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <div className="badge badge-purple" style={{ marginBottom: "20px", display: "inline-flex" }}>
          Community Hub
        </div>
        <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.4rem", fontWeight: 900, color: "#E8EEFF", marginBottom: "16px", lineHeight: 1.15 }}>
          Our{" "}
          <span style={{ background: "linear-gradient(135deg,#8B5CF6,#4F8EF7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Community
          </span>
        </h1>
        <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
          Stories, feedback, and conversations from our growing community of users and volunteers.
        </p>
      </section>

      {/* Layout: posts left, leaderboard right */}
      <section style={{ padding: "0 40px", maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px" }}>
        {/* Posts */}
        <div>
          {/* Post input */}
          <div className="glass" style={{ padding: "20px 24px", marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "12px",
                background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0,
              }}>👤</div>
              <div style={{
                flex: 1, padding: "12px 16px", borderRadius: "10px",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(232,238,255,0.3)", fontSize: "0.88rem", cursor: "text",
              }}>Share your VisionVoice experience...</div>
              <button className="btn-primary" style={{ padding: "10px 18px", fontSize: "0.82rem", flexShrink: 0 }}>Post</button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post, i) => (
            <div key={i} className="glass" style={{ padding: "24px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "12px",
                    background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
                  }}>{post.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#E8EEFF" }}>{post.user}</div>
                    <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{post.time}</div>
                  </div>
                </div>
                <span className={`badge ${tagColors[post.tag]}`} style={{ fontSize: "0.7rem" }}>{post.tag}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#E8EEFF", marginBottom: "10px" }}>{post.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "rgba(232,238,255,0.55)", lineHeight: 1.75, marginBottom: "16px" }}>{post.content}</p>
              <div style={{ display: "flex", gap: "16px" }}>
                <button onClick={() => setLiked(l => ({ ...l, [i]: !l[i] }))} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: liked[i] ? "#4F8EF7" : "rgba(232,238,255,0.4)",
                  fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "6px",
                  transition: "color 0.2s",
                }}>
                  {liked[i] ? "❤" : "🤍"} {post.likes + (liked[i] ? 1 : 0)} Likes
                </button>
                <button style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "rgba(232,238,255,0.4)", fontSize: "0.82rem",
                  display: "flex", alignItems: "center", gap: "6px",
                }}>
                  💬 {post.comments} Comments
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar: Leaderboard */}
        <div>
          <div className="glass" style={{ padding: "24px", marginBottom: "20px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "20px", fontSize: "0.95rem" }}>
              🏆 Top Volunteers
            </div>
            {leaderboard.map((v) => (
              <div key={v.name} style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "12px 0",
                borderBottom: v.rank < 5 ? "1px solid rgba(79,142,247,0.08)" : "none",
              }}>
                <div style={{ fontSize: "1.3rem", width: "28px", textAlign: "center" }}>{v.badge}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E8EEFF" }}>{v.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)" }}>{v.calls} calls completed</div>
                </div>
              </div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="glass" style={{ padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🤝</div>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "8px" }}>Become a Volunteer</div>
            <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)", marginBottom: "16px", lineHeight: 1.6 }}>
              Help visually impaired users and make a real difference
            </div>
            <button className="btn-primary" style={{ width: "100%" }}>Join Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
