// src/pages/AuthPages.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { speak } from "../hooks/useVoice";

function InputField({ label, type, value, onChange, placeholder, error, autoComplete }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={{ display: "block", fontSize: "0.78rem", color: "rgba(232,238,255,0.6)",
        textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px", fontWeight: 600 }}>
        {label}
      </label>
      <input
        type={type} value={value} onChange={onChange} placeholder={placeholder}
        autoComplete={autoComplete}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        aria-label={label} aria-invalid={!!error}
        style={{
          width: "100%", padding: "13px 16px", borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${error ? "#F87171" : focused ? "#4F8EF7" : "rgba(79,142,247,0.2)"}`,
          color: "#E8EEFF", fontSize: "0.95rem", fontFamily: "'Syne', sans-serif",
          outline: "none", transition: "border 0.2s",
          boxShadow: focused ? "0 0 0 3px rgba(79,142,247,0.12)" : "none",
        }}
      />
      {error && <div style={{ fontSize: "0.75rem", color: "#F87171", marginTop: "6px" }}>{error}</div>}
    </div>
  );
}

// ── LOGIN ────────────────────────────────────────────────────────────────────
export function LoginPage() {
  const { login } = useAuth();
  const navigate  = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) { setError("Please fill in all fields."); return; }
    setLoading(true); setError("");
    try {
      const user = await login(email, password);
      speak(`Welcome back, ${user.name}!`);
      navigate(user.role === "admin" ? "/dashboard" : "/");
    } catch (err) {
      setError(err.message);
      speak("Login failed. " + err.message);
    } finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "3rem", marginBottom: "12px", filter: "drop-shadow(0 0 20px #4F8EF7)" }}>👁</div>
          <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.4rem", fontWeight: 700, color: "#E8EEFF" }}>
            Vision<span style={{ color: "#4F8EF7" }}>Voice</span>
          </div>
          <div style={{ color: "rgba(232,238,255,0.45)", fontSize: "0.85rem", marginTop: "6px" }}>
            Sign in to your account
          </div>
        </div>

        {/* Demo hint */}
        <div style={{
          marginBottom: "20px", padding: "12px 16px", borderRadius: "12px",
          background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)",
          fontSize: "0.8rem", color: "rgba(232,238,255,0.6)", lineHeight: 1.6,
        }}>
          <strong style={{ color: "#4F8EF7" }}>Demo credentials:</strong><br />
          User: ramesh@example.com / demo123<br />
          Admin: admin@visionvoice.ai / admin123
        </div>

        <form className="glass" style={{ padding: "32px" }} onSubmit={handleLogin} noValidate>
          {error && (
            <div style={{
              marginBottom: "16px", padding: "12px 16px", borderRadius: "10px",
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
              color: "#F87171", fontSize: "0.85rem",
            }} role="alert">{error}</div>
          )}

          <InputField label="Email Address" type="email" value={email}
            onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
            autoComplete="email" />
          <InputField label="Password" type="password" value={password}
            onChange={e => setPassword(e.target.value)} placeholder="••••••••"
            autoComplete="current-password" />

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
            <span style={{ fontSize: "0.8rem", color: "#4F8EF7", cursor: "pointer" }}
              onClick={() => speak("Password reset is not available in demo mode.")}>
              Forgot password?
            </span>
          </div>

          <button type="submit" className="btn-primary"
            disabled={loading}
            style={{ width: "100%", padding: "14px", fontSize: "1rem",
              opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            aria-label="Sign in to VisionVoice">
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <span className="spinner" style={{ width: 18, height: 18, borderWidth: 2 }} />
                Signing in...
              </span>
            ) : "Sign In →"}
          </button>

          <div style={{ textAlign: "center", marginTop: "20px", fontSize: "0.85rem", color: "rgba(232,238,255,0.45)" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#4F8EF7", textDecoration: "none", fontWeight: 600 }}>
              Create one
            </Link>
          </div>
        </form>

        {/* Quick demo login buttons */}
        <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
          {[
            { label: "Login as User", email: "ramesh@example.com", pw: "demo123" },
            { label: "Login as Admin", email: "admin@visionvoice.ai", pw: "admin123" },
          ].map(btn => (
            <button key={btn.label} className="btn-outline"
              style={{ flex: 1, padding: "10px", fontSize: "0.78rem" }}
              onClick={() => { setEmail(btn.email); setPassword(btn.pw); }}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── REGISTER ─────────────────────────────────────────────────────────────────
export function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", role: "user" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim())  errs.name     = "Name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required.";
    if (form.password.length < 6)  errs.password = "Password must be at least 6 characters.";
    if (form.password !== form.confirm) errs.confirm = "Passwords do not match.";
    return errs;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true); setApiError(""); setErrors({});
    try {
      const user = await register(form.name, form.email, form.password, form.role);
      speak(`Account created! Welcome to VisionVoice, ${user.name}!`);
      navigate("/");
    } catch (err) {
      setApiError(err.message);
    } finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <div style={{ width: "100%", maxWidth: "460px" }}>

        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ fontSize: "3rem", marginBottom: "12px", filter: "drop-shadow(0 0 20px #4F8EF7)" }}>👁</div>
          <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "1.4rem", fontWeight: 700, color: "#E8EEFF" }}>
            Join Vision<span style={{ color: "#4F8EF7" }}>Voice</span>
          </div>
          <div style={{ color: "rgba(232,238,255,0.45)", fontSize: "0.85rem", marginTop: "6px" }}>
            Create your free account
          </div>
        </div>

        <form className="glass" style={{ padding: "32px" }} onSubmit={handleRegister} noValidate>
          {apiError && (
            <div style={{ marginBottom: "16px", padding: "12px 16px", borderRadius: "10px",
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
              color: "#F87171", fontSize: "0.85rem" }} role="alert">{apiError}</div>
          )}

          <InputField label="Full Name" type="text" value={form.name}
            onChange={set("name")} placeholder="Ramesh Kumar" error={errors.name}
            autoComplete="name" />
          <InputField label="Email Address" type="email" value={form.email}
            onChange={set("email")} placeholder="you@example.com" error={errors.email}
            autoComplete="email" />
          <InputField label="Password" type="password" value={form.password}
            onChange={set("password")} placeholder="Min 6 characters" error={errors.password}
            autoComplete="new-password" />
          <InputField label="Confirm Password" type="password" value={form.confirm}
            onChange={set("confirm")} placeholder="Repeat password" error={errors.confirm}
            autoComplete="new-password" />

          {/* Role selector */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "0.78rem", color: "rgba(232,238,255,0.6)",
              textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px", fontWeight: 600 }}>
              Join as
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { val: "user", icon: "👤", label: "User", desc: "I need assistance" },
                { val: "volunteer", icon: "🤝", label: "Volunteer", desc: "I want to help" },
              ].map(r => (
                <label key={r.val}
                  onClick={() => setForm(f => ({ ...f, role: r.val }))}
                  style={{
                    flex: 1, padding: "14px 12px", borderRadius: "12px", cursor: "pointer",
                    border: `1px solid ${form.role === r.val ? "#4F8EF7" : "rgba(79,142,247,0.15)"}`,
                    background: form.role === r.val ? "rgba(79,142,247,0.1)" : "transparent",
                    textAlign: "center", transition: "all 0.2s",
                  }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: "4px" }}>{r.icon}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: form.role === r.val ? "#4F8EF7" : "#E8EEFF" }}>{r.label}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(232,238,255,0.4)", marginTop: "2px" }}>{r.desc}</div>
                  <input type="radio" name="role" value={r.val} checked={form.role === r.val}
                    onChange={() => {}} style={{ display: "none" }} />
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-primary"
            disabled={loading}
            style={{ width: "100%", padding: "14px", fontSize: "1rem",
              opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <span className="spinner" style={{ width: 18, height: 18, borderWidth: 2 }} />
                Creating account...
              </span>
            ) : "Create Account →"}
          </button>

          <div style={{ textAlign: "center", marginTop: "20px", fontSize: "0.85rem", color: "rgba(232,238,255,0.45)" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#4F8EF7", textDecoration: "none", fontWeight: 600 }}>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}