import { Github } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Sora",
    subtitle: "AI Job Portal",
    description:
      "A scalable full-stack job portal supporting 100+ users for job search, posting, and application management. Built with AI-powered recommendation engine, ATS resume scoring, and RESTful APIs managing 1000+ job records with optimized database queries.",
    tech: ["React", "Node.js", "Python", "MongoDB"],
    accent: "from-violet-500/20 to-blue-500/20",
    github: "https://github.com/AnamikaRaj11/sora-job-portal.git",
  },
  {
    name: "CareerCraft",
    subtitle: "AI Career Guidance Platform",
    description:
      "An AI-powered career guidance platform delivering personalized career and skill recommendations for 100+ users across 5+ career domains. Features resume parsing, skill extraction, ATS-friendly resume generation with dynamic PDF templates.",
    tech: ["Python", "Flask", "React.js", "Node.js"],
    accent: "from-blue-500/20 to-cyan-500/20",
    github: "https://github.com/AnamikaRaj11",
  },
  {
    name: "CloudShelf",
    subtitle: "Cloud-Based E-Library System",
    description:
      "A cloud-based digital library enabling storage and management of 500+ digital books. Features REST APIs with role-based access control, secure authentication, and AWS S3 integration for scalable cloud storage with optimized retrieval.",
    tech: ["Flask", "React.js", "MySQL", "AWS S3"],
    accent: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/AnamikaRaj11/CloudShelf.git",
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={
        <>
          Projects I'm <span className="text-gradient">proud of</span>.
        </>
      }
      description="A selection of full stack applications where I led design, development, and deployment."
    >
      <div className="grid gap-6 md:gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <article className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 md:p-10 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant">
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{ background: "var(--gradient-glow)" }}
              />

              <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-primary">
                    0{i + 1}
                  </span>
                </div>

                <div className="md:col-span-8">
                  <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {p.name}
                    </h3>
                    <span className="text-muted-foreground text-base md:text-lg">
                      — {p.subtitle}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-secondary/70 border border-border text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:flex-col md:items-end gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all duration-300"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
