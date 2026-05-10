type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, center }: Props) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-navy gold-line ${center ? "gold-line-center" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
