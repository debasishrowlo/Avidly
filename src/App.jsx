import { useState, useEffect, useRef } from "react";

const SIMPLIFY_GIF = "/mnt/user-data/uploads/Simplify_jobs.gif";

// ─── Theme tokens ───
const themes = {
  light: {
    bg: "#FAFAF8",
    bgAlt: "#FFFFFF",
    bgCard: "#FFFFFF",
    bgCardHover: "#F5F3F0",
    text: "#1E1E2E",
    textMuted: "#5A5870",
    textLight: "#8E8CA0",
    accent: "#0D9488",
    accentHover: "#0A7F74",
    accentLight: "#E6FAF7",
    accentSoft: "#99E0D8",
    pop: "#D946A8",
    popLight: "#FDF2FA",
    popSoft: "#F0ABDE",
    warm: "#E5960B",
    warmLight: "#FEF9EC",
    warmSoft: "#FCD980",
    violet: "#7C3AED",
    violetLight: "#F3EEFF",
    border: "#E8E7EE",
    borderLight: "#F0EFF5",
    shadow: "0 1px 3px rgba(30,30,46,0.06), 0 6px 16px rgba(30,30,46,0.04)",
    shadowHover: "0 2px 8px rgba(30,30,46,0.08), 0 12px 32px rgba(30,30,46,0.06)",
    shadowLg: "0 4px 20px rgba(30,30,46,0.08), 0 16px 48px rgba(30,30,46,0.06)",
    navBg: "rgba(250,250,248,0.88)",
    gradient: "linear-gradient(135deg, #0D9488 0%, #D946A8 50%, #E5960B 100%)",
    gradientTealPop: "linear-gradient(135deg, #0D9488 0%, #D946A8 100%)",
    gradientWarm: "linear-gradient(135deg, #E5960B 0%, #D946A8 100%)",
    gradientSubtle: "linear-gradient(135deg, #E6FAF7 0%, #FDF2FA 50%, #FEF9EC 100%)",
    gradientHero: "linear-gradient(160deg, #E6FAF7 0%, #FAFAF8 30%, #FDF2FA 60%, #FEF9EC 100%)",
    tagBg: "#E6FAF7",
    tagText: "#0A7F74",
    footerBg: "#1E1E2E",
    footerText: "#8E8CA0",
  },
  dark: {
    bg: "#111118",
    bgAlt: "#1A1A24",
    bgCard: "#22222E",
    bgCardHover: "#2C2C3A",
    text: "#EDEDF0",
    textMuted: "#9B99B0",
    textLight: "#6B697E",
    accent: "#2DD4BF",
    accentHover: "#5EEAD4",
    accentLight: "#132723",
    accentSoft: "#1A3A35",
    pop: "#F472C8",
    popLight: "#2A1428",
    popSoft: "#3D1E36",
    warm: "#FBBF24",
    warmLight: "#2A2510",
    warmSoft: "#3D3818",
    violet: "#A78BFA",
    violetLight: "#1E1830",
    border: "#2E2E3E",
    borderLight: "#252533",
    shadow: "0 1px 3px rgba(0,0,0,0.3), 0 6px 16px rgba(0,0,0,0.2)",
    shadowHover: "0 2px 8px rgba(0,0,0,0.35), 0 12px 32px rgba(0,0,0,0.25)",
    shadowLg: "0 4px 20px rgba(0,0,0,0.35), 0 16px 48px rgba(0,0,0,0.25)",
    navBg: "rgba(17,17,24,0.9)",
    gradient: "linear-gradient(135deg, #2DD4BF 0%, #F472C8 50%, #FBBF24 100%)",
    gradientTealPop: "linear-gradient(135deg, #2DD4BF 0%, #F472C8 100%)",
    gradientWarm: "linear-gradient(135deg, #FBBF24 0%, #F472C8 100%)",
    gradientSubtle: "linear-gradient(135deg, #132723 0%, #2A1428 50%, #2A2510 100%)",
    gradientHero: "linear-gradient(160deg, #132723 0%, #111118 30%, #2A1428 60%, #2A2510 100%)",
    tagBg: "#132723",
    tagText: "#2DD4BF",
    footerBg: "#0A0A10",
    footerText: "#6B697E",
  },
};

// ─── SVG Icons ───
const SunIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>);
const MoonIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>);
const MenuIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>);
const CloseIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const ArrowIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
const CalendarIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>);
const LinkedInIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>);
const ExternalLinkIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>);
const CheckIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>);
const SparkleIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" /></svg>);
const HeartIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>);

