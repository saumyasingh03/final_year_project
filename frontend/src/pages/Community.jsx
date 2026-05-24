// import React, { useState } from "react";

// const posts = [
//   { user: "Ramesh K.", avatar: "👨", time: "2 hours ago", title: "VisionVoice changed my life!", content: "I've been using VisionVoice for 3 months now. The accuracy is incredible — it identified my medicine labels perfectly. I can now manage my medication independently!", likes: 47, comments: 12, tag: "Story" },
//   { user: "Priya S.", avatar: "👩", time: "5 hours ago", title: "Volunteer Experience — So rewarding", content: "Just completed my 50th video call as a volunteer. Every call is a new learning experience. The platform makes it so easy to connect and help.", likes: 31, comments: 8, tag: "Volunteer" },
//   { user: "Anjali M.", avatar: "👩", time: "1 day ago", title: "Hindi support is excellent 🇮🇳", content: "The Hindi text-to-speech quality is amazing. My grandmother can now use it without any help. Thank you VisionVoice team for prioritizing Indian languages!", likes: 89, comments: 24, tag: "Feedback" },
//   { user: "Suresh P.", avatar: "👨", time: "2 days ago", title: "Feature request: OCR for handwriting", content: "Would love to see handwriting recognition added. Many important documents like prescriptions are handwritten. This would be a game-changer!", likes: 56, comments: 19, tag: "Feature Request" },
// ];

// const tagColors = {
//   "Story": "badge-blue",
//   "Volunteer": "badge-green",
//   "Feedback": "badge-purple",
//   "Feature Request": "badge-blue",
// };

// const leaderboard = [
//   { name: "Rahul Sharma", calls: 56, badge: "🏆", rank: 1 },
//   { name: "Kavita Joshi", calls: 61, badge: "🥈", rank: 2 },
//   { name: "Suresh Patel", calls: 52, badge: "🥉", rank: 3 },
//   { name: "Anjali Mehta", calls: 43, badge: "🎖", rank: 4 },
//   { name: "Priya Verma", calls: 38, badge: "🎖", rank: 5 },
// ];

// export default function Community() {
//   const [liked, setLiked] = useState({});

//   return (
//     <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
//       {/* Header */}
//       <section style={{ padding: "64px 40px 32px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
//         <div className="badge badge-purple" style={{ marginBottom: "20px", display: "inline-flex" }}>
//           Community Hub
//         </div>
//         <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.4rem", fontWeight: 900, color: "#E8EEFF", marginBottom: "16px", lineHeight: 1.15 }}>
//           Our{" "}
//           <span style={{ background: "linear-gradient(135deg,#8B5CF6,#4F8EF7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//             Community
//           </span>
//         </h1>
//         <p style={{ color: "rgba(232,238,255,0.55)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
//           Stories, feedback, and conversations from our growing community of users and volunteers.
//         </p>
//       </section>

//       {/* Layout: posts left, leaderboard right */}
//       <section style={{ padding: "0 40px", maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px" }}>
//         {/* Posts */}
//         <div>
//           {/* Post input */}
//           <div className="glass" style={{ padding: "20px 24px", marginBottom: "20px" }}>
//             <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
//               <div style={{
//                 width: 40, height: 40, borderRadius: "12px",
//                 background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.25)",
//                 display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0,
//               }}>👤</div>
//               <div style={{
//                 flex: 1, padding: "12px 16px", borderRadius: "10px",
//                 background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
//                 color: "rgba(232,238,255,0.3)", fontSize: "0.88rem", cursor: "text",
//               }}>Share your VisionVoice experience...</div>
//               <button className="btn-primary" style={{ padding: "10px 18px", fontSize: "0.82rem", flexShrink: 0 }}>Post</button>
//             </div>
//           </div>

