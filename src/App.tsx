import { useState } from "react";

import ServicesPage from "./pages/Services"
import AboutPage from "./pages/About"
import ResourcesPage from "./pages/Resources"
import ContactPage from "./pages/Contact"

import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons"

import "./App.css"

type ThemeProperties = {
  bg: string,
  bgAlt: string,
  bgCard: string,
  bgCardHover: string,
  text: string,
  textMuted: string,
  textLight: string,
  accent: string,
  accentHover: string,
  accentLight: string,
  accentSoft: string,
  pop: string,
  popLight: string,
  popSoft: string,
  warm: string,
  warmLight: string,
  warmSoft: string,
  violet: string,
  violetLight: string,
  border: string,
  borderLight: string,
  shadow: string,
  shadowHover: string,
  shadowLg: string,
  navBg: string,
  gradient: string,
  gradientTealPop: string,
  gradientWarm: string,
  gradientSubtle: string,
  gradientHero: string,
  tagBg: string,
  tagText: string,
  footerBg: string,
  footerText: string,
}

type Page = "About" | "Services" | "Resources" | "Contact"

type Themes = {
  light: ThemeProperties,
  dark: ThemeProperties,
}

// ─── Theme tokens ───
const themes: Themes = {
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
}

const Logo = () => {
  return (
    <svg width="60" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 150 72 L 60 228 L 240 228 Z" stroke="url(#gradient)" strokeWidth="4.5" fill="none"/>
      <circle cx="150" cy="72" r="24" fill="#E5960B"/>
      <circle cx="60" cy="228" r="24" fill="#0D9488"/>
      <circle cx="240" cy="228" r="24" fill="#D946A8"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0D9488"/>
          <stop offset="50%" stopColor="#D946A8"/>
          <stop offset="100%" stopColor="#E5960B"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

// ─── Nav ───
function Nav({
  page, 
  setPage, 
  theme, 
  toggleTheme, 
  t,
} : {
  page: Page, 
  theme: keyof typeof themes, 
  t: ThemeProperties,
  setPage: (page: Page) => void,
  toggleTheme: () => void,
}) {
  const [open, setOpen] = useState(false);
  const pages:Page[] = ["About", "Services", "Resources", "Contact"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: t.navBg, backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderBottom: `1px solid ${t.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <button onClick={() => setPage("About")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, padding: 0 }} aria-label="Home">
          <Logo />
          <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Fraunces', Georgia, serif", color: t.text, letterSpacing: "-0.02em" }}>Avidly</span>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="desktop-nav">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              aria-current={page === p ? "page" : undefined}
              style={{
                background: page === p ? t.accentLight : "transparent",
                color: page === p ? t.accent : t.textMuted,
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "'DM Sans', sans-serif"
              }}
              onMouseEnter={(e) => { if (page !== p) e.currentTarget.style.color = t.text; }}
              onMouseLeave={(e) => { if (page !== p) e.currentTarget.style.color = t.textMuted; }}
            >
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

// ─── Footer ───
function Footer({ t } : { t: ThemeProperties }) {
  return (
    <footer style={{ background: t.footerBg, padding: "40px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: t.gradient }} />
      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <Logo />
          <span style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces', Georgia, serif", color: "#fff", opacity: 0.9 }}>Avidly</span>
        </div>
        <p style={{ fontSize: 13, color: t.footerText, fontFamily: "'DM Sans', sans-serif" }}>© {new Date().getFullYear()} Avidly Career Coaching. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Main App ───
export default function App() {
  const [theme, setTheme] = useState<keyof typeof themes>("light");
  const [page, setPage] = useState<Page>("About");
  const toggleTheme = () => setTheme(p => (p === "light" ? "dark" : "light"));
  const changePage = (p:Page) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const t = themes[theme];

  return (
    <div style={{ minHeight: "100vh", background: t.bg, color: t.text, transition: "background 0.4s, color 0.4s", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden", width: "100%" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        html, body {
          margin: 0; 
          padding: 0; 
          overflow-x: hidden; 
          width: 100%; 
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ::selection {
          background: ${t.accentSoft};
          color: ${t.text};
        }
        :focus-visible {
          outline: 2px solid ${t.accent};
          outline-offset: 2px;
          border-radius: 4px;
        }
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          } 
          .mobile-nav {
            display: flex !important;
          } 
        }
        @media (min-width: 769px) {
          .mobile-dropdown {
            display: none !important;
          }
        }
      `}</style>
      <Nav page={page} setPage={changePage} theme={theme} toggleTheme={toggleTheme} t={t} />
      <main role="main" aria-label={page}>
        {(page === "About") && <AboutPage t={t} setPage={changePage} />}
        {(page === "Services") && <ServicesPage t={t} />}
        {(page === "Resources") && <ResourcesPage t={t} />}
        {(page === "Contact") && <ContactPage t={t} setPage={changePage} />}
      </main>
      <Footer t={t} />
    </div>
  );
}