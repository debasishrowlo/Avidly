import { SparkleIcon } from "../icons"

// ─── Section Label ───
export function SectionLabel({ children, t, color }) {
  const c = color || t.accent;
  const bg = color === t.pop ? t.popLight : color === t.warm ? t.warmLight : t.accentLight;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: bg, borderRadius: 20, padding: "6px 14px", marginBottom: 16 }}>
      <SparkleIcon />
      <span style={{ fontSize: 12, fontWeight: 600, color: c, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>{children}</span>
    </div>
  );
}

export default SectionLabel