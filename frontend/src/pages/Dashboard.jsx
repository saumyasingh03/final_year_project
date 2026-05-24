// import React, { useState } from "react";

// const stats = [
//   { label: "Total Users", value: "1,245", change: "+12.5%", up: true, icon: "👥" },
//   { label: "Total Volunteers", value: "328", change: "+8.3%", up: true, icon: "🤝" },
//   { label: "Total Calls", value: "567", change: "+15.7%", up: true, icon: "📞" },
//   { label: "Resolved Queries", value: "892", change: "+10.2%", up: true, icon: "✅" },
// ];

// const recentActivity = [
//   { file: "Image_001.jpg", result: "Chair detected", time: "2 min ago", icon: "🪑" },
//   { file: "Camera Scan", result: "Person detected", time: "5 min ago", icon: "🧍" },
//   { file: "Upload_003.png", result: "Bottle detected", time: "10 min ago", icon: "🍶" },
//   { file: "Image_004.jpg", result: "Laptop detected", time: "15 min ago", icon: "💻" },
//   { file: "Image_005.jpg", result: "Book detected", time: "22 min ago", icon: "📚" },
//   { file: "Camera Scan", result: "Car detected", time: "35 min ago", icon: "🚗" },
// ];

// const sideLinks = [
//   { icon: "📊", label: "Dashboard", active: true },
//   { icon: "👥", label: "Users" },
//   { icon: "🤝", label: "Volunteers" },
//   { icon: "📞", label: "Video Calls" },
//   { icon: "📈", label: "Reports" },
//   { icon: "💬", label: "Feedback" },
//   { icon: "⚙", label: "Settings" },
//   { icon: "🚪", label: "Logout" },
// ];

// // Simple bar chart using divs
// const chartData = [
//   { label: "1 May", val: 60 }, { label: "8 May", val: 75 }, { label: "15 May", val: 55 },
//   { label: "22 May", val: 90 }, { label: "29 May", val: 110 },
// ];

// export default function Dashboard() {
//   const [activeLink, setActiveLink] = useState("Dashboard");

//   return (
//     <div style={{ minHeight: "100vh", display: "flex" }}>
//       {/* Sidebar */}
//       <aside style={{
//         width: "220px", flexShrink: 0,
//         borderRight: "1px solid rgba(79,142,247,0.12)",
//         padding: "28px 16px",
//         background: "rgba(5,7,26,0.5)",
//       }}>
//         <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.75rem", color: "rgba(232,238,255,0.35)", letterSpacing: "0.08em", marginBottom: "16px", paddingLeft: "8px" }}>
//           NAVIGATION
//         </div>
//         {sideLinks.map((l) => {
//           const active = activeLink === l.label;
//           return (
//             <div key={l.label} onClick={() => setActiveLink(l.label)} style={{
//               display: "flex", alignItems: "center", gap: "10px",
//               padding: "10px 12px", borderRadius: "10px", cursor: "pointer",
//               marginBottom: "4px",
//               background: active ? "rgba(79,142,247,0.12)" : "transparent",
//               border: active ? "1px solid rgba(79,142,247,0.25)" : "1px solid transparent",
//               color: active ? "#4F8EF7" : "rgba(232,238,255,0.55)",
//               fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s",
//             }}
//               onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(79,142,247,0.05)"; }}
//               onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
//             >
//               <span>{l.icon}</span>{l.label}
//             </div>
//           );
//         })}
//       </aside>

//       {/* Main */}
//       <main style={{ flex: 1, padding: "32px 36px", overflowY: "auto" }}>
//         {/* Header */}
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
//           <div>
//             <div className="badge badge-blue" style={{ marginBottom: "8px" }}>Admin Panel</div>
//             <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.6rem", fontWeight: 700, color: "#E8EEFF" }}>
//               Admin Dashboard
//             </h1>
//           </div>
//           <div style={{
//             padding: "8px 16px", borderRadius: "10px",
//             background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)",
//             color: "rgba(232,238,255,0.6)", fontSize: "0.8rem",
//             fontFamily: "'JetBrains Mono',monospace",
//           }}>
//             Last 30 Days ▾
//           </div>
//         </div>

