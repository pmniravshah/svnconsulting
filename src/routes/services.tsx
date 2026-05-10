import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/site";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Virtual CFO, Tax & Transaction Advisory — SVN Global" },
      { name: "description", content: "Virtual CFO, FP&A, working capital, transaction advisory, tax, audit and secretarial compliance — full-spectrum financial advisory." },
      { property: "og:title", content: "Services — SVN Global Consulting" },
      { property: "og:description", content: "End-to-end financial advisory for ambitious businesses." },
    ],
  }),
  component: Services,
});

const faqs = [
  { q: "Who owns accountability for outcomes?", a: "Every engagement is led by a partner-level advisor with end-to-end ownership. You always know who is accountable." },
  { q: "How does collaboration work day to day?", a: "We embed with your finance team via shared tools, scheduled cadences, and dedicated communication channels — not via tickets." },
  { q: "What is the pricing or retainer model?", a: "We offer monthly retainers for Virtual CFO engagements and project-based fees for transactions and assurance work. All scopes are transparent and outcome-anchored." },
  { q: "Which industries do you serve?", a: "Manufacturing, real estate, fintech, oil & gas, construction, shipping, exports and more — with sector-specific frameworks." },
  { q: "How often do you visit on-site?", a: "We blend on-site presence (typically weekly or fortnightly for retainer clients) with structured remote collaboration." },
  { q: "How do you ensure continuity?", a: "Engagements are staffed by teams, not individuals. Knowledge is documented, and senior advisors stay involved across the lifecycle." },
];

function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A Full-Spectrum Financial Partnership"
        subtitle="From Virtual CFO leadership to transaction structuring, we deliver the strategic clarity and operational rigor your business deserves."
      />

      <section className="container-pro py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.title} className="group p-10 rounded-xl border border-border hover:border-gold hover:shadow-elegant transition-all bg-background">
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-lg bg-gradient-navy flex items-center justify-center shrink-0 group-hover:bg-gradient-gold transition-all">
                  <s.icon className="text-gold group-hover:text-navy" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gold font-medium tracking-widest">0{i + 1}</p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-navy">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="text-gold shrink-0" size={14} /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-pro max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4 text-center">Frequently Asked</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy text-center">Your questions, answered.</h2>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-lg border border-border bg-background overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-navy">{f.q}</span>
                  <ChevronDown className={`text-gold transition-transform ${open === i ? "rotate-180" : ""}`} size={20} />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-7 py-4 text-sm font-semibold hover:bg-gradient-gold hover:text-gold-foreground transition-all">
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
