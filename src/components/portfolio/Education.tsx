import { GraduationCap, Calendar, MapPin } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const education = [
  {
    degree: "B.Tech Computer Science and Engineering",
    specialization: "Big Data Analytics",
    institution: "SRM Institute of Science and Technology",
    period: "Jul 2023 — May 2027",
    location: "Chennai, India",
    score: "CGPA: 9.72 / 10",
    highlight: "Till 5th Semester",
  },
  {
    degree: "Higher Secondary School (Class XII)",
    specialization: "MPC",
    institution: "Banasthali Vidyapeeth",
    period: "Jul 2021 — May 2022",
    location: "Rajasthan, India",
    score: "Percentage: 94.33%",
    highlight: null,
  },
];

const Education = () => {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Academic <span className="text-gradient">background</span>.
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 120}>
            <div className="group h-full p-8 rounded-3xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-elegant">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-subtle border border-primary/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">
                    {edu.degree}
                  </h3>
                  {edu.specialization && (
                    <span className="text-sm text-primary font-medium">
                      {edu.specialization}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-lg font-medium text-foreground/90 mb-4">
                {edu.institution}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-5">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary/70" />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary/70" />
                  {edu.location}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-subtle border border-primary/20">
                <span className="font-display font-bold text-primary">
                  {edu.score}
                </span>
                {edu.highlight && (
                  <span className="text-xs text-muted-foreground">
                    ({edu.highlight})
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Education;
