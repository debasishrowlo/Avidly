import { useState } from "react"

import { CheckIcon, ExternalLinkIcon } from "../icons"

import { useFadeIn } from "../hooks"

import type { ThemeProperties } from "../types"

type Schemes = {
  teal: { pill: string, check: string, borderHover: string },
  pop: { pill: string, check: string, borderHover: string },
  warm: { pill: string, check: string, borderHover: string },
  violet: { pill: string, check: string, borderHover: string },
  bundle: { pill: string, check: string, borderHover: string },
};

type ColorScheme = keyof Schemes

// ─── Price Card ───
function PriceCard({
  title,
  original,
  price,
  features,
  tag,
  t,
  colorScheme,
  link,
  linkLabel
} : {
  title: string,
  original?: string,
  price: string,
  features: string[],
  tag?: string,
  t: ThemeProperties,
  colorScheme: ColorScheme,
  link?: string,
  linkLabel?: string,
}) {
  const fade = useFadeIn();
  const [hovered, setHovered] = useState(false);
  const [showZelle, setShowZelle] = useState(false);
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

  const payMethods = [
    { name: "Venmo", url: "https://venmo.com/u/Alividler", color: "#008CFF", icon: "V" },
    { name: "PayPal", url: "https://www.paypal.com/paypalme/my/profile", color: "#003087", icon: "P" },
    { name: "Zelle", url: null, color: "#6D1ED4", icon: "Z" },
  ];

  return (
    <div
      style={{ background: isBundle ? t.gradient : t.bgCard, borderRadius: 16, border: `1.5px solid ${hovered ? s.borderHover : (isBundle ? "transparent" : t.border)}`, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16, transition: "all 0.3s", boxShadow: hovered ? t.shadowHover : t.shadow, transform: hovered ? `${fade.style.transform} translateY(-4px)` : fade.style.transform, position: "relative", overflow: "hidden" }}
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
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: s.pill, color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif" }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
          {linkLabel || "Watch Now"} <ExternalLinkIcon />
        </a>
      )}
      {/* Payment buttons for paid services */}
      {!isFree && (
        <div style={{ marginTop: "auto", borderTop: `1px solid ${isBundle ? "rgba(255,255,255,0.15)" : t.border}`, paddingTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: isBundle ? "rgba(255,255,255,0.6)" : t.textLight, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>Pay with</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {payMethods.map((pm) => (
              pm.url ? (
                <a key={pm.name} href={pm.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, background: isBundle ? "rgba(255,255,255,0.18)" : t.bgCardHover || t.borderLight, color: isBundle ? "#fff" : t.text, borderRadius: 7, padding: "7px 12px", fontSize: 12, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif", border: `1px solid ${isBundle ? "rgba(255,255,255,0.1)" : t.border}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = pm.color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = pm.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = isBundle ? "rgba(255,255,255,0.18)" : (t.bgCardHover || t.borderLight); e.currentTarget.style.color = isBundle ? "#fff" : t.text; e.currentTarget.style.borderColor = isBundle ? "rgba(255,255,255,0.1)" : t.border; }}>
                  <span style={{ width: 18, height: 18, borderRadius: 4, background: pm.color, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 800 }}>{pm.icon}</span>
                  {pm.name}
                </a>
              ) : (
                <button key={pm.name} onClick={() => setShowZelle(!showZelle)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, background: isBundle ? "rgba(255,255,255,0.18)" : t.bgCardHover || t.borderLight, color: isBundle ? "#fff" : t.text, borderRadius: 7, padding: "7px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif", border: `1px solid ${isBundle ? "rgba(255,255,255,0.1)" : t.border}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = pm.color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = pm.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = isBundle ? "rgba(255,255,255,0.18)" : (t.bgCardHover || t.borderLight); e.currentTarget.style.color = isBundle ? "#fff" : t.text; e.currentTarget.style.borderColor = isBundle ? "rgba(255,255,255,0.1)" : t.border; }}>
                  <span style={{ width: 18, height: 18, borderRadius: 4, background: pm.color, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 800 }}>{pm.icon}</span>
                  {pm.name}
                </button>
              )
            ))}
          </div>
          {showZelle && (
            <div style={{ marginTop: 12, background: isBundle ? "rgba(255,255,255,0.12)" : t.violetLight, borderRadius: 10, padding: "14px 16px", border: `1px solid ${isBundle ? "rgba(255,255,255,0.1)" : t.border}` }}>
              <img src="/mnt/user-data/uploads/3584f5755519f656834b8f4db1c8718ac2853b6b.jpeg" alt="Zelle QR Code — Scan in your bank app to pay" style={{ width: "100%", maxWidth: 200, borderRadius: 8, margin: "0 auto", display: "block" }} />
              <p style={{ fontSize: 12, color: isBundle ? "rgba(255,255,255,0.7)" : t.textMuted, textAlign: "center", marginTop: 8, fontFamily: "'DM Sans', sans-serif" }}>Scan with your bank app to pay via Zelle</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PriceCard