//         {/* Stats */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "24px" }}>
//           {stats.map((s) => (
//             <div key={s.label} className="glass" style={{ padding: "20px 20px" }}>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
//                 <div style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
//                 <div style={{ fontSize: "1.2rem" }}>{s.icon}</div>
//               </div>
//               <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.8rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "8px" }}>{s.value}</div>
//               <div style={{ fontSize: "0.78rem", color: s.up ? "#10B981" : "#F87171", fontFamily: "'JetBrains Mono',monospace" }}>
//                 {s.up ? "↑" : "↓"} {s.change}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Charts row */}
//         <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "20px", marginBottom: "24px" }}>
//           {/* User Growth Chart */}
//           <div className="glass" style={{ padding: "24px" }}>
//             <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "20px", fontSize: "0.95rem" }}>User Growth</div>
//             <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", height: "120px", borderBottom: "1px solid rgba(79,142,247,0.15)", paddingBottom: "8px" }}>
//               {chartData.map((d) => (
//                 <div key={d.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
//                   <div style={{
//                     width: "100%", borderRadius: "6px 6px 0 0",
//                     height: `${(d.val / 130) * 100}px`,
//                     background: "linear-gradient(to top, #4F8EF7, #22D3EE)",
//                     opacity: 0.75,
//                   }} />
//                   <div style={{ fontSize: "0.65rem", color: "rgba(232,238,255,0.4)", marginTop: "6px", whiteSpace: "nowrap" }}>{d.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Calls Overview Donut */}
//           <div className="glass" style={{ padding: "24px" }}>
//             <div style={{ fontWeight: 700, color: "#E8EEFF", marginBottom: "20px", fontSize: "0.95rem" }}>Calls Overview</div>
//             {/* Fake donut using conic-gradient */}
//             <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
//               <div style={{
//                 width: 100, height: 100, borderRadius: "50%", flexShrink: 0,
//                 background: "conic-gradient(#4F8EF7 0% 67%, #F87171 67% 85%, #F59E0B 85% 100%)",
//                 boxShadow: "0 0 20px rgba(79,142,247,0.3)",
//                 position: "relative",
//               }}>
//                 <div style={{
//                   position: "absolute", inset: "20px", borderRadius: "50%",
//                   background: "rgba(5,7,26,0.95)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   fontFamily: "'Orbitron',monospace", fontSize: "0.75rem", color: "#4F8EF7", fontWeight: 700,
//                 }}>67%</div>
//               </div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                 {[
//                   { color: "#4F8EF7", label: "Completed", val: "67%" },
//                   { color: "#F87171", label: "Cancelled", val: "18%" },
//                   { color: "#F59E0B", label: "Missed", val: "15%" },
//                 ].map((item) => (
//                   <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                     <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color }} />
//                     <span style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.55)" }}>{item.label}</span>
//                     <span style={{ fontSize: "0.78rem", color: "#E8EEFF", fontFamily: "'JetBrains Mono',monospace", marginLeft: "4px" }}>{item.val}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="glass" style={{ padding: "24px" }}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//             <div style={{ fontWeight: 700, color: "#E8EEFF", fontSize: "0.95rem" }}>Recent Activity</div>
//             <button className="btn-outline" style={{ padding: "5px 14px", fontSize: "0.75rem" }}>View All</button>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
//             {recentActivity.map((item, i) => (
//               <div key={i} style={{
//                 display: "flex", alignItems: "center", gap: "14px",
//                 padding: "12px 0",
//                 borderBottom: i < recentActivity.length - 1 ? "1px solid rgba(79,142,247,0.08)" : "none",
//               }}>
//                 <div style={{
//                   width: 36, height: 36, borderRadius: "10px",
//                   background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.15)",
//                   display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0,
//                 }}>{item.icon}</div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E8EEFF" }}>{item.file}</div>
//                   <div style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.45)", marginTop: "2px" }}>{item.result}</div>
//                 </div>
//                 <div style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.35)", fontFamily: "'JetBrains Mono',monospace" }}>{item.time}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }




