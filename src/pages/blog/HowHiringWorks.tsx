import { useEffect, useRef, } from "react"

import type { Theme } from "../../types"

const HowHiringWorks = ({ t } : { t: Theme }) => {
  const sections = [
    {
      timestamp: "00:00",
      title: "Introduction: Job Searching Is Not What You Think",
      description: `
        Job searching is often treated like a simple equation: build skills → apply → get hired. In reality, it is far messier. Hiring decisions are influenced by systems, time pressure, human bias, internal politics, and imperfect processes. Understanding this changes how you approach everything, from writing your resume to interpreting rejection.

        The biggest shift is this: getting hired is not just about being qualified. It is about being understood quickly and correctly inside a chaotic system. Once you see that clearly, your strategy changes completely.
      `,
    },
    {
      timestamp: "05:41",
      title: "What You’ll Learn: Hiring Is a System, Not Just Skill",
      description: `
        Getting hired is not just about having skills. It is about understanding systems. Companies use structured processes like recruiting funnels and ATS tools, but the people operating them often rely on speed, assumptions, and incomplete information.

        Being effective as a candidate means learning how recruiters think, how hiring decisions are made, and how to present yourself in a way that fits those systems. The better you understand this, the more control you have over your job search.
      `,
    },
    {
      timestamp: "06:14",
      title: "Being a Good Applicant: Treat It Like Debugging",
      description: `
        A job search can be broken down into stages, and problems usually occur at a specific point rather than across the entire process. If interviews are not happening, the issue is likely your resume. If final rounds are not converting, the issue is likely your communication or positioning.

        Instead of repeating the same approach, it is more effective to identify where things break down and refine that step. This turns job searching into a process of iteration, similar to debugging.
      `,
    },
    {
      timestamp: "06:46",
      title: "Recruiting Funnels: How Hiring Actually Flows",
      description: `
        Hiring typically follows a funnel where candidates enter either by applying or being sourced, then move through recruiter screens, hiring manager interviews, team rounds, and final decisions.

        However, this structure varies. Smaller companies may skip steps or operate manually, while larger companies rely heavily on systems. The key insight is that the funnel exists to manage volume and speed, not to perfectly evaluate every candidate.
      `,
    },
    {
      timestamp: "09:21",
      title: "Referrals: Use Them the Right Way",
      description: `
        Referrals are most effective when used before applying, not after. Applying first can block the referral process entirely due to internal systems and referral bonuses.

        A referral increases visibility and gives you an internal advocate, but it does not guarantee success. Preparation still matters, and poor performance can reflect on the person who referred you.
      `,
    },
    {
      timestamp: "12:20",
      title: "Understanding Recruiters & Interviewers: They Think Differently Than You",
      description: `
        Recruiters are often under time pressure, handling many roles with limited training. They rely on quick scanning and assumptions rather than deep understanding.

        Hiring managers and team members evaluate differently. Some focus on skills, others on intuition or team fit. Because of this inconsistency, your job is to make your value obvious and easy to interpret.
      `,
    },
    {
      timestamp: "15:26",
      title: "Interviewing: Signals Are Not Always Reliable",
      description: `
        Interviews are not standardized. Some interviewers look for reasons to say yes and may even try to sell you the role. Others may be inexperienced or inconsistent.

        Your perception of an interview is often inaccurate. Feeling like you failed does not necessarily mean you did. The only reliable strategy is strong preparation and consistency.
      `,
    },
    {
      timestamp: "17:30",
      title: "Recruitment Politics: The Hidden Layer",
      description: `
        Hiring decisions are often influenced by factors you never see, such as internal candidates, scheduling conflicts, team dynamics, or pre-selected hires.

        This means rejection is not always about your performance. Many outcomes are shaped by internal circumstances that are completely outside your control.
      `,
    },
    {
      timestamp: "20:00",
      title: "Recruiting Meetings: People Are Advocating for You",
      description: `
        Recruiters actively present and sell candidates to hiring managers. They highlight achievements and try to move candidates forward.

        They are incentivized to fill roles quickly, so they benefit from pushing strong candidates. A clear, results-driven resume makes it easier for them to advocate for you.
      `,
    },
    {
      timestamp: "22:40",
      title: "Rejection Reasons: Not All Are Logical",
      description: `
        Rejections can happen due to real constraints like budget or role changes, but also due to subjective or arbitrary reasons.

        Because many of these factors are uncontrollable, it is more productive to focus on improving what you can control rather than trying to explain every rejection.
      `,
    },
    {
      timestamp: "25:55",
      title: "Titles Matter: Avoid CEO Confusion",
      description: `
        Using vague titles like CEO for a small personal project can create confusion. Recruiters may not understand what role you actually want.

        It is more effective to use a clear, role-specific title that aligns with the job you are targeting.
      `,
    },
    {
      timestamp: "27:23",
      title: "Hiring Chaos: Sometimes Rejection Is a Good Sign",
      description: `
        Hiring processes can be inconsistent, with candidates being reconsidered multiple times due to internal indecision.

        This kind of chaos can indicate deeper issues within a company. In some cases, rejection is actually beneficial because it helps you avoid unstable environments.
      `,
    },
    {
      timestamp: "29:19",
      title: "Entrepreneurship: A Strength If Positioned Well",
      description: `
        Starting your own business is valuable because it shows initiative and problem-solving ability. Many companies, especially startups, value this highly.

        The key is framing it correctly, connecting your experience to the company’s needs rather than presenting it as something separate.
      `,
    },
    {
      timestamp: "30:55",
      title: "Gaps in Work: Not as Bad as You Think",
      description: `
        Employment gaps are increasingly accepted. The bigger concern is whether you appear reliable and committed.

        Clarity matters because recruiters may misread resumes due to time pressure. A well-structured resume reduces the risk of incorrect assumptions.
      `,
    },
    {
      timestamp: "32:05",
      title: "Talent Tools: The System Is Messy",
      description: `
        Recruiting relies on many tools, but they often do not integrate well. This creates inefficiencies and inconsistencies in the hiring process.

        From a candidate perspective, this explains why the process can feel disorganized or unpredictable.
      `,
    },
    {
      timestamp: "33:02",
      title: "ATS (Applicant Tracking Systems): How You’re Managed",
      description: `
        ATS platforms are used to track candidates and move them through hiring stages. They store resumes, feedback, and sourcing data.

        Optimizing for ATS means using relevant keywords and making your resume easy to process and categorize.
      `,
    },
    {
      timestamp: "33:43",
      title: "Resume Reality: You Get Seconds, Not Minutes",
      description: `
        Resumes are scanned quickly, often in under 10 seconds. Most attention is on the top section.

        If your relevance is not immediately clear, you will likely be rejected. This makes clarity, alignment, and structure far more important than completeness.
      `,
    },
    {
      timestamp: "40:13",
      title: "Cover Letters: Usually Not Worth It",
      description: `
        Unless required, cover letters are rarely helpful. They can create friction and may prevent recruiters from quickly accessing your resume.

        In some cases, they are used as a filtering mechanism, but otherwise they are often ignored.
      `,
    },
    {
      timestamp: "46:13",
      title: "Work vs Education: Lead With Your Strength",
      description: `
        The order of your resume should depend on what best sells you. Early in your career, education may matter more. Later, work experience becomes more important.

        The key principle is to lead with your strongest, most relevant qualification.
      `,
    },
    {
      timestamp: "47:26",
      title: "LinkedIn Easy Apply: Speed Matters",
      description: `
        Easy Apply is an effective way to quickly submit applications, especially when time is critical.

        It is not the only strategy, but it helps generate opportunities faster and should be part of a broader approach.
      `,
    },
    {
      timestamp: "49:20",
      title: "Metrics: Show Impact, Not Just Tasks",
      description: `
        Strong resumes quantify impact, such as time saved, performance improved, or revenue increased.

        Metrics make your work tangible and help recruiters communicate your value internally. Without them, your experience is harder to evaluate.
      `,
    },
    {
      timestamp: "51:54",
      title: "CAR Method: A Simple Framework That Works",
      description: `
        The CAR method (Challenge, Action, Result) ensures that each bullet point shows what you did and why it mattered.

        This structure makes your experience clearer, more compelling, and easier to scan quickly.
      `,
    },
    {
      timestamp: "56:47",
      title: "How to Apply: Use Multiple Strategies",
      description: `
        There is no single best way to get a job. Some people succeed through referrals, others through networking or direct applications.

        The most effective approach is to diversify and use multiple strategies instead of relying on just one.
      `,
    },
  ]

  const playerRef = useRef<YT.Player | null>(null)

  const jumpTo = (timestamp:string) => {
    if (!playerRef.current) {
      return
    }

    const parts = timestamp.split(":").map(Number)

    let hours = 0
    let minutes = 0
    let seconds = 0

    if (parts.length === 3) {
      hours = parts[0]
      minutes = parts[1]
      seconds = parts[2]
    } else {
      minutes = parts[0]
      seconds = parts[1]
    }

    const minutesPerHour = 60  
    const secondsPerMinute = 60

    seconds += hours * minutesPerHour * secondsPerMinute
    seconds += minutes * secondsPerMinute

    const video = playerRef.current
    video.seekTo(seconds, true)
    video.playVideo()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("player")
      console.log(playerRef)
    }
  }, [])

  return (
    <div className="max-w-1200 mx-auto px-24 py-120">
      <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: t.text, marginBottom: 12, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "-0.02em" }}>How Hiring Works</h1>
      <div className="relative w-full max-w-800 aspect-video mx-auto my-12 md:my-60 rounded-16 overflow-hidden">
        <iframe width="100%" height="100%" id="player" src="https://www.youtube.com/embed/n0CJMMcdD4M?si=daLYlHqDoPVRJEyS&enablejsapi=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
      </div>

      <div className="mt-40">
        {sections.map((section, index) => {
          return (
            <div key={index} className="mt-30 first:mt-0">
              <h2 style={{ fontSize: 20, fontWeight: 700, color: t.text, fontFamily: "'DM Sans', sans-serif", }}>
                <button
                  type="button"
                  onClick={() => jumpTo(section.timestamp)}
                  className="cursor-pointer"
                  style={{ color: t.violet }}
                >
                  [{section.timestamp}]
                </button>
                <span className="ml-8">{section.title}</span>
              </h2>
              <p className="mt-12 whitespace-pre-wrap" style={{ fontSize: 18, color: t.textMuted, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                {section.description
                  .trim()
                  .split("\n")
                  .map(line => line.trim())
                  .join("\n")
                }
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HowHiringWorks