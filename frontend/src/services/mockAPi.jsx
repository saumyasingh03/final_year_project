const delay = (ms = 600) => new Promise(r => setTimeout(r, ms + Math.random() * 300));

// ── Seed data ───────────────────────────────────────────────────────────────
const SEED_USERS = [
  { id: "u1", name: "Ramesh Kumar", email: "ramesh@example.com", password: "demo123", role: "user", avatar: "👨", joined: "2024-08-10", analyses: 34, language: "hi" },
  { id: "u2", name: "Priya Verma",  email: "priya@example.com",  password: "demo123", role: "volunteer", avatar: "👩", joined: "2024-07-22", analyses: 12, language: "en" },
  { id: "admin", name: "Admin",     email: "admin@visionvoice.ai", password: "admin123", role: "admin", avatar: "🛡", joined: "2024-01-01", analyses: 0, language: "en" },
];

const SEED_POSTS = [
  { id: "p1", userId: "u1", userName: "Ramesh Kumar", avatar: "👨", time: "2025-05-22T10:30:00", tag: "Story", title: "VisionVoice changed my life!", content: "I've been using VisionVoice for 3 months. The accuracy is incredible — it identified my medicine labels perfectly. I can now manage my medication independently! The Hindi support makes it even better.", likes: ["u2"], comments: [{ id: "c1", userId: "u2", userName: "Priya Verma", avatar: "👩", text: "So happy to hear this! 🙏", time: "2025-05-22T11:00:00" }] },
  { id: "p2", userId: "u2", userName: "Priya Verma", avatar: "👩", time: "2025-05-21T15:00:00", tag: "Volunteer", title: "50th call milestone reached!", content: "Just completed my 50th video call as a volunteer. Every call is a new experience. The platform makes connecting so seamless. Proud to be part of this mission.", likes: ["u1"], comments: [] },
  { id: "p3", userId: "u1", userName: "Ramesh Kumar", avatar: "👨", time: "2025-05-20T09:00:00", tag: "Feedback", title: "Currency detection is spot on 🇮🇳", content: "Tested the ₹500 and ₹100 note detection multiple times — works flawlessly even with slightly crumpled notes. This is genuinely useful for daily life.", likes: [], comments: [] },
  { id: "p4", userId: "u2", userName: "Priya Verma", avatar: "👩", time: "2025-05-19T14:00:00", tag: "Feature Request", title: "Request: Handwriting OCR", content: "Would love to see handwriting recognition. Prescriptions and notes are often handwritten — this would be a massive upgrade!", likes: ["u1"], comments: [] },
];

const SEED_VOLUNTEERS = [
  { id: "v1", name: "Rahul Sharma",  avatar: "👨", status: "online",  rating: 4.9, calls: 56, specialty: "Object Identification", languages: ["en","hi"] },
  { id: "v2", name: "Priya Verma",   avatar: "👩", status: "online",  rating: 4.8, calls: 43, specialty: "Navigation Help",        languages: ["en","hi"] },
  { id: "v3", name: "Aman Singh",    avatar: "👨", status: "online",  rating: 4.9, calls: 38, specialty: "Text Reading",            languages: ["en"] },
  { id: "v4", name: "Kavita Joshi",  avatar: "👩", status: "busy",    rating: 4.7, calls: 61, specialty: "General Assistance",     languages: ["en","hi"] },
  { id: "v5", name: "Suresh Patel",  avatar: "👨", status: "online",  rating: 4.8, calls: 29, specialty: "Medical Labels",         languages: ["hi"] },
  { id: "v6", name: "Anjali Mehta",  avatar: "👩", status: "offline", rating: 4.6, calls: 52, specialty: "Product Labels",         languages: ["en","hi"] },
  { id: "v7", name: "Ramesh Kumar",  avatar: "👨", status: "online",  rating: 4.9, calls: 34, specialty: "Document Reading",       languages: ["hi"] },
  { id: "v8", name: "Sneha Gupta",   avatar: "👩", status: "online",  rating: 4.7, calls: 27, specialty: "Scene Description",      languages: ["en"] },
];

