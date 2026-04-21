import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
}

const Section = ({ id, eyebrow, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="py-24 md:py-32 relative">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gradient-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {eyebrow}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
};

export default Section;
