// ─── Color Pill ───
function ColorPill({ children, color, bgColor }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: bgColor, color, borderRadius: 20, padding: "5px 12px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", fontFamily: "'DM Sans', sans-serif" }}>
      {children}
    </span>
  );
}

export default ColorPill