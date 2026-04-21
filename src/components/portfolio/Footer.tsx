const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-mono">
          © {new Date().getFullYear()} Anamika Raj — Crafted with care.
        </div>
        <div className="font-mono text-xs">Designed & built from scratch.</div>
      </div>
    </footer>
  );
};

export default Footer;
