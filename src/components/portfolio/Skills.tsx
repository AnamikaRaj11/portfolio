import { Cloud, Code, Database, Server, Wrench, FileCode } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const groups = [
  {
    icon: FileCode,
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    icon: Code,
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "RESTful API"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, IAM)", "Docker"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"],
  },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={
        <>
          Technologies I <span className="text-gradient">work with</span>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 80}>
            <div className="group h-full p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-subtle border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <g.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary border border-border/50 text-foreground/85 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
