import { Download } from "lucide-react";
import Reveal from "./Reveal";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=11gGfdGcD9JXQjQjijWDn3W0kMhDjoBT8";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 md:p-16 text-center">
            <div
              className="absolute inset-0 opacity-50"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                Resume
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Get the <span className="text-gradient">full story</span>.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Download a one-page summary of my experience, skills, and projects.
              </p>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Resume;
