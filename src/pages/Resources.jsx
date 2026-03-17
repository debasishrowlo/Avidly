import { ColorPill, SectionLabel } from "../components"
import { ExternalLinkIcon, HeartIcon } from "../icons"

import { useFadeIn } from "../hooks"

const SIMPLIFY_GIF = "/Simplify_jobs.gif";

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
            { name: "Insight Global", url: "https://jobs.insightglobal.com/", color: "#0057B8", initial: "IG" },
          ].map((co, i) => {
            const cColors = [t.warm, t.accent, t.pop, t.violet, t.pop, t.accent];
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
        <p style={{ fontSize: 15, color: t.textMuted, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 20, maxWidth: 640 }}>
          Knowledge is power when it comes to negotiating your offer. Use these tools to research salary ranges, compare compensation across companies and levels, and walk into every negotiation with the data you need to advocate for yourself.
        </p>
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

      {/* Layoff Resources */}
      <section style={{ marginTop: 40 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 8, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradientWarm, borderRadius: 2, display: "inline-block" }} />
          Layoff Resources
          <span style={{ color: t.pop, marginLeft: 4 }}><HeartIcon /></span>
        </h3>
        <p style={{ fontSize: 14, color: t.textMuted, marginBottom: 20, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
          If you've been laid off or are worried about potential layoffs, these resources can help you stay informed and take action.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          {[
            { name: "File for Unemployment", desc: "Find your state's filing site", url: "https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/find-unemployment-benefits.aspx", color: "#0D9488", initial: "UI" },
            { name: "USAGov Unemployment", desc: "Federal guide & state map", url: "https://www.usa.gov/unemployment-benefits", color: "#112E51", initial: "US" },
            { name: "WARN Tracker", desc: "Search layoff notices by company", url: "https://www.warntracker.com/", color: "#DC2626", initial: "W" },
            { name: "WARN Firehose", desc: "Daily updates, all 50 states", url: "https://warnfirehose.com/data/layoffs", color: "#EA580C", initial: "W" },
            { name: "Layoff Data", desc: "Comprehensive WARN database", url: "https://layoffdata.com/", color: "#7C3AED", initial: "L" },
            { name: "LayoffAlert.org", desc: "Get email alerts for your company", url: "https://layoffalert.org/", color: "#D946A8", initial: "LA" },
            { name: "DOL WARN Act", desc: "Official federal WARN info", url: "https://www.dol.gov/agencies/eta/layoffs/warn", color: "#1D4ED8", initial: "DOL" },
          ].map((res, i) => {
            const cColors = [t.accent, t.accent, t.pop, t.warm, t.violet, t.pop, t.accent];
            return (
              <a key={res.name} href={res.url} target="_blank" rel="noopener noreferrer"
                style={{ background: t.bgCard, borderRadius: 14, border: `1.5px solid ${t.border}`, padding: "20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 14, transition: "all 0.25s", boxShadow: t.shadow }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = cColors[i]; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: res.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: res.initial.length > 2 ? 11 : res.initial.length > 1 ? 13 : 18, fontFamily: "'DM Sans', sans-serif" }}>{res.initial}</span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>{res.name}</div>
                  <div style={{ fontSize: 12, color: t.textMuted, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>{res.desc} <ExternalLinkIcon /></div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Invite Only */}
      <section style={{ marginTop: 40 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 20, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradient, borderRadius: 2, display: "inline-block" }} />
          Invite Only
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
          <a href="https://sqmafia.vercel.app/" target="_blank" rel="noopener noreferrer"
            style={{ background: t.bgCard, borderRadius: 14, border: "1.5px solid " + t.border, padding: "20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 14, transition: "all 0.25s", boxShadow: t.shadow }}
            onMouseEnter={function(e) { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={function(e) { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "#00D632", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>SQ</span>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>Square Mafia</div>
              <div style={{ fontSize: 12, color: t.textMuted, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>Visit site</div>
            </div>
          </a>
          <a href="https://discord.gg/rghvBD8n" target="_blank" rel="noopener noreferrer"
            style={{ background: t.bgCard, borderRadius: 14, border: "1.5px solid " + t.border, padding: "20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 14, transition: "all 0.25s", boxShadow: t.shadow }}
            onMouseEnter={function(e) { e.currentTarget.style.boxShadow = t.shadowHover; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={function(e) { e.currentTarget.style.boxShadow = t.shadow; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "#E60023", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>PF</span>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>Pin-Friends</div>
              <div style={{ fontSize: 12, color: t.textMuted, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>Join Discord</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage