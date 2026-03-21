import { useEffect, useRef, useState } from "react"

import { SectionLabel } from "./SectionLabel"

import type { ThemeProperties } from "../types"

function TestimonialsCarousel({ t } : { t: ThemeProperties }) {
  const testimonials:Array<{
    quote: string,
    name: string,
    role: string,
    service: string,
    color: "teal" | "pop" | "warm" | "violet",
  }> = [
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

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStart = useRef<number | null>(null);
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

  const go = (dir:number) => setCurrent((c) => {
    const next = c + dir;
    if (next < 0) return maxIndex;
    if (next > maxIndex) return 0;
    return next;
  });

  const colors = {
    teal: t.accent,
    pop: t.pop,
    warm: t.warm,
    violet: t.violet
  };
  const bgs = {
    teal: t.accentLight,
    pop: t.popLight,
    warm: t.warmLight,
    violet: t.violetLight
  };

  const gapPx = 20;
  // Each card is (100% - gap) / perView wide
  const cardWidth = `calc((100% - ${gapPx * (perView - 1)}px) / ${perView})`;

  return (
    <div style={{ marginTop: 64 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <SectionLabel t={t} color={t.warm}>Verified Reviews</SectionLabel>
        <h3 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: t.text, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em", marginBottom: 8 }}>What Clients Are Saying</h3>
        <p style={{ fontSize: 16, color: t.textMuted, fontFamily: "'DM Sans', sans-serif" }}>Real results from real job seekers.</p>
      </div>

      <div style={{ position: "relative", overflow: "hidden", padding: "0 20px" }}>
        {/* Arrow buttons */}
        <button onClick={() => go(-1)} aria-label="Previous testimonial"
          style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", zIndex: 2, width: 42, height: 42, borderRadius: "50%", background: t.bgCard, border: `1.5px solid ${t.border}`, boxShadow: t.shadow, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.textMuted, transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.boxShadow = t.shadowHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textMuted; e.currentTarget.style.boxShadow = t.shadow; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button onClick={() => go(1)} aria-label="Next testimonial"
          style={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", zIndex: 2, width: 42, height: 42, borderRadius: "50%", background: t.bgCard, border: `1.5px solid ${t.border}`, boxShadow: t.shadow, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: t.textMuted, transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; e.currentTarget.style.boxShadow = t.shadowHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textMuted; e.currentTarget.style.boxShadow = t.shadow; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        {/* Track */}
        <div
          style={{
            overflow: "hidden",
            borderRadius: 20,
            margin: "0 28px",
            padding: "4px 0"
          }}
          onTouchStart={(e) => {
            if (touchStart.current) {
              touchStart.current = e.touches[0].clientX;
            }
          }}
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

export default TestimonialsCarousel