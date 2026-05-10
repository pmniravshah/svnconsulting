type Props = { eyebrow?: string; title: string; subtitle?: string };

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative bg-gradient-hero text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.74 0.13 80 / 0.3), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.5 0.12 250 / 0.3), transparent 50%)",
      }} />
      <div className="container-pro relative py-24 md:py-32">
        {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{eyebrow}</p>}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold max-w-4xl leading-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