const ACTIVITY_FEED = [
  { id: "a1", file: "Image_001.jpg",  result: "Chair detected",       time: "2 min ago",  icon: "🪑", userId: "u1" },
  { id: "a2", file: "Camera Scan",    result: "Person detected",      time: "5 min ago",  icon: "🧍", userId: "u2" },
  { id: "a3", file: "Upload_003.png", result: "Bottle detected",      time: "10 min ago", icon: "🍶", userId: "u1" },
  { id: "a4", file: "Image_004.jpg",  result: "Laptop detected",      time: "15 min ago", icon: "💻", userId: "u2" },
  { id: "a5", file: "Rs500_note.jpg", result: "₹500 note identified", time: "22 min ago", icon: "💵", userId: "u1" },
  { id: "a6", file: "Camera Scan",    result: "Happy emotion detected","time": "35 min ago", icon: "😊", userId: "u2" },
];

// ── localStorage helpers ────────────────────────────────────────────────────
const LS = {
  get: (key, fallback) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  set: (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} },
};

function initStore() {
  if (!LS.get("vv_users", null)) LS.set("vv_users", SEED_USERS);
  if (!LS.get("vv_posts", null)) LS.set("vv_posts", SEED_POSTS);
}
initStore();

// ════════════════════════════════════════════════════════════════════════════
// AUTH API
// ════════════════════════════════════════════════════════════════════════════
export const authApi = {
  async login(email, password) {
    await delay(800);
    const users = LS.get("vv_users", SEED_USERS);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid email or password. Try demo: ramesh@example.com / demo123");
    const { password: _, ...safeUser } = user;
    const token = btoa(`${user.id}:${Date.now()}`);
    LS.set("vv_token", token);
    LS.set("vv_current_user", safeUser);
    return { user: safeUser, token };
  },

  async register(name, email, password, role = "user") {
    await delay(900);
    const users = LS.get("vv_users", SEED_USERS);
    if (users.find(u => u.email === email)) throw new Error("Email already registered. Please login.");
    const newUser = {
      id: `u${Date.now()}`, name, email, password, role,
      avatar: ["👨","👩","🧑"][Math.floor(Math.random()*3)],
      joined: new Date().toISOString().split("T")[0],
      analyses: 0, language: "en",
    };
    LS.set("vv_users", [...users, newUser]);
    const { password: _, ...safeUser } = newUser;
    const token = btoa(`${newUser.id}:${Date.now()}`);
    LS.set("vv_token", token);
    LS.set("vv_current_user", safeUser);
    return { user: safeUser, token };
  },

  logout() {
    LS.set("vv_token", null);
    LS.set("vv_current_user", null);
  },

  getCurrentUser() {
    return LS.get("vv_current_user", null);
  },

  isAuthenticated() {
    return !!LS.get("vv_token", null);
  },
};

