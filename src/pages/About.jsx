import { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import autoScrollPlugin from "embla-carousel-auto-scroll"

import { ColorPill, SectionLabel, TestimonialsCarousel } from "../components"
import { ArrowIcon } from "../icons"
import { calendlyLink } from "../constants"

import { useFadeIn } from "../hooks"

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

// ─── About Page ───
function AboutPage({ t, setPage }) {
  const hero = useFadeIn();
  const bio = useFadeIn();
  const vid = useFadeIn();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      draggable: false,
      dragFree: true,
    }, 
    [autoScrollPlugin({
      draggable: false,
      defaultInteraction: false,
    })]
  )

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (autoScroll) {
      autoScroll.play()
    }
  }, [emblaApi])

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
              <span style={{
                background: `${t.gradient} text`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}>insider's perspective</span>
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
            <a
              href={calendlyLink}
              target="_blank"
              style={{
                background: t.bgCard, 
                color: t.accent, 
                border: `2px solid ${t.border}`, 
                borderRadius: 12, 
                padding: "14px 28px", 
                fontSize: 15, 
                fontWeight: 600, 
                cursor: "pointer", 
                transition: "all 0.25s", 
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book a Free Chat
            </a>
          </div>
        </div>
      </section>

      <section ref={bio.ref} style={{ ...bio.style, maxWidth: 820, margin: "0 auto", marginTop: "80px", padding: "0 24px 40px" }}>
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
          <div className="embla" style={{ marginTop: "30px", userSelect: "none" }}>
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {[
                  "jp-morgan",
                  "block",
                  "ab-in-bev",
                  "live-intent",
                  "pinterest",
                  "zx-ventures",
                  "quantilope",
                ].map((logo, i) => (
                  <div className="embla__slide" key={i}>
                    <img src={`/logos/${logo}.jpg`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="youtube-video-container" ref={vid.ref} style={{ ...vid.style }}>
        <section className="video" style={{ maxWidth: 800 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: t.shadowLg, border: `1px solid ${t.border}`, position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/n0CJMMcdD4M?si=daLYlHqDoPVRJEyS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
          </div>
        </section>

        <section className="video" style={{ maxWidth: 800 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: t.shadowLg, border: `1px solid ${t.border}`, position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kSQOy6xOws0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
          </div>
        </section>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "40px", }}>
        <TestimonialsCarousel t={t} />
      </div>
    </div>
  );
}

export default AboutPage