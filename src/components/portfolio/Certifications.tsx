import { Award, Cloud, Database, Sparkles } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const certifications = [
  {
    name: "AWS Cloud Architect",
    issuer: "AWS Academy",
    icon: Cloud,
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "AWS",
    icon: Cloud,
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "AWS AI Practitioner",
    issuer: "AWS",
    icon: Sparkles,
    accent: "from-violet-500/20 to-purple-500/20",
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    icon: Sparkles,
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "DBMS Certification",
    issuer: "Scaler",
    icon: Database,
    accent: "from-pink-500/20 to-rose-500/20",
  },
];

const Certifications = () => {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={
        <>
          Credentials that <span className="text-gradient">validate</span>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 80}>
            <div className="group relative h-full overflow-hidden p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gradient-subtle border border-primary/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <cert.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base mb-1 leading-tight">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Award size={13} className="text-primary/60" />
                    {cert.issuer}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
