import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote, Sparkles, Award, Users, Target, Layers } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { services, industries } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVN Global Consulting | Virtual CFO & Financial Advisory Ahmedabad" },
      { name: "description", content: "Transforming vision into financial reality. Virtual CFO, FP&A, transaction advisory and tax services for ambitious businesses." },
      { property: "og:title", content: "SVN Global Consulting" },
      { property: "og:description", content: "Strategic Financial Consulting, Virtual CFO, Tax Advisory, Transaction Structuring." },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: Layers, value: "8+", label: "Industries" },
  { icon: Target, value: "End-to-End", label: "Financial Solutions" },
];

const why = [
  { icon: Award, title: "20+ Years Experience", desc: "Two decades of advising founders, boards and CFOs across geographies." },
  { icon: Users, title: "Expert CA/CFA/CPA Team", desc: "Multidisciplinary professionals with global certifications." },
  { icon: Target, title: "Tailored Solutions", desc: "Bespoke advisory shaped to your business model and growth stage." },
  { icon: Sparkles, title: "Cost Efficient", desc: "Premium expertise at a fraction of full-time hiring cost." },
  { icon: Layers, title: "Industry-Specific Expertise", desc: "Sector intelligence across manufacturing, real estate, fintech and more." },
  { icon: CheckCircle2, title: "Strategic Decision Support", desc: "Data-driven insights for confident leadership decisions." },
];

const benefits = [
  { title: "Improved Cash Flow", desc: "Engineered receivables and payables cycles that release working capital." },
  { title: "Better Profitability", desc: "Margin engineering through cost optimization and pricing strategy." },
  { title: "Strategic Growth Roadmap", desc: "Long-range plans aligned to founder vision and market opportunity." },
  { title: "Risk Mitigation", desc: "Proactive financial governance and scenario-based risk planning." },
  { title: "Investor Readiness", desc: "Pitch decks, models and data rooms that win institutional capital." },
];

const testimonials = [
  { quote: "SVN transformed our financial planning and investor readiness. Our Series A closed in 90 days.", name: "Founder & CEO", role: "Fintech Startup" },
  { quote: "Their CFO advisory unlocked 30% improvement in working capital cycles within two quarters.", name: "Managing Director", role: "Manufacturing Group" },
  { quote: "Partnering with SVN gave us boardroom-grade financial intelligence at startup pricing.", name: "Co-Founder", role: "Export Business" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-navy-foreground">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        </div>
        <div className="container-pro relative py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Strategic Financial Advisory</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
              Transforming Vision Into <span className="text-gradient-gold">Financial Reality</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Strategic Financial Consulting, Virtual CFO, Tax Advisory, Transaction Structuring, and Business Growth Solutions for ambitious enterprises.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold text-gold-foreground px-7 py-4 text-sm font-semibold shadow-gold hover:scale-[1.02] transition-transform">
                Book Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:+917048456589" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-semibold hover:bg-white/10 transition-colors">
                Talk to Expert
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </section>

      {/* STATS */}
      <section className="container-pro -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden shadow-elegant bg-background">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8 text-center">
              <s.icon className="mx-auto text-gold mb-3" size={28} />
              <div className="text-3xl md:text-4xl font-display font-semibold text-navy">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-pro py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="About SVN Global"
              title="Empowering Businesses with Strategic Financial Leadership"
              subtitle="SVN Global Consulting is a trusted name in Corporate Finance and Business Strategy with 20+ years driving business transformation, growth, and value creation for ambitious enterprises across continents."
            />
            <div className="mt-8 p-6 rounded-lg border border-border bg-secondary/30">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Leadership</p>
              <p className="font-display text-xl text-navy font-semibold">CA Vijaye Narwani</p>
              <p className="mt-1 text-sm text-muted-foreground">FCA, ACMA, CGMA, CPA, CISA</p>
              <p className="mt-3 text-sm text-muted-foreground">In strategic collaboration with <span className="text-navy font-medium">ARA &amp; Company Chartered Accountants</span>.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl bg-gradient-navy shadow-elegant relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "radial-gradient(circle at 30% 20%, oklch(0.74 0.13 80 / 0.5), transparent 50%)",
              }} />
              <div className="absolute bottom-8 left-8 right-8">
                <Quote className="text-gold mb-4" size={32} />
                <p className="text-navy-foreground font-display text-2xl leading-snug">
                  "We don't just balance books — we architect financial futures."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-gradient-gold shadow-gold hidden md:block" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-pro">
          <SectionHeading center eyebrow="Our Services" title="Comprehensive Financial Advisory" subtitle="From CFO leadership to transaction structuring — a full-spectrum partnership for sustainable growth." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group p-8 rounded-xl bg-background border border-border hover:border-gold hover:shadow-elegant transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-gradient-navy flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all">
                  <s.icon className="text-gold group-hover:text-navy" size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.slice(0, 3).map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-foreground/70">
                      <span className="h-1 w-1 rounded-full bg-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors">
              Explore all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-pro py-24 md:py-32">
        <SectionHeading center eyebrow="Why Choose Us" title="Built for Boardroom-Grade Excellence" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {why.map((w) => (
            <div key={w.title} className="p-6 rounded-xl border border-border hover:bg-secondary/40 transition-colors">
              <w.icon className="text-gold mb-4" size={24} />
              <h3 className="font-display text-lg font-semibold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gradient-navy text-navy-foreground py-24 md:py-32">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Industries We Serve</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold">Sector Expertise That Travels</h2>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
            {industries.map((i) => (
              <div key={i.name} className="bg-navy hover:bg-navy/80 p-8 flex flex-col items-center text-center transition-colors">
                <i.icon className="text-gold mb-3" size={28} />
                <span className="font-medium">{i.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-pro py-24 md:py-32">
        <SectionHeading eyebrow="Outcomes That Matter" title="Benefits of Partnering With SVN" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={b.title} className="p-8 rounded-xl bg-gradient-to-br from-secondary/60 to-background border border-border">
              <div className="text-gold font-display text-3xl">0{i + 1}</div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-pro">
          <SectionHeading center eyebrow="Client Voices" title="Trusted by Founders & Boards" />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-xl bg-background shadow-card border border-border">
                <Quote className="text-gold" size={28} />
                <p className="mt-4 text-foreground/85 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-pro py-24">
        <div className="rounded-2xl bg-gradient-hero p-12 md:p-20 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.74 0.13 80 / 0.4), transparent 50%)",
          }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy-foreground max-w-3xl mx-auto leading-tight">
              Ready to architect your next financial chapter?
            </h2>
            <p className="mt-5 text-white/75 max-w-xl mx-auto">
              Schedule a complimentary 30-minute strategy session with our senior advisors.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-gold text-gold-foreground px-8 py-4 text-sm font-semibold shadow-gold hover:scale-[1.02] transition-transform">
              Schedule Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