//           {/* Posts */}
//           {posts.map((post, i) => (
//             <div key={i} className="glass" style={{ padding: "24px", marginBottom: "16px" }}>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
//                 <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
//                   <div style={{
//                     width: 40, height: 40, borderRadius: "12px",
//                     background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)",
//                     display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
//                   }}>{post.avatar}</div>
//                   <div>
//                     <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#E8EEFF" }}>{post.user}</div>
//                     <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{post.time}</div>
//                   </div>
//                 </div>
//                 <span className={`badge ${tagColors[post.tag]}`} style={{ fontSize: "0.7rem" }}>{post.tag}</span>
//               </div>
//               <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#E8EEFF", marginBottom: "10px" }}>{post.title}</h3>
//               <p style={{ fontSize: "0.85rem", color: "rgba(232,238,255,0.55)", lineHeight: 1.75, marginBottom: "16px" }}>{post.content}</p>
//               <div style={{ display: "flex", gap: "16px" }}>
//                 <button onClick={() => setLiked(l => ({ ...l, [i]: !l[i] }))} style={{
//                   background: "none", border: "none", cursor: "pointer",
//                   color: liked[i] ? "#4F8EF7" : "rgba(232,238,255,0.4)",
//                   fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "6px",
//                   transition: "color 0.2s",
//                 }}>
//                   {liked[i] ? "❤" : "🤍"} {post.likes + (liked[i] ? 1 : 0)} Likes
//                 </button>
//                 <button style={{
//                   background: "none", border: "none", cursor: "pointer",
//                   color: "rgba(232,238,255,0.4)", fontSize: "0.82rem",
//                   display: "flex", alignItems: "center", gap: "6px",
//                 }}>
//                   💬 {post.comments} Comments
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Sidebar: Leaderboard */}
//         <div>
//           <div className="glass" style={{ padding: "24px", marginBottom: "20px" }}>
//             <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "20px", fontSize: "0.95rem" }}>
//               🏆 Top Volunteers
//             </div>
//             {leaderboard.map((v) => (
//               <div key={v.name} style={{
//                 display: "flex", alignItems: "center", gap: "12px",
//                 padding: "12px 0",
//                 borderBottom: v.rank < 5 ? "1px solid rgba(79,142,247,0.08)" : "none",
//               }}>
//                 <div style={{ fontSize: "1.3rem", width: "28px", textAlign: "center" }}>{v.badge}</div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E8EEFF" }}>{v.name}</div>
//                   <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)" }}>{v.calls} calls completed</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Join CTA */}
//           <div className="glass" style={{ padding: "24px", textAlign: "center" }}>
//             <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🤝</div>
//             <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "8px" }}>Become a Volunteer</div>
//             <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)", marginBottom: "16px", lineHeight: 1.6 }}>
//               Help visually impaired users and make a real difference
//             </div>
//             <button className="btn-primary" style={{ width: "100%" }}>Join Now</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// src/pages/Community.jsx
import React, { useState, useEffect, useRef } from "react";
import { communityApi } from "../services/mockApi";
import { useAuth } from "../context/AuthContext";
import { speak } from "../hooks/useVoice";

const TAG_COLORS = {
  "Story":           "badge-blue",
  "Volunteer":       "badge-green",
  "Feedback":        "badge-purple",
  "Feature Request": "badge-blue",
  "Question":        "badge-orange",
};
const TAGS = ["all", "Story", "Volunteer", "Feedback", "Feature Request", "Question"];