// ════════════════════════════════════════════════════════════════════════════
// DASHBOARD API
// ════════════════════════════════════════════════════════════════════════════
export const dashboardApi = {
  async getStats() {
    await delay(500);
    const users = LS.get("vv_users", SEED_USERS);
    const posts = LS.get("vv_posts", SEED_POSTS);
    const analyses = users.reduce((sum, u) => sum + (u.analyses || 0), 0);
    return {
      totalUsers:      users.filter(u => u.role !== "admin").length,
      totalVolunteers: users.filter(u => u.role === "volunteer").length,
      totalCalls:      Math.max(567, analyses * 2),
      resolvedQueries: Math.max(892, analyses * 3),
      totalPosts:      posts.length,
      growth: { users: "+12.5%", volunteers: "+8.3%", calls: "+15.7%", queries: "+10.2%" },
    };
  },

  async getChartData() {
    await delay(400);
    const base = [60, 75, 55, 90, 110, 95, 130];
    return {
      userGrowth: ["1 May","8 May","15 May","22 May","29 May","5 Jun","12 Jun"].map((label, i) => ({
        label, value: base[i] + Math.floor(Math.random() * 15),
      })),
      callsBreakdown: { completed: 67, cancelled: 18, missed: 15 },
      moduleUsage: [
        { label: "Image Caption", value: 48, color: "#4F8EF7" },
        { label: "Emotion",       value: 22, color: "#8B5CF6" },
        { label: "Currency",      value: 18, color: "#10B981" },
        { label: "Color",         value: 12, color: "#F59E0B" },
      ],
    };
  },

  async getActivityFeed() {
    await delay(350);
    const stored = LS.get("vv_activity", ACTIVITY_FEED);
    return stored.slice(0, 8);
  },

  addActivity(item) {
    const feed = LS.get("vv_activity", ACTIVITY_FEED);
    const newFeed = [{ id: `a${Date.now()}`, time: "just now", ...item }, ...feed].slice(0, 20);
    LS.set("vv_activity", newFeed);
  },
};

// ════════════════════════════════════════════════════════════════════════════
// COMMUNITY API
// ════════════════════════════════════════════════════════════════════════════
export const communityApi = {
  async getPosts(filter = "all") {
    await delay(600);
    let posts = LS.get("vv_posts", SEED_POSTS);
    if (filter !== "all") posts = posts.filter(p => p.tag === filter);
    return posts.sort((a, b) => new Date(b.time) - new Date(a.time));
  },

  async createPost(userId, userName, avatar, tag, title, content) {
    await delay(700);
    const posts = LS.get("vv_posts", SEED_POSTS);
    const newPost = {
      id: `p${Date.now()}`, userId, userName, avatar, tag, title, content,
      time: new Date().toISOString(), likes: [], comments: [],
    };
    LS.set("vv_posts", [newPost, ...posts]);
    return newPost;
  },

  async toggleLike(postId, userId) {
    await delay(200);
    const posts = LS.get("vv_posts", SEED_POSTS);
    const updated = posts.map(p => {
      if (p.id !== postId) return p;
      const liked = p.likes.includes(userId);
      return { ...p, likes: liked ? p.likes.filter(id => id !== userId) : [...p.likes, userId] };
    });
    LS.set("vv_posts", updated);
    return updated.find(p => p.id === postId);
  },

  async addComment(postId, userId, userName, avatar, text) {
    await delay(400);
    const posts = LS.get("vv_posts", SEED_POSTS);
    const comment = { id: `c${Date.now()}`, userId, userName, avatar, text, time: new Date().toISOString() };
    const updated = posts.map(p =>
      p.id === postId ? { ...p, comments: [...p.comments, comment] } : p
    );
    LS.set("vv_posts", updated);
    return comment;
  },

  async deletePost(postId, userId) {
    await delay(300);
    const posts = LS.get("vv_posts", SEED_POSTS);
    const post = posts.find(p => p.id === postId);
    if (post?.userId !== userId) throw new Error("Unauthorized");
    LS.set("vv_posts", posts.filter(p => p.id !== postId));
    return true;
  },

  async getLeaderboard() {
    await delay(400);
    return SEED_VOLUNTEERS.sort((a, b) => b.calls - a.calls).slice(0, 5);
  },
};

// ════════════════════════════════════════════════════════════════════════════
// VOLUNTEERS API
// ════════════════════════════════════════════════════════════════════════════
export const volunteersApi = {
  async getAll() {
    await delay(500);
    // Randomly flicker statuses to feel "live"
    return SEED_VOLUNTEERS.map(v => ({
      ...v,
      status: v.status === "offline" ? "offline" :
              Math.random() > 0.15 ? v.status : (v.status === "online" ? "busy" : "online"),
    }));
  },
};
