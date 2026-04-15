import { Link } from "react-router"

import { SectionLabel } from "../components"
import { ArrowIcon, CalendarIcon, LinkedInIcon, SparkleIcon } from "../icons"

import { useFadeIn } from "../hooks"
import { calendlyLink } from "../constants"

import type { Theme } from "../types"

// ─── Contact Page ───
function ContactPage({ t } : { t: Theme }) {
  const header = useFadeIn();
  const cards = useFadeIn();

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "100px 24px 80px" }}>
      <section ref={header.ref} style={{ ...header.style, textAlign: "center", marginBottom: 48 }}>
        <SectionLabel t={t} color={t.pop}>Get In Touch</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: t.text, marginBottom: 12, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em" }}>Let's Connect</h2>
        <p style={{ fontSize: 17, color: t.textMuted, maxWidth: 480, margin: "0 auto", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>Ready to take the next step? Book a free consultation or connect with me on LinkedIn.</p>
      </section>
      <div ref={cards.ref} style={{ ...cards.style, display: "flex", flexDirection: "column", gap: 16 }}>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer"
          style={{ background: t.gradientSubtle, borderRadius: 18, border: `2px solid ${t.accent}`, padding: "32px 28px", textDecoration: "none", display: "flex", alignItems: "center", gap: 20, transition: "all 0.3s", boxShadow: t.shadow, position: "relative", overflow: "hidden" }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff" }}>
            <CalendarIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: t.text, fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>Schedule a Free 15-Minute Chat</div>
            <div style={{ fontSize: 14, color: t.textMuted, fontFamily: "'DM Sans', sans-serif" }}>No pressure, no commitment — just a conversation about your job search.</div>
          </div>
          <span style={{ color: t.accent, flexShrink: 0 }}><ArrowIcon /></span>
        </a>

        <a href="https://www.linkedin.com/in/alisonvidler/" target="_blank" rel="noopener noreferrer"
          style={{ background: t.bgCard, borderRadius: 18, border: `2px solid ${t.border}`, padding: "32px 28px", textDecoration: "none", display: "flex", alignItems: "center", gap: 20, transition: "all 0.3s", boxShadow: t.shadow }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "#0A66C2"; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff" }}>
            <LinkedInIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: t.text, fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>Connect on LinkedIn</div>
            <div style={{ fontSize: 14, color: t.textMuted, fontFamily: "'DM Sans', sans-serif" }}>Follow for job search tips, industry insights, and updates.</div>
          </div>
          <span style={{ color: "#0A66C2", flexShrink: 0 }}><ArrowIcon /></span>
        </a>

        <Link to="/"
          style={{ background: t.bgCard, borderRadius: 18, border: `2px solid ${t.border}`, padding: "32px 28px", textDecoration: "none", display: "flex", alignItems: "center", gap: 20, transition: "all 0.3s", boxShadow: t.shadow, cursor: "pointer", width: "100%", textAlign: "left", fontFamily: "'DM Sans', sans-serif" }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = t.accent; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff" }}>
            <SparkleIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: t.text, fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>View Services</div>
            <div style={{ fontSize: 14, color: t.textMuted, fontFamily: "'DM Sans', sans-serif" }}>Explore coaching packages, resume reviews, and more.</div>
          </div>
          <span style={{ color: t.accent, flexShrink: 0 }}><ArrowIcon /></span>
        </Link>
      </div>
    </div>
  );
}

export default ContactPage