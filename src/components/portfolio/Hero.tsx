import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from "lucide-react";
import TypingText from "./TypingText";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=11gGfdGcD9JXQjQjijWDn3W0kMhDjoBT8";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-orb absolute top-1/4 -left-32 w-96 h-96 rounded-full animate-glow-pulse" />
        <div
          className="glow-orb absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-mono text-muted-foreground mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for opportunities
            </div>

            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Hi, I'm <span className="text-gradient">Anamika Raj</span>
            </h1>

            <h2
              className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground/90 mb-6 min-h-[1.5em] animate-fade-in-up"
              style={{ animationDelay: "250ms" }}
            >
              <TypingText
                phrases={[
                  "Full Stack Developer",
                  "React Specialist",
                  "Cloud Enthusiast",
                  "Problem Solver",
                ]}
              />
            </h2>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              Building scalable web applications with modern technologies — clean code,
              thoughtful design, and reliable systems that solve real problems.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 mb-12 animate-fade-in-up"
              style={{ animationDelay: "550ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary text-foreground font-medium transition-all duration-300 hover:border-primary/50"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div
              className="flex items-center gap-5 animate-fade-in-up"
              style={{ animationDelay: "700ms" }}
            >
              {[
                { icon: Github, href: "https://github.com/AnamikaRaj11", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/anamika-raj-88062728a", label: "LinkedIn" },
                { icon: Code2, href: "https://leetcode.com/u/AnamikaRaj11/", label: "LeetCode" },
                { icon: Mail, href: "mailto:anamikarajwork@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transition-transform duration-300"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div
            className="hidden lg:flex lg:col-span-2 justify-center animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl scale-110" />
              {/* Gradient ring */}
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full p-[3px] bg-gradient-primary shadow-glow">
                <img
                  src="/profile.jpg"
                  alt="Anamika Raj"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-subtle border border-primary/30 animate-bounce" style={{ animationDuration: "3s" }} />
              <div className="absolute -bottom-2 -left-6 w-5 h-5 rounded-full bg-gradient-subtle border border-primary/20 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