// ─── Decorative blobs ───
function DecorBlobs({ t }) {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <div style={{ position: "absolute", top: -120, right: -80, width: 360, height: 360, borderRadius: "50%", background: t.accentLight, opacity: 0.7, filter: "blur(60px)" }} />
      <div style={{ position: "absolute", top: 100, left: -100, width: 280, height: 280, borderRadius: "50%", background: t.popLight, opacity: 0.6, filter: "blur(50px)" }} />
      <div style={{ position: "absolute", bottom: -60, right: "20%", width: 240, height: 240, borderRadius: "50%", background: t.warmLight, opacity: 0.6, filter: "blur(50px)" }} />
    </div>
  );
}

// ─── Fade-in on scroll ───
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, style: { opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)" } };
}

// ─── Color Pill ───
function ColorPill({ children, color, bgColor }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: bgColor, color, borderRadius: 20, padding: "5px 12px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", fontFamily: "'DM Sans', sans-serif" }}>
      {children}
    </span>
  );
}

// ─── Section Label ───
function SectionLabel({ children, t, color }) {
  const c = color || t.accent;
  const bg = color === t.pop ? t.popLight : color === t.warm ? t.warmLight : t.accentLight;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: bg, borderRadius: 20, padding: "6px 14px", marginBottom: 16 }}>
      <SparkleIcon />
      <span style={{ fontSize: 12, fontWeight: 600, color: c, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>{children}</span>
    </div>
  );
}

