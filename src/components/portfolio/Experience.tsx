import Section from "./Section";
import Reveal from "./Reveal";

const items = [
  {
    role: "Launchpad Program Participant",
    track: "Data Analytics Track",
    org: "PwC (PwC Acceleration Centre)",
    period: "Mar 2026 — Present",
    location: "Remote",
    bullets: [
      "Selected for a competitive industry program among top students focusing on Python, data engineering, data analytics, and modern data systems.",
      "Gained hands-on exposure to Generative AI, prompt engineering, and data-driven problem-solving in enterprise environments.",
    ],
  },
  {
    role: "Bridge Program Trainee (Selected)",
    track: "CTI Bridge Program",
    org: "Citibank",
    period: "Mar 2026 — Present",
    location: "Chennai, India",
    bullets: [
      "Selected among 49 students for a technology training program focused on software engineering and financial technology systems.",
      "Participated in technical workshops, coding assessments, and enterprise system training related to banking technology.",
    ],
  },
  {
    role: "Cloud Virtual Intern (AICTE)",
    track: "AWS Academy & EduSkills",
    org: "AWS",
    period: "Apr 2025 — Jun 2025",
    location: "Remote",
    bullets: [
      "Deployed 3 cloud-based applications on AWS EC2 and Amazon S3, improving scalability and availability.",
      "Configured IAM roles and deployed REST APIs for 3 cloud-based applications on AWS EC2 and S3 improving scalability and system availability.",
    ],
  },
];

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title={
        <>
          Programs & <span className="text-gradient">experience</span>.
        </>
      }
    >
      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-px" />

        <div className="space-y-10 md:space-y-16">
          {items.map((item, i) => (
            <Reveal key={item.role} delay={i * 120}>
              <div
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow z-10" />

                <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                    {item.period}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">
                    {item.role}
                  </h3>
                  <div className="text-sm text-primary/80 font-medium mb-1">{item.track}</div>
                  <div className="text-muted-foreground">
                    {item.org} · {item.location}
                  </div>
                </div>

                <div className={`pl-12 md:pl-0 mt-3 md:mt-0 ${i % 2 === 1 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-colors">
                    <ul className="space-y-3">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-foreground/80 leading-relaxed flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