// src/pages/Dashboard.jsx
import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { dashboardApi } from "../services/mockApi";
import { useNavigate } from "react-router-dom";

// ── Skeleton loader ──────────────────────────────────────────────────────────
function Skeleton({ w = "100%", h = 20, radius = 8, style = {} }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: radius,
      background: "linear-gradient(90deg, rgba(79,142,247,0.08) 25%, rgba(79,142,247,0.15) 50%, rgba(79,142,247,0.08) 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
      ...style,
    }} />
  );
}

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, change, icon, loading }) {
  return (
    <div className="glass" style={{ padding: "22px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
        <div style={{ fontSize: "1.3rem" }}>{icon}</div>
      </div>
      {loading ? <Skeleton h={36} radius={6} style={{ marginBottom: 8 }} /> : (
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.9rem", fontWeight: 700, color: "#E8EEFF", marginBottom: "8px" }}>{value?.toLocaleString()}</div>
      )}
      {loading ? <Skeleton w="60%" h={14} radius={4} /> : (
        <div style={{ fontSize: "0.78rem", color: "#10B981", fontFamily: "'JetBrains Mono',monospace" }}>↑ {change}</div>
      )}
    </div>
  );
}

// ── Bar chart ────────────────────────────────────────────────────────────────
function BarChart({ data, loading }) {
  if (loading) return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "130px" }}>
      {Array(7).fill(0).map((_, i) => <Skeleton key={i} w="100%" h={`${40 + i * 10}px`} radius={6} />)}
    </div>
  );
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "130px", borderBottom: "1px solid rgba(79,142,247,0.15)", paddingBottom: "8px" }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            width: "100%", borderRadius: "6px 6px 0 0",
            height: `${(d.value / max) * 110}px`,
            background: "linear-gradient(to top, #4F8EF7, #22D3EE)",
            opacity: 0.8, transition: "height 0.8s ease",
          }} title={`${d.label}: ${d.value}`} />
          <div style={{ fontSize: "0.6rem", color: "rgba(232,238,255,0.4)", marginTop: "6px", whiteSpace: "nowrap" }}>{d.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Donut chart ──────────────────────────────────────────────────────────────
function DonutChart({ data }) {
  const total = data.completed + data.cancelled + data.missed;
  const pct = (v) => (v / total * 100).toFixed(0);
  const angle = (v) => (v / total) * 360;
  const ca = angle(data.completed);
  const cca = angle(data.cancelled);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <div style={{
        width: 100, height: 100, borderRadius: "50%", flexShrink: 0,
        background: `conic-gradient(#4F8EF7 0deg ${ca}deg, #F87171 ${ca}deg ${ca + cca}deg, #F59E0B ${ca + cca}deg 360deg)`,
        boxShadow: "0 0 20px rgba(79,142,247,0.3)", position: "relative",
      }}>
        <div style={{ position: "absolute", inset: "20px", borderRadius: "50%", background: "rgba(5,7,26,0.95)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Orbitron',monospace", fontSize: "0.75rem", color: "#4F8EF7", fontWeight: 700 }}>{pct(data.completed)}%</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          { color: "#4F8EF7", label: "Completed", val: pct(data.completed) },
          { color: "#F87171", label: "Cancelled",  val: pct(data.cancelled) },
          { color: "#F59E0B", label: "Missed",     val: pct(data.missed) },
        ].map(item => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
            <span style={{ fontSize: "0.78rem", color: "rgba(232,238,255,0.55)" }}>{item.label}</span>
            <span style={{ fontSize: "0.78rem", color: "#E8EEFF", fontFamily: "'JetBrains Mono',monospace" }}>{item.val}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Module usage bar ─────────────────────────────────────────────────────────
function ModuleBar({ label, value, color }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "0.8rem", color: "rgba(232,238,255,0.65)" }}>{label}</span>
        <span style={{ fontSize: "0.78rem", fontFamily: "'JetBrains Mono',monospace", color }}>{value}%</span>
      </div>
      <div className="progress-bar">
        <div style={{ height: "100%", width: `${value}%`, background: color, borderRadius: "100px", transition: "width 1s ease" }} />
      </div>
    </div>
  );
}

