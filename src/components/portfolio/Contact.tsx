import { useState } from "react";
import { Github, Linkedin, Mail, Code2, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Section from "./Section";
import Reveal from "./Reveal";
import { toast } from "@/hooks/use-toast";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "anamikarajwork@gmail.com",
    href: "mailto:anamikarajwork@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/anamika-raj-88062728a",
    href: "https://www.linkedin.com/in/anamika-raj-88062728a",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@AnamikaRaj11",
    href: "https://github.com/AnamikaRaj11",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "@AnamikaRaj11",
    href: "https://leetcode.com/u/AnamikaRaj11/",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: open mailto if EmailJS is not configured
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.open(
        `mailto:anamikarajwork@gmail.com?subject=${subject}&body=${body}`,
        "_blank"
      );
      toast({
        title: "Opening your email client ✨",
        description: "Your message has been pre-filled. Just hit send!",
      });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Anamika",
        },
        publicKey
      );
      toast({
        title: "Message sent! ✨",
        description:
          "Thanks for reaching out. I'll get back to you soon!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description:
          "Please try emailing me directly at anamikarajwork@gmail.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build <span className="text-gradient">something great</span>.
        </>
      }
      description="Open to full-time roles, freelance projects, and meaningful collaborations."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-2">
          <div className="space-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:translate-x-1"
              >
                <div className="p-3 rounded-xl bg-gradient-subtle border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="text-primary" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-0.5">
                    {s.label}
                  </div>
                  <div className="font-medium truncate">{s.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-gradient-card border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
