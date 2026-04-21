import { Code2, Sparkles, Zap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const stats = [
  { icon: Code2, label: "Clean Code", value: "Always" },
  { icon: Sparkles, label: "Projects Built", value: "10+" },
  { icon: Zap, label: "Tech Stacks", value: "Full Stack" },
];

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Crafting digital products with <span className="text-gradient">purpose</span>.
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <Reveal delay={100} className="lg:col-span-3">
          <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed font-light">
            I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with
            strong skills in building scalable applications using{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-primary font-medium">Node.js</span>, and cloud technologies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            I enjoy solving real-world problems and creating efficient, user-friendly systems
            — from intuitive frontends to robust backends and resilient cloud infrastructure.
          </p>
        </Reveal>

        <div className="lg:col-span-2 space-y-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={200 + i * 100}>
              <div className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-elegant">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-subtle border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
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

export default About;
