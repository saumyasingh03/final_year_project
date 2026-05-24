// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Features from "./pages/Features";
// import HowItWorksPage from "./pages/HowItWorksPage";
// import Dashboard from "./pages/Dashboard";
// import HelpPage from "./pages/HelpPage";
// import Community from "./pages/Community";
// import About from "./pages/About";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/how-it-works" element={<HowItWorksPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/help" element={<HelpPage />} />
//         <Route path="/community" element={<Community />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import AccessibilityToolbar from "./components/AccessibilityToolbar";
import VoiceGuideButton from "./components/VoiceGuideButton";
import Home from "./pages/Home";
import Features from "./pages/Features";
import HowItWorksPage from "./pages/HowItWorksPage";
import Dashboard from "./pages/Dashboard";
import HelpPage from "./pages/HelpPage";
import Community from "./pages/Community";
import About from "./pages/About";
import { LoginPage, RegisterPage } from "./pages/AuthPages";

// ── Protected Route — admin only ────────────────────────────────────────────
function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="spinner" />
    </div>
  );
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;
  return children;
}

// ── Keyboard nav + route announce ───────────────────────────────────────────
function KeyboardNav() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      if (["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)) return;
      const map = { h:"/", f:"/features", w:"/how-it-works", d:"/dashboard", v:"/help", c:"/community", a:"/about" };
      if (map[e.key]) navigate(map[e.key]);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  useEffect(() => {
    const titles = {
      "/": "Home — VisionVoice", "/features": "Features — VisionVoice",
      "/how-it-works": "How It Works — VisionVoice", "/dashboard": "Dashboard — VisionVoice",
      "/help": "Help via Video Call — VisionVoice", "/community": "Community — VisionVoice",
      "/about": "About Us — VisionVoice", "/login": "Login — VisionVoice",
      "/register": "Register — VisionVoice",
    };
    document.title = titles[location.pathname] || "VisionVoice";
    const live = document.getElementById("route-announce");
    if (live) live.textContent = titles[location.pathname] || "VisionVoice";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function AppInner() {
  return (
    <>
      <div id="route-announce" aria-live="polite" aria-atomic="true"
        style={{ position:"absolute", left:"-9999px", width:1, height:1, overflow:"hidden" }} />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <KeyboardNav />
      <AccessibilityToolbar />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/features"      element={<Features />} />
          <Route path="/how-it-works"  element={<HowItWorksPage />} />
          <Route path="/dashboard"     element={<AdminRoute><Dashboard /></AdminRoute>} />
          <Route path="/help"          element={<HelpPage />} />
          <Route path="/community"     element={<Community />} />
          <Route path="/about"         element={<About />} />
          <Route path="/login"         element={<LoginPage />} />
          <Route path="/register"      element={<RegisterPage />} />
          <Route path="*"              element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <VoiceGuideButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppInner />
      </AuthProvider>
    </BrowserRouter>
  );
}

