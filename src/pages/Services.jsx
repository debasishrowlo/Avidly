import { SectionLabel, PriceCard, TestimonialsCarousel } from "../components"
import { HeartIcon } from "../icons"

import { useFadeIn } from "../hooks"

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
          <PriceCard t={t} colorScheme="teal" title="How Companies Recruit" price="Free" link="https://www.youtube.com/live/n0CJMMcdD4M?si=9DsaEiU8Ka0g0mjD" linkLabel="Watch Now" features={["Understand the recruiting process from the inside", "Learn how ATS and hiring tools work", "Know what recruiters are really looking for"]} />
          <PriceCard t={t} colorScheme="pop" title="Resume Feedback" original="250" price="150" features={["Get resume feedback & comments", "Tailored for target jobs", "Ongoing guidance"]} />
          <PriceCard t={t} colorScheme="warm" title="Resume Review & Rewrite" original="500" price="350" features={["2 sessions for deep-dive review", "ATS optimization guidance", "Rewrite with insider knowledge"]} />
          <PriceCard t={t} colorScheme="violet" title="Interview Practice" original="300" price="250" features={["Mock interviews with real feedback", "Behavioral & technical prep", "Confidence-building techniques"]} />
          <PriceCard t={t} colorScheme="teal" title="Negotiation Coaching" original="450" price="350" features={["Salary & offer negotiation strategy", "Scripts and frameworks", "Know your leverage"]} />
          <PriceCard t={t} colorScheme="bundle" title="All Services Bundle" original="1250" price="1000" tag="Best Value" features={["Everything listed above", "Priority scheduling", "Full support from search to offer"]} />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 24, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 36, height: 4, background: t.gradientWarm, borderRadius: 2, display: "inline-block" }} />
          Layoff Support Services
          <span style={{ color: t.pop, marginLeft: 4 }}><HeartIcon /></span>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 16 }}>
          <PriceCard t={t} colorScheme="warm" title="Layoff Checklist" price="Free" link="https://docs.google.com/document/d/18LKuoYX6MpbaaRDOSJSq5eV7stcbiXsE/edit?usp=sharing&ouid=110756126822033645252&rtpof=true&sd=true" linkLabel="Get Checklist" features={["Systems access — save contacts, files, & work samples", "Health insurance & COBRA coverage", "Expense reimbursements & final pay", "401k & retirement accounts", "Severance package review", "Unemployment filing steps", "References & recommendation letters", "Equipment return & personal items", "Performance reviews & metrics for interviews", "Paystubs & proof of income"]} />
          <PriceCard t={t} colorScheme="pop" title="Layoff 1:1 Support" original="500" price="250" features={["Severance negotiation advice", "Unemployment filing guidance", "Next steps action plan", "Emotional support & strategy"]} />
        </div>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel t={t} />
    </div>
  );
}

export default ServicesPage