// ── Skeleton ─────────────────────────────────────────────────────────────────
function Skeleton({ w = "100%", h = 20, radius = 8, style = {} }) {
  return <div style={{ width: w, height: h, borderRadius: radius,
    background: "linear-gradient(90deg,rgba(79,142,247,0.08) 25%,rgba(79,142,247,0.15) 50%,rgba(79,142,247,0.08) 75%)",
    backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite", ...style }} />;
}

// ── Time ago ─────────────────────────────────────────────────────────────────
function timeAgo(isoString) {
  const diff = (Date.now() - new Date(isoString)) / 1000;
  if (diff < 60)   return "just now";
  if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
  return `${Math.floor(diff/86400)}d ago`;
}

// ── Post Card ────────────────────────────────────────────────────────────────
function PostCard({ post, currentUser, onLike, onComment, onDelete }) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText]   = useState("");
  const [submitting, setSubmitting]     = useState(false);
  const [likeAnim, setLikeAnim]         = useState(false);
  const liked = currentUser && post.likes.includes(currentUser.id);

  const handleLike = async () => {
    if (!currentUser) { speak("Please login to like posts."); return; }
    setLikeAnim(true);
    setTimeout(() => setLikeAnim(false), 300);
    await onLike(post.id);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!currentUser) { speak("Please login to comment."); return; }
    if (!commentText.trim()) return;
    setSubmitting(true);
    await onComment(post.id, commentText.trim());
    setCommentText("");
    setSubmitting(false);
  };

  return (
    <div className="glass" style={{ padding: "24px", marginBottom: "16px" }}
      role="article" aria-label={`Post by ${post.userName}: ${post.title}`}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div style={{ width: 42, height: 42, borderRadius: "12px", background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
            {post.avatar}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#E8EEFF" }}>{post.userName}</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{timeAgo(post.time)}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span className={`badge ${TAG_COLORS[post.tag] || "badge-blue"}`} style={{ fontSize: "0.68rem" }}>{post.tag}</span>
          {currentUser?.id === post.userId && (
            <button onClick={() => onDelete(post.id)} aria-label="Delete post"
              style={{ background: "none", border: "none", color: "rgba(248,113,113,0.5)", cursor: "pointer", fontSize: "0.85rem", padding: "2px 6px" }}>✕</button>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 style={{ fontWeight: 700, fontSize: "0.97rem", color: "#E8EEFF", marginBottom: "10px" }}>{post.title}</h3>
      <p style={{ fontSize: "0.85rem", color: "rgba(232,238,255,0.55)", lineHeight: 1.75, marginBottom: "16px" }}>{post.content}</p>

      {/* Actions */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <button onClick={handleLike}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: liked ? "#F87171" : "rgba(232,238,255,0.4)",
            fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "6px",
            transition: "all 0.2s",
            transform: likeAnim ? "scale(1.3)" : "scale(1)",
          }} aria-label={liked ? "Unlike post" : "Like post"}>
          {liked ? "❤" : "🤍"} {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </button>

        <button onClick={() => setShowComments(v => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(232,238,255,0.4)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "6px" }}
          aria-expanded={showComments} aria-label="Toggle comments">
          💬 {post.comments.length} {post.comments.length === 1 ? "Comment" : "Comments"}
        </button>
      </div>

      {/* Comments section */}
      {showComments && (
        <div style={{ marginTop: "16px", borderTop: "1px solid rgba(79,142,247,0.1)", paddingTop: "16px" }}>
          {post.comments.length === 0 && (
            <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.3)", marginBottom: "12px", textAlign: "center" }}>
              No comments yet. Be the first!
            </div>
          )}
          {post.comments.map(c => (
            <div key={c.id} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: 30, height: 30, borderRadius: "8px", background: "rgba(79,142,247,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                {c.avatar}
              </div>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "10px 14px" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#E8EEFF" }}>{c.userName}</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(232,238,255,0.3)" }}>{timeAgo(c.time)}</span>
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(232,238,255,0.6)" }}>{c.text}</div>
              </div>
            </div>
          ))}

          {/* Comment input */}
          {currentUser ? (
            <form onSubmit={handleComment} style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              <input
                value={commentText} onChange={e => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                aria-label="Write a comment"
                style={{
                  flex: 1, padding: "10px 14px", borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(79,142,247,0.2)",
                  color: "#E8EEFF", fontSize: "0.85rem", fontFamily: "'Syne',sans-serif", outline: "none",
                }}
              />
              <button type="submit" className="btn-primary"
                disabled={submitting || !commentText.trim()}
                style={{ padding: "10px 16px", fontSize: "0.82rem", opacity: submitting ? 0.7 : 1 }}>
                {submitting ? "..." : "Post"}
              </button>
            </form>
          ) : (
            <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.35)", textAlign: "center", marginTop: "8px" }}>
              <a href="/login" style={{ color: "#4F8EF7" }}>Login</a> to comment
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Create Post Modal ────────────────────────────────────────────────────────
function CreatePostModal({ onClose, onPost, user }) {
  const [form, setForm] = useState({ tag: "Story", title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) { setError("Title and content are required."); return; }
    setLoading(true);
    try {
      await onPost(form.tag, form.title.trim(), form.content.trim());
      onClose();
    } catch { setError("Failed to post. Try again."); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", zIndex: 9998, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="glass" style={{ width: "100%", maxWidth: "560px", padding: "32px" }} role="dialog" aria-label="Create new post">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.1rem", fontWeight: 700, color: "#E8EEFF" }}>Create Post</h2>
          <button onClick={onClose} aria-label="Close modal"
            style={{ background: "none", border: "none", color: "rgba(232,238,255,0.4)", cursor: "pointer", fontSize: "1.3rem" }}>✕</button>
        </div>

        {error && <div style={{ marginBottom: "16px", padding: "10px 14px", borderRadius: "8px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171", fontSize: "0.82rem" }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Tag selector */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "0.75rem", color: "rgba(232,238,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>Category</label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Story","Volunteer","Feedback","Feature Request","Question"].map(t => (
                <button key={t} type="button"
                  onClick={() => setForm(f => ({ ...f, tag: t }))}
                  style={{
                    padding: "6px 14px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer",
                    border: `1px solid ${form.tag === t ? "#4F8EF7" : "rgba(79,142,247,0.2)"}`,
                    background: form.tag === t ? "rgba(79,142,247,0.15)" : "transparent",
                    color: form.tag === t ? "#4F8EF7" : "rgba(232,238,255,0.5)",
                    transition: "all 0.2s",
                  }}>{t}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "14px" }}>
            <label style={{ display: "block", fontSize: "0.75rem", color: "rgba(232,238,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>Title</label>
            <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="What's your post about?"
              style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(79,142,247,0.2)", color: "#E8EEFF", fontSize: "0.9rem", fontFamily: "'Syne',sans-serif", outline: "none" }} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "0.75rem", color: "rgba(232,238,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>Content</label>
            <textarea value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
              placeholder="Share your experience, feedback, or feature request..."
              rows={4}
              style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(79,142,247,0.2)", color: "#E8EEFF", fontSize: "0.9rem", fontFamily: "'Syne',sans-serif", outline: "none", resize: "vertical" }} />
          </div>

          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <button type="button" className="btn-outline" style={{ padding: "10px 20px" }} onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary" disabled={loading} style={{ padding: "10px 24px", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Posting..." : "✦ Publish Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



export default function Community() {
  const { user } = useAuth();
  const [posts, setPosts]           = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [filter, setFilter]         = useState("all");
  const [loading, setLoading]       = useState(true);
  const [showModal, setShowModal]   = useState(false);

  const loadPosts = async (f = filter) => {
    setLoading(true);
    try {
      const [p, l] = await Promise.all([
        communityApi.getPosts(f),
        communityApi.getLeaderboard(),
      ]);
      setPosts(p); setLeaderboard(l);
    } finally { setLoading(false); }
  };

  useEffect(() => { loadPosts(); }, []);

  const handleFilter = (f) => { setFilter(f); loadPosts(f); };

  const handleLike = async (postId) => {
    if (!user) return;
    const updated = await communityApi.toggleLike(postId, user.id);
    setPosts(ps => ps.map(p => p.id === postId ? updated : p));
  };

  const handleComment = async (postId, text) => {
    if (!user) return;
    const comment = await communityApi.addComment(postId, user.id, user.name, user.avatar, text);
    setPosts(ps => ps.map(p => p.id === postId ? { ...p, comments: [...p.comments, comment] } : p));
  };

  const handleDelete = async (postId) => {
    if (!user) return;
    await communityApi.deletePost(postId, user.id);
    setPosts(ps => ps.filter(p => p.id !== postId));
    speak("Post deleted.");
  };

  const handlePost = async (tag, title, content) => {
    if (!user) return;
    const newPost = await communityApi.createPost(user.id, user.name, user.avatar, tag, title, content);
    setPosts(ps => [newPost, ...ps]);
    speak("Post published successfully!");
  };

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
      {showModal && <CreatePostModal onClose={() => setShowModal(false)} onPost={handlePost} user={user} />}

      {/* Header */}
      <section style={{ padding: "64px 40px 32px", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <div className="badge badge-purple" style={{ marginBottom: "20px", display: "inline-flex" }}>Community Hub</div>
        <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.2rem", fontWeight: 900, color: "#E8EEFF", marginBottom: "16px", lineHeight: 1.15 }}>
          Our{" "}
          <span style={{ background: "linear-gradient(135deg,#8B5CF6,#4F8EF7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Community</span>
        </h1>
        <p style={{ color: "rgba(232,238,255,0.5)", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto" }}>
          Stories, feedback, and conversations from {posts.length + 40}+ members worldwide.
        </p>
      </section>

      <section style={{ padding: "0 40px", maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px" }}>

        {/* Left — Posts */}
        <div>
          {/* Filter + New Post bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {TAGS.map(t => (
                <button key={t} onClick={() => handleFilter(t)}
                  style={{
                    padding: "6px 14px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer",
                    border: `1px solid ${filter === t ? "#4F8EF7" : "rgba(79,142,247,0.2)"}`,
                    background: filter === t ? "rgba(79,142,247,0.15)" : "transparent",
                    color: filter === t ? "#4F8EF7" : "rgba(232,238,255,0.5)",
                    transition: "all 0.2s", textTransform: "capitalize",
                  }}>
                  {t === "all" ? "All Posts" : t}
                </button>
              ))}
            </div>
            {user ? (
              <button className="btn-primary" style={{ padding: "8px 18px", fontSize: "0.82rem" }}
                onClick={() => setShowModal(true)} aria-label="Create new post">
                ✦ New Post
              </button>
            ) : (
              <a href="/login">
                <button className="btn-outline" style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
                  Login to post
                </button>
              </a>
            )}
          </div>

          {/* Posts */}
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="glass" style={{ padding: "24px", marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
                  <Skeleton w={42} h={42} radius={12} style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <Skeleton w="40%" h={14} radius={4} style={{ marginBottom: 8 }} />
                    <Skeleton w="25%" h={11} radius={4} />
                  </div>
                </div>
                <Skeleton w="70%" h={16} radius={4} style={{ marginBottom: 12 }} />
                <Skeleton h={60} radius={6} style={{ marginBottom: 14 }} />
                <div style={{ display: "flex", gap: "16px" }}>
                  <Skeleton w={60} h={14} radius={4} />
                  <Skeleton w={70} h={14} radius={4} />
                </div>
              </div>
            ))
          ) : posts.length === 0 ? (
            <div className="glass" style={{ padding: "48px", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>📭</div>
              <div style={{ color: "#E8EEFF", fontWeight: 700, marginBottom: "8px" }}>No posts yet</div>
              <div style={{ color: "rgba(232,238,255,0.4)", fontSize: "0.85rem" }}>Be the first to share your experience!</div>
            </div>
          ) : posts.map(post => (
            <PostCard key={post.id} post={post} currentUser={user}
              onLike={handleLike} onComment={handleComment} onDelete={handleDelete} />
          ))}
        </div>

        {/* Right sidebar */}
        <div>
          {/* Leaderboard */}
          <div className="glass" style={{ padding: "24px", marginBottom: "16px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "20px", fontSize: "0.95rem" }}>🏆 Top Volunteers</div>
            {leaderboard.map((v, i) => (
              <div key={v.id} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderBottom: i < 4 ? "1px solid rgba(79,142,247,0.07)" : "none" }}>
                <div style={{ fontSize: "1.2rem", width: 28, textAlign: "center", flexShrink: 0 }}>
                  {["🏆","🥈","🥉","🎖","🎖"][i]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E8EEFF" }}>{v.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(232,238,255,0.4)", marginTop: "1px" }}>{v.calls} calls • ⭐ {v.rating}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="glass" style={{ padding: "24px", marginBottom: "16px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "16px", fontSize: "0.95rem" }}>📊 Community Stats</div>
            {[
              { label: "Total Members", val: "1,245" },
              { label: "Posts This Week", val: String(posts.length + 7) },
              { label: "Active Volunteers", val: "328" },
              { label: "Countries Reached", val: "24" },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(79,142,247,0.07)" }}>
                <span style={{ fontSize: "0.82rem", color: "rgba(232,238,255,0.5)" }}>{s.label}</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#4F8EF7", fontFamily: "'JetBrains Mono',monospace" }}>{s.val}</span>
              </div>
            ))}
          </div>

          {/* Volunteer CTA */}
          <div className="glass" style={{ padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🤝</div>
            <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "8px" }}>Become a Volunteer</div>
            <div style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.45)", marginBottom: "16px", lineHeight: 1.6 }}>
              Help visually impaired users and make a real difference
            </div>
            <a href="/register" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{ width: "100%" }}>Join Now →</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