// ── Sidebar links ────────────────────────────────────────────────────────────
const SIDEBAR = [
  { icon: "📊", label: "Dashboard" },
  { icon: "👥", label: "Users" },
  { icon: "🤝", label: "Volunteers" },
  { icon: "📞", label: "Video Calls" },
  { icon: "📈", label: "Reports" },
  { icon: "💬", label: "Feedback" },
  { icon: "⚙",  label: "Settings" },
  { icon: "🚪", label: "Logout" },
];

export default function Dashboard() {
  const { user, logout }  = useAuth();
  const navigate          = useNavigate();
  const [active, setActive]   = useState("Dashboard");
  const [stats, setStats]     = useState(null);
  const [charts, setCharts]   = useState(null);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    try {
      const [s, c, a] = await Promise.all([
        dashboardApi.getStats(),
        dashboardApi.getChartData(),
        dashboardApi.getActivityFeed(),
      ]);
      setStats(s); setCharts(c); setActivity(a);
    } finally {
      setLoading(false); setRefreshing(false);
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  // Auto-refresh every 30s
  useEffect(() => {
    const t = setInterval(() => loadData(true), 30000);
    return () => clearInterval(t);
  }, [loadData]);

  const handleSidebar = (label) => {
    if (label === "Logout") { logout(); navigate("/login"); return; }
    setActive(label);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>

      {/* Sidebar */}
      <aside style={{ width: 220, flexShrink: 0, borderRight: "1px solid rgba(79,142,247,0.12)", padding: "28px 14px", background: "rgba(5,7,26,0.5)" }}>
        {/* User profile mini */}
        <div style={{ padding: "14px 12px", borderRadius: "12px", background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.15)", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(79,142,247,0.2)", border: "1px solid rgba(79,142,247,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
              {user?.avatar || "👤"}
            </div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#E8EEFF" }}>{user?.name || "Admin"}</div>
              <div style={{ fontSize: "0.7rem", color: "#4F8EF7", textTransform: "capitalize" }}>{user?.role || "admin"}</div>
            </div>
          </div>
        </div>

        <div style={{ fontSize: "0.65rem", color: "rgba(232,238,255,0.3)", letterSpacing: "0.08em", marginBottom: "12px", paddingLeft: "8px", textTransform: "uppercase" }}>Navigation</div>
        {SIDEBAR.map(l => (
          <div key={l.label} onClick={() => handleSidebar(l.label)}
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "10px 12px", borderRadius: "10px", cursor: "pointer", marginBottom: "3px",
              background: active === l.label ? "rgba(79,142,247,0.12)" : "transparent",
              border: `1px solid ${active === l.label ? "rgba(79,142,247,0.25)" : "transparent"}`,
              color: active === l.label ? "#4F8EF7" : "rgba(232,238,255,0.55)",
              fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s",
            }}
            onMouseEnter={e => { if (active !== l.label) e.currentTarget.style.background = "rgba(79,142,247,0.05)"; }}
            onMouseLeave={e => { if (active !== l.label) e.currentTarget.style.background = "transparent"; }}
          >
            <span>{l.icon}</span>{l.label}
          </div>
        ))}
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "32px 36px", overflowY: "auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
          <div>
            <div className="badge badge-blue" style={{ marginBottom: "8px" }}>Admin Panel</div>
            <h1 style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.5rem", fontWeight: 700, color: "#E8EEFF" }}>
              Admin Dashboard
            </h1>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {refreshing && <div className="spinner" style={{ width: 18, height: 18, borderWidth: 2 }} />}
            <button className="btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }}
              onClick={() => loadData(true)}>
              ↻ Refresh
            </button>
            <div style={{ padding: "8px 14px", borderRadius: "10px", background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)", color: "rgba(232,238,255,0.6)", fontSize: "0.78rem", fontFamily: "'JetBrains Mono',monospace" }}>
              Last 30 Days
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "22px" }}>
          <StatCard label="Total Users"       value={stats?.totalUsers}      change={stats?.growth.users}      icon="👥" loading={loading} />
          <StatCard label="Total Volunteers"  value={stats?.totalVolunteers}  change={stats?.growth.volunteers}  icon="🤝" loading={loading} />
          <StatCard label="Total Calls"       value={stats?.totalCalls}       change={stats?.growth.calls}       icon="📞" loading={loading} />
          <StatCard label="Resolved Queries"  value={stats?.resolvedQueries}  change={stats?.growth.queries}     icon="✅" loading={loading} />
        </div>

        {/* Charts row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "18px", marginBottom: "22px" }}>

          {/* User growth */}
          <div className="glass" style={{ padding: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ fontWeight: 700, color: "#E8EEFF", fontSize: "0.95rem" }}>User Growth</div>
              <span className="badge badge-green" style={{ fontSize: "0.68rem" }}>↑ Live</span>
            </div>
            <BarChart data={charts?.userGrowth || []} loading={loading} />
          </div>

          {/* Calls donut */}
          <div className="glass" style={{ padding: "24px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", fontSize: "0.95rem", marginBottom: "20px" }}>Calls Overview</div>
            {loading ? <Skeleton h={100} radius={50} style={{ width: 100, margin: "0 auto" }} /> :
              <DonutChart data={charts?.callsBreakdown || { completed: 67, cancelled: 18, missed: 15 }} />
            }
          </div>

          {/* Module usage */}
          <div className="glass" style={{ padding: "24px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", fontSize: "0.95rem", marginBottom: "20px" }}>Module Usage</div>
            {loading ? Array(4).fill(0).map((_, i) => <Skeleton key={i} h={14} radius={4} style={{ marginBottom: 16 }} />) :
              charts?.moduleUsage.map(m => <ModuleBar key={m.label} {...m} />)
            }
          </div>
        </div>

        {/* Activity feed */}
        <div className="glass" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ fontWeight: 700, color: "#E8EEFF", fontSize: "0.95rem" }}>Recent Activity</div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span className="badge badge-blue" style={{ fontSize: "0.68rem" }}>
                <span className="pulse-dot" />
                Live Feed
              </span>
              <button className="btn-outline" style={{ padding: "5px 14px", fontSize: "0.72rem" }}>View All</button>
            </div>
          </div>

          {loading ? Array(5).fill(0).map((_, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", padding: "12px 0", borderBottom: "1px solid rgba(79,142,247,0.07)" }}>
              <Skeleton w={36} h={36} radius={10} style={{ flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <Skeleton w="50%" h={14} radius={4} style={{ marginBottom: 8 }} />
                <Skeleton w="35%" h={11} radius={4} />
              </div>
              <Skeleton w={70} h={14} radius={4} />
            </div>
          )) : activity.map((item, i) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 0", borderBottom: i < activity.length - 1 ? "1px solid rgba(79,142,247,0.07)" : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E8EEFF" }}>{item.file}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(232,238,255,0.45)", marginTop: "2px" }}>{item.result}</div>
              </div>
              <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.3)", fontFamily: "'JetBrains Mono',monospace", whiteSpace: "nowrap" }}>{item.time}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