// ─── Nav ───
function Nav({ page, setPage, theme, toggleTheme, t }) {
  const [open, setOpen] = useState(false);
  const pages = ["About", "Services", "Resources", "Contact"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: t.navBg, backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderBottom: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <button onClick={() => setPage("About")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, padding: 0 }} aria-label="Home">
          <div style={{ width: 32, height: 32, borderRadius: 8, background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16, fontFamily: "'Fraunces', Georgia, serif" }}>A</span>
          </div>
          <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Fraunces', Georgia, serif", color: t.text, letterSpacing: "-0.02em" }}>Avidly</span>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="desktop-nav">
          {pages.map((p) => (
            <button key={p} onClick={() => setPage(p)} aria-current={page === p ? "page" : undefined}
              style={{ background: page === p ? t.accentLight : "transparent", color: page === p ? t.accent : t.textMuted, border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={(e) => { if (page !== p) e.target.style.color = t.text; }}
              onMouseLeave={(e) => { if (page !== p) e.target.style.color = t.textMuted; }}>
              {p}
            </button>
          ))}
          <div style={{ width: 1, height: 24, background: t.border, margin: "0 8px" }} />
          <button onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            style={{ background: t.accentLight, border: "none", borderRadius: 8, padding: 8, cursor: "pointer", color: t.accent, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
        <div className="mobile-nav" style={{ display: "none", alignItems: "center", gap: 8 }}>
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{ background: t.accentLight, border: "none", borderRadius: 8, padding: 8, cursor: "pointer", color: t.accent, display: "flex" }}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: "none", border: "none", cursor: "pointer", color: t.text, display: "flex", padding: 4 }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <div style={{ background: t.bgAlt, borderTop: `1px solid ${t.border}`, padding: "8px 16px 16px" }} className="mobile-dropdown">
          {pages.map((p) => (
            <button key={p} onClick={() => { setPage(p); setOpen(false); }}
              style={{ display: "block", width: "100%", textAlign: "left", background: page === p ? t.accentLight : "transparent", color: page === p ? t.accent : t.textMuted, border: "none", borderRadius: 8, padding: "12px 16px", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>
              {p}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Price Card ───
function PriceCard({ title, original, price, features, tag, t, colorScheme, link }) {
  const fade = useFadeIn();
  const [hovered, setHovered] = useState(false);
  const isFree = price === "Free";
  const schemes = {
    teal: { pill: t.accent, check: t.accent, borderHover: t.accent },
    pop: { pill: t.pop, check: t.pop, borderHover: t.pop },
    warm: { pill: t.warm, check: t.warm, borderHover: t.warm },
    violet: { pill: t.violet, check: t.violet, borderHover: t.violet },
    bundle: { pill: "#fff", check: "#fff", borderHover: t.accent },
  };
  const s = schemes[colorScheme] || schemes.teal;
  const isBundle = colorScheme === "bundle";

  return (
    <div ref={fade.ref}
      style={{ ...fade.style, background: isBundle ? t.gradient : t.bgCard, borderRadius: 16, border: `1.5px solid ${hovered ? s.borderHover : (isBundle ? "transparent" : t.border)}`, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16, transition: "all 0.3s", boxShadow: hovered ? t.shadowHover : t.shadow, transform: hovered ? `${fade.style.transform} translateY(-4px)` : fade.style.transform, position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {tag && (
        <div style={{ position: "absolute", top: 16, right: 16, background: isBundle ? "rgba(255,255,255,0.25)" : t.popLight, color: isBundle ? "#fff" : t.pop, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6, letterSpacing: "0.04em", textTransform: "uppercase", backdropFilter: isBundle ? "blur(8px)" : "none" }}>{tag}</div>
      )}
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 600, color: isBundle ? "#fff" : t.text, marginBottom: 10, fontFamily: "'DM Sans', sans-serif", paddingRight: tag ? 80 : 0 }}>{title}</h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
          {!isFree && original && (
            <span style={{ fontSize: 17, color: isBundle ? "rgba(255,255,255,0.5)" : t.textLight, textDecoration: "line-through", fontWeight: 400 }}>${original}</span>
          )}
          <span style={{ fontSize: 32, fontWeight: 800, color: isBundle ? "#fff" : s.pill, fontFamily: "'Fraunces', Georgia, serif" }}>
            {isFree ? "Free" : `$${price}`}
          </span>
        </div>
      </div>
      {features && features.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: isBundle ? "rgba(255,255,255,0.9)" : t.textMuted, lineHeight: 1.5 }}>
              <span style={{ color: isBundle ? "rgba(255,255,255,0.8)" : s.check, flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
              {f}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: s.pill, color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif", marginTop: "auto" }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
          Watch Now <ExternalLinkIcon />
        </a>
      )}
    </div>
  );
}

// ─── About Page ───
function AboutPage({ t, setPage }) {
  const hero = useFadeIn();
  const bio = useFadeIn();
  const vid = useFadeIn();

  return (
    <div>
      <section style={{ position: "relative", overflow: "hidden", background: t.gradientHero }}>
        <DecorBlobs t={t} />
        <div ref={hero.ref} style={{ ...hero.style, position: "relative", zIndex: 1, textAlign: "center", padding: "130px 24px 70px", maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            <ColorPill color={t.accent} bgColor={t.accentLight}>Career Coach</ColorPill>
            <ColorPill color={t.pop} bgColor={t.popLight}>People Tech Expert</ColorPill>
            <ColorPill color={t.warm} bgColor={t.warmLight}>10+ Years in Tech</ColorPill>
          </div>
          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", fontWeight: 800, color: t.text, lineHeight: 1.12, marginBottom: 22, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em", fontOpticalSizing: "auto" }}>
            Navigate your job search{" "}
            <span style={{ display: "inline-block" }}>with an{" "}
              <span style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>insider's perspective</span>
            </span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: t.textMuted, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px", fontFamily: "'DM Sans', sans-serif" }}>
            Learn what actually happens inside recruiting teams, how companies use hiring technology, and how to stand out in today's competitive job market.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("Services")}
              style={{ background: t.gradient, color: "#fff", border: "none", borderRadius: 12, padding: "15px 30px", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.25s", fontFamily: "'DM Sans', sans-serif", boxShadow: `0 4px 16px ${t.accent}33` }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 6px 24px ${t.accent}44`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 16px ${t.accent}33`; }}>
              View Services <ArrowIcon />
            </button>
            <button onClick={() => setPage("Contact")}
              style={{ background: t.bgCard, color: t.accent, border: `2px solid ${t.border}`, borderRadius: 12, padding: "14px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.25s", fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; }}>
              Book a Free Chat
            </button>
          </div>
        </div>
      </section>

      <section ref={vid.ref} style={{ ...vid.style, maxWidth: 800, margin: "0 auto", padding: "48px 24px 60px" }}>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: t.shadowLg, border: `1px solid ${t.border}`, position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/n0CJMMcdD4M?si=daLYlHqDoPVRJEyS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
        </div>
      </section>

      <section ref={bio.ref} style={{ ...bio.style, maxWidth: 820, margin: "0 auto", padding: "0 24px 90px" }}>
        <div style={{ background: t.bgCard, borderRadius: 20, padding: "clamp(28px, 4vw, 48px)", border: `1px solid ${t.border}`, boxShadow: t.shadow, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: t.gradient }} />
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
            <img src="https://media.licdn.com/dms/image/v2/C4E03AQGJRQ3tMtoJBg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552950490434?e=1774483200&v=beta&t=eeDO0D7PoYIwdKFLHXEuRAERJ4n4kui5NOqoqhbPFWk"
              alt="Ali Vidler" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", border: `3px solid ${t.accent}`, boxShadow: `0 0 0 3px ${t.accentLight}`, flexShrink: 0 }} />
            <div>
              <SectionLabel t={t} color={t.pop}>About Ali</SectionLabel>
            </div>
          </div>
          <div style={{ fontSize: "clamp(15px, 1.8vw, 17px)", color: t.textMuted, lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ margin: 0 }}>Ali started her career as a Recruiter at large multinational companies, <strong style={{ color: t.text }}>JPMorgan Chase</strong> and <strong style={{ color: t.text }}>CIBC</strong>, before deciding she wanted a new challenge. Instead of working within legacy processes, she wanted to build something scalable from the ground up.</p>
            <p style={{ margin: 0 }}>She joined an ad-tech startup in New York City where she helped build out their recruiting and people operations practices, including setting up HR technology and implementing a new applicant tracking system. From there, she worked across various startups before joining larger tech companies, most recently <strong style={{ color: t.text }}>Block</strong> (formerly Square) and <strong style={{ color: t.text }}>Pinterest</strong>.</p>
            <p style={{ margin: 0 }}>At Block and Pinterest, Ali went deep on talent tools, HR systems, and system implementations, also working on the company knowledge base and diving into employee strategy on the employee experience engineering team. She's implemented tools and systems leveraging <strong style={{ color: t.text }}>AI firsthand</strong>, giving her a real inside look at how recruiting teams operate and how technology shapes the hiring process.</p>
            <div style={{ background: t.gradientSubtle, borderRadius: 12, padding: "18px 20px", borderLeft: `4px solid ${t.pop}` }}>
              <p style={{ margin: 0, fontWeight: 500, color: t.text, fontSize: "clamp(15px, 1.8vw, 17px)" }}>Now she's channeling that experience into coaching — helping candidates understand what actually happens inside recruiting teams, how companies use these tools, and ultimately how to land their next role.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Testimonials Carousel ───
const testimonials = [
  {
    quote: "I was applying to jobs and wasn't getting a lot of hits — my application to interview ratio was about 10:1 but after talking to Ali that ratio went up to 3:1. Clearly she has a lot of experience working in HR and Recruiting. She's super knowledgeable on all things talent acquisition and I'd highly recommend working with her on your resume and interview skills.",
    name: "Jorge M.",
    role: "Software Engineer",
    service: "Resume review and recruiting",
    color: "teal",
  },
  {
    quote: "I did a session with Ali and her recommendations changed my job search completely! The following week I had recruiters reaching out and was in 1st rounds with 7 companies and 2nd rounds with 3 companies! Ali has an abundance of knowledge in recruiting and is an expert at getting your resume to be the top of the list of candidates. She was extremely easy to talk to, took the time to explain every single intricate detail of how recruiters look at your resume, and gave me the skills to improve it on my own in the future. I wholeheartedly recommend Ali's amazing services!",
    name: "Mario P.",
    role: "Software Engineer",
    service: "Resume review and recruiting",
    color: "pop",
  },
  {
    quote: "Alison was an invaluable asset to me during my job search. As someone who had recently closed their own business and hadn't applied for traditional jobs before, she helped me navigate this career change seamlessly. She helped me frame my resume, experiences, and cover letters in a way that helped me land my perfect job. Even after I had gotten my offer — Ali was immensely helpful with navigating negotiation conversations around compensation and benefits. I would have been lost without her.",
    name: "Cait B.",
    role: "Operations Manager",
    service: "Recruiting operations",
    color: "warm",
  },
  {
    quote: "She gave me insider-knowledge of how a hiring process works and what causes immediate disqualification vs. what makes you stay in the pile. After Ms. Vidler revamped my resume, I was called to many interviews and they all complimented the content and the formatting. And yes, there's a happy ending — I now have a work from home job as a Technical Administrator. Thank you, Ali!",
    name: "Alan C.",
    role: "Technical Administrator",
    service: "Resume review and interview prep",
    color: "violet",
  },
  {
    quote: "Her guidance not only helped enhance my resume for the positions that I was looking for, but also enlightened me on effective strategies for engaging with recruiters. With her professional expertise and personable approach, Alison is an invaluable resource for anyone looking to enhance their job search skills.",
    name: "Laura De Los Santos",
    role: "LinkedIn Client",
    service: "Resume review and recruiting strategy",
    color: "teal",
  },
  {
    quote: "Alison was fantastic at helping me make my resume stand out. During a challenging job transition, her insights on increasing my resume's visibility were invaluable. She truly cares about her clients' success and made me feel supported throughout the process. I highly recommend Alison to anyone looking for career advancement support.",
    name: "Robert Latin, MBA",
    role: "LinkedIn Client",
    service: "Resume optimization",
    color: "pop",
  },
  {
    quote: "Working with Ali was such an amazing experience. She was very easy to work with. She helped me refine my resume, helped me understand how the recruiting process works and find a job. I went from not getting any interviews to getting multiple interviews in a week. She also coached me on how to negotiate compensation when speaking to recruiters and during the offer stage.",
    name: "Celeste Rhoades",
    role: "LinkedIn Client",
    service: "Resume, recruiting, and negotiation",
    color: "warm",
  },
];

function TestimonialsCarousel({ t }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStart = useRef(null);
  const total = testimonials.length;

  // Responsive check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perView = isMobile ? 1 : 2;
  const maxIndex = total - perView;

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((c) => c >= maxIndex ? 0 : c + 1), 5000);
    return () => clearInterval(timer);
  }, [paused, maxIndex]);

  const go = (dir) => setCurrent((c) => {
    const next = c + dir;
    if (next < 0) return maxIndex;
    if (next > maxIndex) return 0;
    return next;
  });

  const colors = { teal: t.accent, pop: t.pop, warm: t.warm, violet: t.violet };
  const bgs = { teal: t.accentLight, pop: t.popLight, warm: t.warmLight, violet: t.violetLight };

  const gapPx = 20;
  // Each card is (100% - gap) / perView wide
  const cardWidth = `calc((100% - ${gapPx * (perView - 1)}px) / ${perView})`;
  const translateX = `calc(-${current} * (100% + ${gapPx}px) / ${perView})`;

  return (
    <div style={{ marginTop: 64 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <SectionLabel t={t} color={t.warm}>Verified Reviews</SectionLabel>
        <h3 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: t.text, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em", marginBottom: 8 }}>What Clients Are Saying</h3>
        <p style={{ fontSize: 16, color: t.textMuted, fontFamily: "'DM Sans', sans-serif" }}>Real results from real job seekers.</p>
      </div>

      <div style={{ position: "relative" }}>
        {/* Arrow buttons */}
        <button onClick={() => go(-1)} aria-label="Previous testimonial"
          style={{ position: "absolute", top: "50%", left: -16, transform: "translateY(-50%)", zIndex: 2, width: 42, height: 42, borderRadius: "50%", background: t.bgCard, border: `1.5px solid ${t.border}`, boxShadow: t.shadow, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.textMuted, transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.boxShadow = t.shadowHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textMuted; e.currentTarget.style.boxShadow = t.shadow; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={() => go(1)} aria-label="Next testimonial"
          style={{ position: "absolute", top: "50%", right: -16, transform: "translateY(-50%)", zIndex: 2, width: 42, height: 42, borderRadius: "50%", background: t.bgCard, border: `1.5px solid ${t.border}`, boxShadow: t.shadow, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.textMuted, transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.boxShadow = t.shadowHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textMuted; e.currentTarget.style.boxShadow = t.shadow; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        {/* Track */}
        <div style={{ overflow: "hidden", borderRadius: 20, margin: "0 28px", padding: "4px 0" }}
          onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const diff = touchStart.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
            touchStart.current = null;
          }}>
          <div style={{
            display: "flex",
            gap: gapPx,
            transform: `translateX(calc(-${current} * (${100 / perView}% + ${gapPx / perView}px)))`,
            transition: "transform 0.6s cubic-bezier(.4,0,.15,1)",
            willChange: "transform",
          }}>
            {testimonials.map((item, i) => {
              const accentColor = colors[item.color];
              const bgColor = bgs[item.color];
              return (
                <div key={i} style={{
                  minWidth: cardWidth,
                  maxWidth: cardWidth,
                  background: t.bgCard,
                  borderRadius: 18,
                  border: `1px solid ${t.border}`,
                  padding: "32px 28px",
                  boxShadow: t.shadow,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {/* Color bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: accentColor }} />
                  {/* Quote mark */}
                  <div style={{ position: "absolute", top: 16, right: 24, fontSize: 72, fontFamily: "'Fraunces', Georgia, serif", color: bgColor, lineHeight: 1, pointerEvents: "none" }}>"</div>
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 3, position: "relative", zIndex: 1 }}>
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill={accentColor}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  {/* Quote text */}
                  <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif", fontStyle: "italic", flex: 1, position: "relative", zIndex: 1 }}>
                    "{item.quote}"
                  </p>
                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: `1px solid ${t.border}`, paddingTop: 16, position: "relative", zIndex: 1 }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: bgColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontWeight: 700, fontSize: 16, color: accentColor, fontFamily: "'DM Sans', sans-serif" }}>{item.name.charAt(0)}</span>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>{item.name}</div>
                      <div style={{ fontSize: 12, color: t.textMuted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.role} · {item.service}</div>
                    </div>
                    <div style={{ marginLeft: "auto", flexShrink: 0 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, color: accentColor, background: bgColor, padding: "4px 9px", borderRadius: 5, letterSpacing: "0.04em" }}>VERIFIED</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 22 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => {
            const dotColor = colors[testimonials[i].color];
            return (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`}
                style={{ width: current === i ? 28 : 10, height: 10, borderRadius: 5, background: current === i ? dotColor : t.border, border: "none", cursor: "pointer", transition: "all 0.35s cubic-bezier(.4,0,.2,1)", padding: 0 }} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Services Page ───
function ServicesPage({ t }) {
  const header = useFadeIn();
  return (
    <div style={{ maxWidth: 1040, margin: "0 auto", padding: "100px 24px 80px" }}>
      <section ref={header.ref} style={{ ...header.style, textAlign: "center", marginBottom: 52 }}>
        <SectionLabel t={t}>What I Offer</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: t.text, marginBottom: 12, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em" }}>Services</h2>
        <p style={{ fontSize: 17, color: t.textMuted, maxWidth: 560, margin: "0 auto", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>Practical, insider-informed coaching to help you navigate every stage of your job search.</p>
      </section>

      <div style={{ marginBottom: 56 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 24, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradientTealPop, borderRadius: 2, display: "inline-block" }} />
          Job Seeker Services
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 16 }}>
          <PriceCard t={t} colorScheme="teal" title="How Companies Recruit" price="Free" link="https://www.youtube.com/live/n0CJMMcdD4M?si=9DsaEiU8Ka0g0mjD" features={["Understand the recruiting process from the inside", "Learn how ATS and hiring tools work", "Know what recruiters are really looking for"]} />
          <PriceCard t={t} colorScheme="pop" title="1:1 Coaching Sessions" original="500" price="350" features={["3 personalized coaching sessions", "Tailored job search strategy", "Ongoing guidance and accountability"]} />
          <PriceCard t={t} colorScheme="warm" title="Resume Review & Rewrite" original="350" price="250" features={["2 sessions for deep-dive review", "ATS optimization guidance", "Rewrite with insider knowledge"]} />
          <PriceCard t={t} colorScheme="violet" title="Interview Practice" original="300" price="250" features={["Mock interviews with real feedback", "Behavioral & technical prep", "Confidence-building techniques"]} />
          <PriceCard t={t} colorScheme="teal" title="Negotiation Coaching" original="250" price="150" features={["Salary & offer negotiation strategy", "Scripts and frameworks", "Know your leverage"]} />
          <PriceCard t={t} colorScheme="bundle" title="All Services Bundle" original="1000" price="800" tag="Best Value" features={["Everything listed above", "Priority scheduling", "Full support from search to offer"]} />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 24, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradientWarm, borderRadius: 2, display: "inline-block" }} />
          Layoff Support Services
          <span style={{ color: t.pop, marginLeft: 4 }}><HeartIcon /></span>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 16 }}>
          <PriceCard t={t} colorScheme="pop" title="Layoff 1:1 Support" original="500" price="250" features={["Severance negotiation advice", "Unemployment filing guidance", "Next steps action plan", "Emotional support & strategy"]} />
          <PriceCard t={t} colorScheme="warm" title="Layoff List" price="Free" features={["Curated list of companies hiring", "Updated regularly", "Targeted to your skills & industry"]} />
        </div>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel t={t} />
    </div>
  );
}

// ─── Resources Page ───
function ResourcesPage({ t }) {
  const header = useFadeIn();
  const simplify = useFadeIn();
  const boards = useFadeIn();
  const contract = useFadeIn();

  const jobSites = [
    { name: "LinkedIn", url: "https://linkedin.com", color: "#0A66C2", initial: "in" },
    { name: "Indeed", url: "https://indeed.com", color: "#2164F3", initial: "I" },
    { name: "Glassdoor", url: "https://www.glassdoor.com", color: "#0CAA41", initial: "G" },
    { name: "BuiltIn", url: "https://builtin.com", color: "#1D3044", initial: "B" },
    { name: "Wellfound", url: "https://wellfound.com/jobs", color: "#000000", initial: "W" },
    { name: "AngelList", url: "https://www.angellist.com/careers", color: "#111111", initial: "A" },
    { name: "Welcome to the Jungle", url: "https://us.welcometothejungle.com/", color: "#FFCD00", initial: "W" },
    { name: "ZipRecruiter", url: "https://www.ziprecruiter.com/", color: "#24A94B", initial: "Z" },
    { name: "People Ops Jobs", url: "https://peopleopsjobs.io/", color: "#8B5CF6", initial: "P" },
    { name: "Simply Hired", url: "https://www.simplyhired.com/search?l=arlington%2C+va", color: "#6B46C1", initial: "S" },
    { name: "USAJobs", url: "http://USAJobs.gov", color: "#112E51", initial: "US" },
    { name: "Troop HR", url: "https://community.troophr.com", color: "#7C3AED", initial: "T" },
  ];

  const hoverColors = [t.accent, t.pop, t.warm, t.violet, t.accent, t.pop, t.warm, t.violet, t.accent, t.pop, t.warm, t.violet];

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 24px 80px" }}>
      <section ref={header.ref} style={{ ...header.style, textAlign: "center", marginBottom: 48 }}>
        <SectionLabel t={t} color={t.warm}>Tools & Resources</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: t.text, marginBottom: 12, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em" }}>Job Seeker Resources</h2>
        <p style={{ fontSize: 17, color: t.textMuted, maxWidth: 560, margin: "0 auto", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>My favorite tools and platforms to supercharge your job search.</p>
      </section>

      <section ref={simplify.ref} style={{ ...simplify.style, background: t.bgCard, borderRadius: 20, border: `1px solid ${t.border}`, padding: "clamp(24px, 4vw, 40px)", marginBottom: 40, boxShadow: t.shadow, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: t.gradientTealPop }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
          <ColorPill color="#fff" bgColor={t.accent}>RECOMMENDED</ColorPill>
          <ColorPill color={t.pop} bgColor={t.popLight}>CHROME EXTENSION</ColorPill>
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: t.text, marginBottom: 10, fontFamily: "'Fraunces', Georgia, serif" }}>Simplify Jobs</h3>
        <p style={{ fontSize: 15, color: t.textMuted, lineHeight: 1.7, marginBottom: 20, fontFamily: "'DM Sans', sans-serif", maxWidth: 620 }}>A Chrome extension that auto-fills job applications for you. It saves hours of repetitive form-filling and lets you focus on what matters — landing interviews.</p>
        <a href="https://simplify.jobs/?invite=2051ab1b146&utm_source=referral" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: t.gradient, color: "#fff", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "all 0.25s", fontFamily: "'DM Sans', sans-serif", marginBottom: 24, boxShadow: `0 4px 12px ${t.accent}33` }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
          Get Simplify <ExternalLinkIcon />
        </a>
        <a href="https://simplify.jobs/?invite=2051ab1b146&utm_source=referral" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
          <img src={SIMPLIFY_GIF} alt="Simplify Jobs demo — click to visit" style={{ width: "100%", maxWidth: 700, borderRadius: 12, border: `1px solid ${t.border}`, boxShadow: t.shadow }} />
        </a>
      </section>

      <section ref={boards.ref} style={{ ...boards.style, marginBottom: 40 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 20, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradientTealPop, borderRadius: 2, display: "inline-block" }} />
          Job Boards
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          {jobSites.map((site, i) => (
            <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer"
              style={{ background: t.bgCard, borderRadius: 14, border: `1.5px solid ${t.border}`, padding: "20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 14, transition: "all 0.25s", boxShadow: t.shadow }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = hoverColors[i]; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: site.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: site.initial === "W" && site.color === "#FFCD00" ? "#333" : "#fff", fontWeight: 700, fontSize: site.initial.length > 1 ? 14 : 18, fontFamily: "'DM Sans', sans-serif" }}>{site.initial}</span>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>{site.name}</div>
                <div style={{ fontSize: 12, color: t.textMuted, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>Visit site <ExternalLinkIcon /></div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section ref={contract.ref} style={{ ...contract.style }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 20, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradientWarm, borderRadius: 2, display: "inline-block" }} />
          Contracting Companies
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          {[
            { name: "Eastridge", url: "https://jobs.eastridge.com/", color: "#E85D2A", initial: "E" },
            { name: "Microsoft", url: "https://us.microsoft.talentnet.community/", color: "#00A4EF", initial: "M" },
            { name: "Meta", url: "https://us.meta.talentnet.community/jobs/search", color: "#0081FB", initial: "M" },
            { name: "Apple", url: "https://lnkd.in/e49UAQkk", color: "#555555", initial: "A" },
            { name: "Airbnb", url: "https://lnkd.in/exGTKXbt", color: "#FF385C", initial: "A" },
          ].map((co, i) => {
            const cColors = [t.warm, t.accent, t.pop, t.violet, t.pop];
            return (
              <a key={co.name} href={co.url} target="_blank" rel="noopener noreferrer"
                style={{ background: t.bgCard, borderRadius: 14, border: `1.5px solid ${t.border}`, padding: "20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 14, transition: "all 0.25s", boxShadow: t.shadow }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = cColors[i]; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: co.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: co.initial === "" ? 20 : 18, fontFamily: "'DM Sans', sans-serif" }}>{co.initial || ""}</span>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>{co.name}</div>
                  <div style={{ fontSize: 12, color: t.textMuted, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>Browse jobs <ExternalLinkIcon /></div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 20, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradientTealPop, borderRadius: 2, display: "inline-block" }} />
          Comp Tools
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          {[
            { name: "Payscale", url: "https://www.payscale.com/research/US/Job", color: "#0066CC", initial: "P" },
            { name: "Salary.com", url: "https://www.salary.com", color: "#1A8754", initial: "S" },
            { name: "Blind", url: "https://www.teamblind.com/salary", color: "#00B45A", initial: "B" },
            { name: "Glassdoor", url: "https://www.glassdoor.com", color: "#0CAA41", initial: "G" },
            { name: "Levels.fyi", url: "https://www.levels.fyi/?tab=levels", color: "#2563EB", initial: "L" },
            { name: "Fishbowl", url: "https://www.fishbowlapp.com/", color: "#FF6B35", initial: "F" },
            { name: "H1Bdata.info", url: "http://h1bdata.info", color: "#8B5CF6", initial: "H1" },
            { name: "O*NET Online", url: "https://www.onetonline.org/", color: "#1D4ED8", initial: "O" },
          ].map((tool, i) => {
            const cColors = [t.accent, t.pop, t.warm, t.violet, t.accent, t.pop, t.warm, t.violet];
            return (
              <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                style={{ background: t.bgCard, borderRadius: 14, border: `1.5px solid ${t.border}`, padding: "20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 14, transition: "all 0.25s", boxShadow: t.shadow }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = cColors[i]; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: tool.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: tool.initial.length > 1 ? 14 : 18, fontFamily: "'DM Sans', sans-serif" }}>{tool.initial}</span>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>{tool.name}</div>
                  <div style={{ fontSize: 12, color: t.textMuted, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>Research pay <ExternalLinkIcon /></div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// ─── Contact Page ───
function ContactPage({ t }) {
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
        <a href="https://calendly.com/alisonvidler/15-min-chat" target="_blank" rel="noopener noreferrer"
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
      </div>
    </div>
  );
}

// ─── Footer ───
function Footer({ t }) {
  return (
    <footer style={{ background: t.footerBg, padding: "40px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: t.gradient }} />
      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "'Fraunces', Georgia, serif" }}>A</span>
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces', Georgia, serif", color: "#fff", opacity: 0.9 }}>Avidly</span>
        </div>
        <p style={{ fontSize: 13, color: t.footerText, fontFamily: "'DM Sans', sans-serif" }}>© {new Date().getFullYear()} Avidly Career Coaching. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Main App ───
export default function App() {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState("About");
  const t = themes[theme];
  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));
  const changePage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ minHeight: "100vh", background: t.bg, color: t.text, transition: "background 0.4s, color 0.4s", fontFamily: "'DM Sans', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }
        ::selection { background: ${t.accentSoft}; color: ${t.text}; }
        :focus-visible { outline: 2px solid ${t.accent}; outline-offset: 2px; border-radius: 4px; }
        img { max-width: 100%; height: auto; }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-nav { display: flex !important; } }
        @media (min-width: 769px) { .mobile-dropdown { display: none !important; } }
      `}</style>

      <Nav page={page} setPage={changePage} theme={theme} toggleTheme={toggleTheme} t={t} />
      <main role="main" aria-label={page}>
        {page === "About" && <AboutPage t={t} setPage={changePage} />}
        {page === "Services" && <ServicesPage t={t} />}
        {page === "Resources" && <ResourcesPage t={t} />}
        {page === "Contact" && <ContactPage t={t} />}
      </main>
      <Footer t={t} />
    </div>
  );
}
